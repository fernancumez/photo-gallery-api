import { Router } from "express";
import passport from "passport";
import {
  getPhoto,
  getPhotos,
  createPhotos,
  updatePhotos,
  deletePhotos,
} from "../controllers/photo.controller";

import multer from "../libs/multer";

const router: Router = Router();

router
  .route("/")
  .get(passport.authenticate("jwt", { session: false }), getPhotos)
  .post(
    passport.authenticate("jwt", { session: false }),
    multer.single("image"),
    createPhotos
  );
router
  .route("/:id")
  .get(passport.authenticate("jwt", { session: false }), getPhoto)
  .put(passport.authenticate("jwt", { session: false }), updatePhotos)
  .delete(passport.authenticate("jwt", { session: false }), deletePhotos);

export default router;
