ALTER TABLE "main_links" RENAME COLUMN "email" TO "link";--> statement-breakpoint
ALTER TABLE "main_links" DROP CONSTRAINT "main_links_email_unique";--> statement-breakpoint
ALTER TABLE "main_links" ADD CONSTRAINT "main_links_link_unique" UNIQUE("link");