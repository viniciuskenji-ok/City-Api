import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { IStreet } from "../../database/models";
import { StreetsProvider } from "../../database/providers/streets";

interface IParamsProps {
    id?: number;
}

interface IBodyProps extends Omit<IStreet, "id"> {};

export const updateStreetValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        streetName: yup.string().required().min(3),
        cityId: yup.number().integer().required().moreThan(0),
    })),
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    })),
}));


export const update = async (req: Request<IParamsProps, {}, IBodyProps>, res: Response): Promise<void> => {
    console.log('Chegou na rota PUT');
    console.log('Params:', req.params);
    console.log('Body:', req.body);
    const result = await StreetsProvider.update(req.params.id!, req.body);

    if (result instanceof Error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message,
            }
        });
    }

    res.status(StatusCodes.NO_CONTENT).send()
}