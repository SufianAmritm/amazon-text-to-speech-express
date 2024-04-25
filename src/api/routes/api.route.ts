import { Router } from "express";
import { convertText } from "../controllers/api.controller";

const router:Router = Router();

router.post("/", convertText);

export default router;
