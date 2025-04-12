import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middleware";

interface ICity{
    name: string;
    state: string;
}

const bodySchema: yup.Schema<ICity> = yup.object().shape({
    name: yup.string().required().min(3),
    state: yup.string().required().min(3)
})


export const createBodyValidator: RequestHandler = async (req, res, next) => {
    
    try {
        await bodySchema.validate(req.body,  {abortEarly: false})
        return next();
    } catch (error) {
        const yupError = error as yup.ValidationError;
        const errors: Record<string, string> = {};

        yupError.inner.forEach(error => {
            if(!error.path){
                return;
            }
            errors[error.path] = error.message;
        });

        res.status(StatusCodes.BAD_REQUEST).json({ errors });
    }
}

interface IFilter{
    filter?: string
}

const queryValidation: yup.Schema<IFilter> = yup.object().shape({
    filter: yup.string().required().min(3)
})

export const createValidation = validation(queryValidation);



export const create: RequestHandler = async (req: Request<{}, {}, ICity>, res: Response): Promise<void> => {
    console.log(req.body);

    res.status(StatusCodes.CREATED).json(req.body);
}