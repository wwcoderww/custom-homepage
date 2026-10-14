ALTER TABLE "sidebar_links" RENAME COLUMN "email" TO "link";--> statement-breakpoint
ALTER TABLE "sidebar_links" DROP CONSTRAINT "sidebar_links_email_unique";--> statement-breakpoint
ALTER TABLE "sidebar_links" ADD CONSTRAINT "sidebar_links_link_unique" UNIQUE("link");