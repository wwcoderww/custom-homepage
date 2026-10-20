ALTER TABLE "sidebar_links" DROP CONSTRAINT "sidebar_links_displayOrder_unique";--> statement-breakpoint
ALTER TABLE "main_links" DROP CONSTRAINT "main_links_displayOrder_unique";--> statement-breakpoint
ALTER TABLE "sidebar_links" ADD COLUMN "userId" text NOT NULL;--> statement-breakpoint
ALTER TABLE "sidebar_links" ADD CONSTRAINT "sidebar_links_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;