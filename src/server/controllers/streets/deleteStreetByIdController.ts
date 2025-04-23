import { validation } from "../../shared/middleware";
import * as yup from "yup";
import { Request, Response } from "express";    
import { StreetsProvider } from "../../database/providers/streets";
import { StatusCodes } from "http-status-codes";


interface IParamsProps {
    id?: number;
}

export const deleteStreetByIValidation = validation(getSchema => ({
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    }))
}));


export const deleteById = async (req: Request<IParamsProps>, res: Response): Promise<void> => {
    const result = await StreetsProvider.deleteById(req.params.id!);

    if (result instanceof Error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message,
            }
        });
    }

    res.status(StatusCodes.OK).json(result);
};



