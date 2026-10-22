import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
import { linksRouter } from "./routes/links-routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Your Next.js URL
    credentials: true,
  }),
);

app.use(express.json());
app.all("/api/auth/*splat", toNodeHandler(auth));
app.use("/api/links", linksRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server started on port 5000..."));
