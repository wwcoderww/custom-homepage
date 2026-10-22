import { Router } from "express";
import {
  deleteLink,
  getLinks,
  postLink,
  putLink,
} from "../controllers/links_controllers.js";
import { validate } from "../middleware/validate.js";
import { linkSchema } from "../schema/link-schema.js";

const router = Router();

router.post("", validate(linkSchema), postLink);
router.put("", validate(linkSchema), putLink);
router.get("/:userId", getLinks);
router.delete("/:id", deleteLink);

export { router as linksRouter };
