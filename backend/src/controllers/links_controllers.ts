import { Request, Response } from "express";
import { SidebarService } from "../modules/Links.js";

function handleErrors(error: any, res: Response) {
  console.log(error);
  return res.status(500).json({ success: false, error: "Database down" });
}

export function getLinks() {
  return async (req: Request, res: Response) => {
    try {
      const userId = String(req.params.userId);

      const results = await SidebarService.get(userId);
      return res.status(200).json({ success: true, data: results });
    } catch (error) {
      handleErrors(error, res);
    }
  };
}

export function deleteLink() {
  return async (req: Request, res: Response) => {
    try {
      const id = String(req.params.id);

      await SidebarService.delete(id);
      return res.status(200).json({ success: true });
    } catch (error) {
      handleErrors(error, res);
    }
  };
}

export function postLink() {
  return async (req: Request, res: Response) => {
    try {
      const { userId, name, link, group } = req.body;
      // Display Order
      const allLinksInGroup = await SidebarService.get(userId);
      const displayOrder = allLinksInGroup.filter(
        (item) => item.group === group,
      ).length;
      //
      await SidebarService.post(group, userId, name, link, displayOrder);
      return res.status(200).json({ success: true });
    } catch (error: any) {
      // Name or link already exist
      if (error?.cause?.code === "23505") {
        if (error.cause.detail.startsWith("Key (name"))
          // Name already exist
          return res.status(400).json({
            success: false,
            errors: [{ field: "name", message: "Name already in use" }],
          });
        if (error.cause.detail.startsWith("Key (link"))
          // Link already exist
          return res.status(400).json({
            success: false,
            errors: [{ field: "link", message: "Link already in use" }],
          });
        handleErrors(error, res);
      }
    }
  };
}

export function putLink() {
  return async (req: Request, res: Response) => {
    try {
      const { id, name, link, displayOrder, group } = req.body;

      const data = await SidebarService.put(
        group,
        id,
        name,
        link,
        displayOrder,
      );
      // If ID is invalid
      if (data.length === 0)
        return res
          .status(400)
          .json({ success: false, error: "Id doesn't exist" });
      return res.status(200).json({ success: true });
    } catch (error: any) {
      if (error?.cause?.code === "23505") {
        if (error.cause.detail.startsWith("Key (name"))
          // Name already exist
          return res
            .status(400)
            .json({ success: false, error: "Name already in use" });
        if (error.cause.detail.startsWith("Key (link"))
          // Link already exist
          return res
            .status(400)
            .json({ success: false, error: "Link already in use" });
      }
      handleErrors(error, res);
    }
  };
}
