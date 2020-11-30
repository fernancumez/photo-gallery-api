import { Request, Response } from "express";
import { IPhoto } from "../types/photo";
import Photo from "../models/photo";

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
export const createPhotos = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title, description } = req.body as Pick<
      IPhoto,
      "title" | "description"
    >;
    const { path: imagePath } = req.file;

    const newPhoto = { title, description, imagePath };

    const photo: IPhoto = new Photo(newPhoto);
    await photo.save();

    res.status(200).json({
      message: "Photo successfully saved",
    });
  } catch (err) {
    console.error(err);
  }
};

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
