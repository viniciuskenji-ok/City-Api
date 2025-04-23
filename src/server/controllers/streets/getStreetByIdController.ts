import { validation } from "../../shared/middleware";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { StreetsProvider } from "../../database/providers/streets";

interface IParamsProps {
    id?: number;
}

export const getByIdStreetValidation = validation(getSchema => ({
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    })),
}));


export const getById = async (req: Request<IParamsProps>, res: Response): Promise<void> => {
    const result = await StreetsProvider.getById(req.params.id!);

    if(result instanceof Error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: {
                default: result.message,
            }
        });
    }


    res.status(StatusCodes.OK).json(result);
}