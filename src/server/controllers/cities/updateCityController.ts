import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { ICity } from "../../database/models";
import { CitiesProvider } from "../../database/providers/cities";


interface IParamProps {
    id?: number,
}
interface IBodyProps extends Omit<ICity, "id"> {}

export const updateValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        name: yup.string().required().min(3)
    })),
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    })),
}));

export const update = async (req: Request<IParamProps, {}, IBodyProps>, res: Response): Promise<void> => {
    const result = await CitiesProvider.update(req.params.id!, req.body);

    if (result instanceof Error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message,
            }
        });
    }

    res.status(StatusCodes.ACCEPTED).json(req.body);
}
