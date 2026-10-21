ALTER TABLE "sidebar_links" RENAME TO "sidebarLinks";--> statement-breakpoint
ALTER TABLE "main_links" RENAME TO "mainLinks";--> statement-breakpoint
ALTER TABLE "sidebarLinks" DROP CONSTRAINT "sidebar_links_name_unique";--> statement-breakpoint
ALTER TABLE "sidebarLinks" DROP CONSTRAINT "sidebar_links_link_unique";--> statement-breakpoint
ALTER TABLE "mainLinks" DROP CONSTRAINT "main_links_name_unique";--> statement-breakpoint
ALTER TABLE "mainLinks" DROP CONSTRAINT "main_links_link_unique";--> statement-breakpoint
ALTER TABLE "sidebarLinks" DROP CONSTRAINT "sidebar_links_userId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "mainLinks" DROP CONSTRAINT "main_links_userId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "sidebarLinks" ADD CONSTRAINT "sidebarLinks_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "mainLinks" ADD CONSTRAINT "mainLinks_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sidebarLinks" ADD CONSTRAINT "sidebarLinks_name_unique" UNIQUE("name");--> statement-breakpoint
ALTER TABLE "sidebarLinks" ADD CONSTRAINT "sidebarLinks_link_unique" UNIQUE("link");--> statement-breakpoint
ALTER TABLE "mainLinks" ADD CONSTRAINT "mainLinks_name_unique" UNIQUE("name");--> statement-breakpoint
ALTER TABLE "mainLinks" ADD CONSTRAINT "mainLinks_link_unique" UNIQUE("link");