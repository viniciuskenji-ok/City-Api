import { create } from "./createCityController";
import { deleteCity } from "./deleteCityByIdController";
import { getAll } from "./getAllCitiesController.";
import { getById } from "./getCityByIdController";
import { update } from "./updateCityController";

export const CitiesController = {
    create, 
    getAll,
    getById,
    deleteCity,
    update,
}

