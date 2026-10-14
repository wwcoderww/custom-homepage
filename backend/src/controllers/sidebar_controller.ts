import { Request, Response } from "express";
import { SidebarService } from "../modules/Sidebar.js";

function handleErrors(error: any, res: Response) {
  console.log(error);
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
