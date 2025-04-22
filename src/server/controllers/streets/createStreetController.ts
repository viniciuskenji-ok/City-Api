import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { IStreet } from "../../database/models";
import { StreetsProvider } from "../../database/providers/streets";

interface IBodyProps extends Omit<IStreet, "id"> {};


export const createStreetValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        streetName: yup.string().required().min(3).max(150),
        cityId: yup.number().integer().required().moreThan(0),
    })),
}));

export const create = async (req: Request<{}, {}, IStreet>, res: Response): Promise<void> => {
    const result = await StreetsProvider.create(req.body);

    if(result instanceof Error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors:{
                default: result.message,
            }
        });
    }

    res.status(StatusCodes.CREATED).json(result);
}