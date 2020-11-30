import { Router } from "express";
import { helloworld } from "../controllers/photo.controller";
const router = Router();

router.route("/").get(helloworld);

export default router;
