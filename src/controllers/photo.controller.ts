import { Request, Response } from "express";

// Find a photo
export function getPhoto(req: Request, res: Response): Response {
  console.log(req.params.id);
  return res.json({
    message: "Photo successfully find",
  });
}

// Get all photos
export function getPhotos(req: Request, res: Response): Response {
  return res.json({
    message: "Photos successfully list",
  });
}

// Create new photos
export function createPhotos(req: Request, res: Response): Response {
  console.log(req.body);

  return res.json({
    message: "Photo successfully saved",
  });
}

// Update photos
export function updatePhotos(req: Request, res: Response): Response {
  console.log(req.params.id);

  return res.json({
    message: "Photo successfully updated",
  });
}

// Delete photos
export function deletePhotos(req: Request, res: Response): Response {
  console.log(req.params.id);

  return res.json({
    message: "Photo successfully deleted",
  });
}
