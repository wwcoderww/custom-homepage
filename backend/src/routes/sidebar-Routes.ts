import { Router } from "express";
import {
  deleteLink,
  getAllLinks,
  postLink,
  putLink,
} from "../controllers/sidebar_controller.js";
import { validate } from "../middleware/validate.js";
import { linkSchema } from "../schema/link-schema.js";
import { sidebarLinks } from "../db/schema/links-sidebar.js";

const router = Router();

router.get("/", getAllLinks(sidebarLinks));
router.post("/", validate(linkSchema), postLink(sidebarLinks));
router.put("/", validate(linkSchema), putLink(sidebarLinks));
router.delete("/:name", deleteLink(sidebarLinks));

export { router as sidebarRouter };
