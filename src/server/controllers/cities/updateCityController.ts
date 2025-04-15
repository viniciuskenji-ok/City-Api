import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middleware";


interface IParamProps {
    id?: number,
}
interface IBodyProps { 
    name: string,
}

export const updateValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        name: yup.string().required().min(3)
    })),
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    })),
}));

export const update = async (req: Request<IParamProps, {}, IBodyProps>, res: Response): Promise<void> => {
    console.log(req.body);



    res.status(StatusCodes.ACCEPTED).json(req.body);
}
