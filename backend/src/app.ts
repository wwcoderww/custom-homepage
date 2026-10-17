import express from "express";
import cors from "cors";
import { sidebarRouter } from "./routes/sidebar-Routes.js";
import { mainLinksRouter } from "./routes/mainLink-Routes.js";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Your Next.js URL
    credentials: true,
  }),
);

app.use(express.json());
app.all("/api/auth/*splat", toNodeHandler(auth));
app.use("/api/sidebarLinks", sidebarRouter);
app.use("/api/mainLinks", mainLinksRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server started on port 5000..."));
