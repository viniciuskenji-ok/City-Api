import { Router } from "express";
import { CitiesController } from "../controllers/cities";
import { createValidation } from "../controllers/cities/createCityController";
import { getAllValidation } from "../controllers/cities/getAllCitiesController.";
import { getByIdValidation } from "../controllers/cities/getCityByIdController";
import { deleteCityValidation } from "../controllers/cities/deleteCityByIdController";
import { updateValidation } from "../controllers/cities/updateCityController";
import { StreetController } from "../controllers/streets";
import { createStreetValidation } from "../controllers/streets/createStreetController";
import { getAllStreetValidation } from "../controllers/streets/getAllStreetController";
import { getByIdStreetValidation } from "../controllers/streets/getStreetByIdController";
import { deleteStreetByIValidation } from "../controllers/streets/deleteStreetByIdController";
import { updateStreetValidation } from "../controllers/streets/updateStreetController";
export const router = Router();

router.post("/city", createValidation, CitiesController.create);
router.get("/city", getAllValidation, CitiesController.getAll);
router.get("/city/:id", getByIdValidation, CitiesController.getById);
router.delete("/city/:id", deleteCityValidation, CitiesController.deleteCity);
router.put("/city/:id", updateValidation, CitiesController.update);

// Streets
router.post("/street", createStreetValidation, StreetController.create);
router.get("/street", getAllStreetValidation, StreetController.getAll);
router.get("/street/:id", getByIdStreetValidation, StreetController.getById);
router.delete("/street/:id", deleteStreetByIValidation, StreetController.deleteById);
router.put("/street/:id", updateStreetValidation, StreetController.update);