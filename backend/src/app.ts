import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
import { linksRouter } from "./routes/links-routes.js";

export const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  process.env.FRONTEND_URL || "",
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api/auth/*splat", toNodeHandler(auth));
app.use("/links", linksRouter);
