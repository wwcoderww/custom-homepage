import express from "express";
import { sidebarRouter } from "./routes/sidebar-Routes.js";
import { mainLinksRouter } from "./routes/mainLink-Routes.js";

const app = express();

app.use(express.json());
app.use("/api/sidebarLinks", sidebarRouter);
app.use("/api/mainLinks", mainLinksRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server started on port 5000..."));
