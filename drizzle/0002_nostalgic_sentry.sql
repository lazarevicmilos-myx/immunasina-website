ALTER TABLE `orderInquiries` ADD `productId` varchar(64) NOT NULL;--> statement-breakpoint
ALTER TABLE `orderInquiries` ADD `productName` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `orderInquiries` ADD `productSize` varchar(64) NOT NULL;--> statement-breakpoint
ALTER TABLE `orderInquiries` ADD `productPrice` varchar(64) NOT NULL;--> statement-breakpoint
ALTER TABLE `orderInquiries` DROP COLUMN `packageId`;