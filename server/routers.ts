import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createOrderInquiry } from "./db";
import { notifyOwner } from "./_core/notification";
import { PRODUCTS } from "../drizzle/schema";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  orders: router({
    submitInquiry: publicProcedure
      .input(
        z.object({
          productId: z.enum(["latte", "boba", "protein", "shake", "coffee"]),
          fullName: z.string().min(1, "Full name is required"),
          email: z.string().email("Valid email is required"),
          country: z.string().min(1, "Country is required"),
          notes: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const product = PRODUCTS[input.productId];
          
          // Save to database
          const inquiry = await createOrderInquiry({
            productId: input.productId,
            productName: product.name,
            productSize: product.size,
            productPrice: product.price,
            fullName: input.fullName,
            email: input.email,
            country: input.country,
            notes: input.notes || null,
          });

          if (!inquiry) {
            throw new Error("Failed to create order inquiry");
          }

          // Send notification to owner
          await notifyOwner({
            title: "New Order Inquiry Received",
            content: `New order inquiry from ${input.fullName}\n\nProduct: ${product.name}\nSize: ${product.size}\nPrice: ${product.price}\nEmail: ${input.email}\nCountry: ${input.country}\n${input.notes ? `Notes: ${input.notes}` : ""}`,
          });

          return {
            success: true,
            inquiryId: inquiry.id,
          };
        } catch (error) {
          console.error("[Orders] Failed to submit inquiry:", error);
          throw error;
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
