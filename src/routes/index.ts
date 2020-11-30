import { Router } from "express";
import {
  getPhoto,
  getPhotos,
  createPhotos,
  updatePhotos,
  deletePhotos,
} from "../controllers/photo.controller";

import multer from "../libs/multer";

const router = Router();

router
  .route("/photos")
  .get(getPhotos)
  .post(multer.single("image"), createPhotos);

router
  .route("/photos/:id")
  .get(getPhoto)
  .put(updatePhotos)
  .delete(deletePhotos);

export default router;
