import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { ICity } from "../../database/models";
import { CitiesProvider } from "../../database/providers/cities";
import { error } from "console";


interface IBodyProps extends Omit<ICity, "id"> {}

export const createValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        name: yup.string().required().min(3).max(150),
    })),
}));    


export const create = async (req: Request<{}, {}, ICity>, res: Response): Promise<void> => {

    const result = await CitiesProvider.create(req.body);

    if(result instanceof Error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors:{
                default: result.message,
            }
        });
    }

    res.status(StatusCodes.CREATED).json(result);
}