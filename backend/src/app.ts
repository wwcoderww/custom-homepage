import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
import { linksRouter } from "./routes/links-routes.js";

export const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Your Next.js URL
    credentials: true,
  }),
);

app.use(express.json());
app.all("/api/auth/*splat", toNodeHandler(auth));
app.use("/api/links", linksRouter);
