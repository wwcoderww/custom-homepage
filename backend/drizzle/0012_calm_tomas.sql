CREATE TABLE "links" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"link" text NOT NULL,
	"displayOrder" integer NOT NULL,
	"group" integer DEFAULT 1 NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"userId" text NOT NULL
);
--> statement-breakpoint
DROP TABLE "sidebarLinks" CASCADE;--> statement-breakpoint
DROP TABLE "mainLinks" CASCADE;--> statement-breakpoint
ALTER TABLE "links" ADD CONSTRAINT "links_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;