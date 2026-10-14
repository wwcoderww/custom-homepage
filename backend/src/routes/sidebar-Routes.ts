import { Router } from "express";
import { getAllLinks } from "../controllers/sidebar_controller.js";

const router = Router();

router.get("/", getAllLinks);

export { router as sidebarRouter };
