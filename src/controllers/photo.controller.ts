import { Request, Response } from "express";
import { IPhoto } from "../types/photo";
import Photo from "../models/photo";
import fs from "fs-extra";
import path from "path";

// Find a photo
const getPhoto = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;

    // Sentence to search the photo in the database
    const photo: IPhoto | null = await Photo.findById(id);

    // If the resource does not exist
    if (!photo) return res.status(404).json({ error: "Photo not found" });

    // If the photo exist
    return res.status(200).json(photo);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

// List all photos
const getPhotos = async (req: Request, res: Response): Promise<Response> => {
  try {
    // Sentence to search all the photos in the database
    const photos: IPhoto[] = await Photo.find();
    return res.status(200).json({ photos });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

// Create new photos
const createPhotos = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { title, description } = req.body as Pick<
      IPhoto,
      "title" | "description"
    >;
    const { path: imagePath } = req.file;

    const body = { title, description, imagePath };

    const newPhoto: IPhoto = new Photo(body);

    // Save the new item
    await newPhoto.save();

    return res.status(201).json({
      message: "Photo successfully saved",
      photo: newPhoto,
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

// Update photos
const updatePhotos = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id: _id } = req.params;

    const updatePhoto: IPhoto | null = await Photo.findByIdAndUpdate(
      { _id },
      req.body
    );

    // If the resource does not exisit
    if (!updatePhoto) return res.status(404).json({ error: "Photo not found" });

    // If the resource exist
    const photoUpdated: IPhoto | null = await Photo.findById(_id);

    return res.status(200).json({
      message: "Photo successfully updated",
      photo: photoUpdated,
    });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

// Delete photos
const deletePhotos = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;

    // Delete the item in the database
    const photoDeleted: IPhoto | null = await Photo.findByIdAndRemove(id);

    if (photoDeleted) {
      // Delete the file in the os
      await fs.unlink(path.resolve(photoDeleted.imagePath));
    } else {
      return res.status(404).json({ error: "Photo not found" });
    }

    return res.status(200).json({
      message: "Photo successfully deleted",
      photo: photoDeleted,
    });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export { getPhoto, getPhotos, createPhotos, updatePhotos, deletePhotos };
