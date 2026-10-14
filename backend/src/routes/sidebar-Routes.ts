import { Router } from "express";
import { deleteLink, getAllLinks } from "../controllers/sidebar_controller.js";
import { validate } from "../middleware/validate.js";
import { linkSchema } from "../schema/link-schema.js";

const router = Router();

router.get("/", getAllLinks);
router.post("/", validate(linkSchema));
router.put("/", validate(linkSchema));
router.delete("/:name", deleteLink);

export { router as sidebarRouter };
