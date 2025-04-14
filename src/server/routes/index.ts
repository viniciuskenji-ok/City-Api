import { Router } from "express";
import { CitiesController } from "../controllers/cities";
import { createValidation } from "../controllers/cities/createCityController";
import { getAllValidation } from "../controllers/cities/getAllCitiesController.";
import { getByIdValidation } from "../controllers/cities/getCityByIdController";
import { deleteCityValidation } from "../controllers/cities/deleteCityByIdController";
export const router = Router();

router.post("/city", createValidation, CitiesController.create);
router.get("/city", getAllValidation, CitiesController.getAll);
router.get("/city/:id", getByIdValidation, CitiesController.getById);
router.delete("/city/:id", deleteCityValidation, CitiesController.deleteCity)
