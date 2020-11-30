import { Request, Response } from "express";
import { IPhoto } from "../types/photo";
import Photo from "../models/photo";

// Find a photo
export const getPhoto = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const photo: IPhoto | null = await Photo.findById(id);

    res.status(200).json(photo);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

// List all photos
export const getPhotos = async (req: Request, res: Response): Promise<void> => {
  try {
    const photos: IPhoto[] = await Photo.find();
    res.status(200).json({ photos });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

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
    res.status(400).json({ error: err });
  }
};

// Update photos
export const updatePhotos = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id: _id } = req.params;
    const { title, description } = req.body as Pick<
      IPhoto,
      "title" | "description"
    >;

    const body = { title, description };

    await Photo.findByIdAndUpdate({ _id }, body);

    res.status(200).json({
      message: "Photo successfully updated",
    });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

// Delete photos
export function deletePhotos(req: Request, res: Response): Response {
  console.log(req.params.id);

  return res.json({
    message: "Photo successfully deleted",
  });
}
