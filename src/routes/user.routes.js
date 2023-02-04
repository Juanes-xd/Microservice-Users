import { Router } from "express";
import { getUser, signin, signup } from "../controllers/user.controller.js";
const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/users", getUser);

export default router;
