import { Router } from "express";
import { authenticateUser } from "../controllers/auth.user.controller";
import { createUser } from "../controllers/user.controller";
const router: Router = Router();

router.route("/signup").post(createUser);
router.route("/signin").post(authenticateUser);

export default router;
