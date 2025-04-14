import { validation } from "../../shared/middleware";
import * as yup from "yup";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";


interface IParamsProps {
    id?: number;
}

export const deleteCityValidation = validation((getSchema) => ({
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    })),
}));

export const deleteCity = async (req: Request<IParamsProps>, res: Response): Promise<void> => {
    console.log(req.params)


    res.status(StatusCodes.ACCEPTED).json(req.params)
}