CREATE TABLE "main_links" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "sidebar_links_name_unique" UNIQUE("name"),
	CONSTRAINT "sidebar_links_email_unique" UNIQUE("email")
);
