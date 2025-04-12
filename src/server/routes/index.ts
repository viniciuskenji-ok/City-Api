import { Router } from "express";
import { CitiesController } from "../controllers/cities";
import { createBodyValidator, createValidation } from "../controllers/cities/createCityController";
export const router = Router();

router.post("/city", createBodyValidator, createValidation, CitiesController.create);
