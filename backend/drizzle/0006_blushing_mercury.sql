ALTER TABLE "sidebar_links" ADD COLUMN "displayOrder" integer;--> statement-breakpoint
ALTER TABLE "main_links" ADD COLUMN "displayOrder" integer;--> statement-breakpoint
ALTER TABLE "sidebar_links" ADD CONSTRAINT "sidebar_links_displayOrder_unique" UNIQUE("displayOrder");--> statement-breakpoint
ALTER TABLE "main_links" ADD CONSTRAINT "main_links_displayOrder_unique" UNIQUE("displayOrder");