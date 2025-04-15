import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { ICity } from "../../database/models";


interface IBodyProps extends Omit<ICity, "id"> {}

export const createValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        name: yup.string().required().min(3),
    })),
}));    


export const create = async (req: Request<{}, {}, ICity>, res: Response): Promise<void> => {


    res.status(StatusCodes.CREATED).json(req.body);
}