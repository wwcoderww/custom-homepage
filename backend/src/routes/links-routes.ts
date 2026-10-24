import { Router } from "express";
import {
  deleteLink,
  getLinks,
  postLink,
  putLink,
} from "../controllers/links_controllers.js";
import { validate } from "../middleware/validate.js";
import { linkPostSchema, linkPutSchema } from "../schema/link-schema.js";

const router = Router();

router.post("", validate(linkPostSchema), postLink);
router.put("", validate(linkPutSchema), putLink);
router.get("/:userId", getLinks);
router.delete("/:id", deleteLink);

export { router as linksRouter };
