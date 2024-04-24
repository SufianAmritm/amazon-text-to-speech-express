import { Router } from "express";
import { convertText } from "../controllers/api.controller.js";

const router = Router();

router.post("/", convertText);

export default router;
