import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const orderInquiries = mysqlTable("orderInquiries", {
  id: int("id").autoincrement().primaryKey(),
  productId: varchar("productId", { length: 64 }).notNull(),
  productName: varchar("productName", { length: 255 }).notNull(),
  productSize: varchar("productSize", { length: 64 }).notNull(),
  productPrice: varchar("productPrice", { length: 64 }).notNull(),
  fullName: varchar("fullName", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  country: varchar("country", { length: 255 }).notNull(),
  notes: text("notes"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type OrderInquiry = typeof orderInquiries.$inferSelect;
export type InsertOrderInquiry = typeof orderInquiries.$inferInsert;

// Product catalog for reference
export const PRODUCTS = {
  latte: { name: "Rtanj Boba Tea", size: "250g", servings: "10 servings", price: "€54.50" },
  boba: { name: "Rtanj Boba Tea", size: "250g", servings: "10 servings", price: "€54.50" },
  protein: { name: "Bio-Active Protein Shake", size: "250g", servings: "10 servings", price: "€45.50" },
  shake: { name: "Gentle Vitality Blend", size: "500g", servings: "10 servings", price: "€63.50" },
  coffee: { name: "Immuno-Brew 3in1", size: "200g", servings: "10 servings", price: "€40.00" },
} as const;