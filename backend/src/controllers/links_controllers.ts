import { Request, Response } from "express";
import { SidebarService } from "../modules/Links.js";
import { AuthService } from "../modules/Auth.js";

function handleErrors(error: any, res: Response) {
  console.log(error);
  return res.status(500).json({ success: false });
}

export async function getLinks(req: Request, res: Response) {
  try {
    const userId = String(req.params.userId);
    // On invalid userId
    const verifiedUser = await AuthService.getUser(userId);
    const data = await SidebarService.get(userId);
    // on valid userId
    if (verifiedUser.length > 0)
      return res.status(200).json({ success: true, data });
    // On invalid userId
    return res.status(400).json({
      success: false,
      errors: [{ field: "userId", message: "User does not exist" }],
    });
  } catch (error) {
    handleErrors(error, res);
  }
}

export async function deleteLink(req: Request, res: Response) {
  try {
    const id = String(req.params.id);

    await SidebarService.delete(id);
    return res.status(200).json({ success: true });
  } catch (error) {
    handleErrors(error, res);
  }
}

export async function postLink(req: Request, res: Response) {
  try {
    const { userId, name, link, group } = req.body;
    // Display Order
    const allLinksInGroup = await SidebarService.get(userId);
    const displayOrder =
      allLinksInGroup.filter((item) => item.group === group).length + 1;
    //
    await SidebarService.post(userId, name, link, group, displayOrder);
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
}

export async function putLink(req: Request, res: Response) {
  try {
    const { id, name, link, displayOrder, group, userId } = req.body;

    const data = await SidebarService.put(
      id,
      name,
      link,
      displayOrder,
      group,
      userId,
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
}
