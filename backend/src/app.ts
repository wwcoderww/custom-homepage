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
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["set-auth-token"],
    credentials: true,
  }),
);

app.use(express.json());

app.use("/auth/*splat", toNodeHandler(auth));
app.use("/links", linksRouter);
