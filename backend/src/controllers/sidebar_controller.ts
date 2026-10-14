import { Request, Response } from "express";
import { SidebarService } from "../modules/Sidebar.js";

function handleErrors(error: any, res: Response) {
  return res.status(500).json({ success: false, error: "Database down" });
}

export async function getAllLinks(req: Request, res: Response) {
  try {
    const results = await SidebarService.get();
    return res.status(200).json({ success: true, data: results });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: "Database down" });
  }
}

export async function deleteLink(req: Request, res: Response) {
  try {
    const [name] = req.params.name;
    await SidebarService.delete(name);
    return res.status(200).json({ success: true });
  } catch (error) {
    handleErrors(error, res);
  }
}

export async function postLink(req: Request, res: Response) {
  try {
    console.log(req.body);
    const { name, link } = req.body;
    await SidebarService.post(name, link);
    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.log(error);
    // Name or link already exist
    if (error.cause.code === "23505")
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

    handleErrors(error, res);
  }
}
