import { Request, Response } from "express";
import { SidebarService, tableType } from "../modules/Links.js";

function handleErrors(error: any, res: Response) {
  console.log(error);
  return res.status(500).json({ success: false, error: "Database down" });
}

export function getAllLinks(table: tableType) {
  return async (req: Request, res: Response) => {
    try {
      const results = await SidebarService.get(table);
      return res.status(200).json({ success: true, data: results });
    } catch (error) {
      handleErrors(error, res);
    }
  };
}

export function deleteLink(table: tableType) {
  return async (req: Request, res: Response) => {
    try {
      const [name] = req.params.name;
      await SidebarService.delete(table, name);
      return res.status(200).json({ success: true });
    } catch (error) {
      handleErrors(error, res);
    }
  };
}

export function postLink(table: tableType) {
  return async (req: Request, res: Response) => {
    try {
      const { name, link } = req.body;
      await SidebarService.post(table, name, link);
      return res.status(200).json({ success: true });
    } catch (error: any) {
      // Name or link already exist
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

export function putLink(table: tableType) {
  return async (req: Request, res: Response) => {
    try {
      const { id, name, link } = req.body;
      console.log(req.body);
      const data = await SidebarService.put(table, id, name, link);
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
