import { create } from "./createStreetController";
import { deleteById } from "./deleteStreetByIdController";
import { getAll } from "./getAllStreetController";
import { getById } from "./getStreetByIdController";


export const StreetController = {
    create,
    getAll,
    getById,
    deleteById,
}
