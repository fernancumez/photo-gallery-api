import { Router } from "express";
import {
  getPhoto,
  getPhotos,
  createPhotos,
  updatePhotos,
  deletePhotos,
} from "../controllers/photo.controller";

import multer from "../libs/multer";
import auth from "../middlewares/auth";

const router: Router = Router();

router
  .route("/")
  .get(auth, getPhotos)
  .post(auth, multer.single("image"), createPhotos);

router
  .route("/:id")
  .get(auth, getPhoto)
  .put(auth, updatePhotos)
  .delete(auth, deletePhotos);

export default router;
