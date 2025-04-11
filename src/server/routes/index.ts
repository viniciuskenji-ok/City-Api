import { Router } from "express";
import { CitysController } from "../controllers/citys";

export const router = Router();

router.post("/citys", CitysController.create);