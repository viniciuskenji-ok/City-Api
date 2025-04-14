import { create } from "./createCityController";
import { deleteCity } from "./deleteCityByIdController";
import { getAll } from "./getAllCitiesController.";
import { getById } from "./getCityByIdController";

export const CitiesController = {
    create, 
    getAll,
    getById,
    deleteCity,
}

