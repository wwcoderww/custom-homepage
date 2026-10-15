import { Router } from "express";
import {
  deleteLink,
  getAllLinks,
  postLink,
  putLink,
} from "../controllers/links_controllers.js";
import { validate } from "../middleware/validate.js";
import { linkSchema } from "../schema/link-schema.js";
import { mainLinks } from "../db/schema/links-main.js";

const router = Router();

router.get("/", getAllLinks(mainLinks));
router.post("/", validate(linkSchema), postLink(mainLinks));
router.put("/", validate(linkSchema), putLink(mainLinks));
router.delete("/:name", deleteLink(mainLinks));

export { router as mainLinksRouter };
