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

router.route("/").get(getPhotos).post(multer.single("image"), createPhotos);
router.route("/:id").get(getPhoto).put(updatePhotos).delete(deletePhotos);

export default router;
