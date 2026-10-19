import { Router } from "express";
import {
  deleteLink,
  getAllLinks,
  postLink,
  putLink,
} from "../controllers/links_controllers.js";
import { validate } from "../middleware/validate.js";
import { linkSchema } from "../schema/link-schema.js";
import { sidebarLinks } from "../db/schema/links-sidebar.js";

const router = Router();

router.post("", validate(linkSchema), postLink(sidebarLinks));
router.put("", validate(linkSchema), putLink(sidebarLinks));
router.get("/:userId", getAllLinks(sidebarLinks));
router.delete("/:id", deleteLink(sidebarLinks));

export { router as sidebarRouter };
