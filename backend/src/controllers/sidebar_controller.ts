import { Request, Response } from "express";
import { SidebarService } from "../modules/Sidebar.js";

export async function getAllLinks(req: Request, res: Response) {
  try {
    const results = await SidebarService.get();
    return res.status(200).json({ success: true, data: results });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: "Database down" });
  }
}
