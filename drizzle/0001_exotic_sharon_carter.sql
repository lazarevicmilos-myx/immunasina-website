CREATE TABLE `orderInquiries` (
	`id` int AUTO_INCREMENT NOT NULL,
	`packageId` varchar(64) NOT NULL,
	`fullName` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`country` varchar(255) NOT NULL,
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `orderInquiries_id` PRIMARY KEY(`id`)
);
