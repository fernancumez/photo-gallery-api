import { Router } from "express";
import {
  getPhoto,
  getPhotos,
  createPhotos,
  updatePhotos,
  deletePhotos,
} from "../controllers/photo.controller";
const router = Router();

router.route("/photos").get(getPhotos).post(createPhotos);

router
  .route("/photos/:id")
  .get(getPhoto)
  .put(updatePhotos)
  .delete(deletePhotos);

export default router;
