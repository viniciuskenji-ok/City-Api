import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface ICity{
    name: string;
}

const bodySchema: yup.Schema<ICity> = yup.object().shape({
    name: yup.string().required().min(3),
})

export const create = async (req: Request<{}, {}, ICity>, res: Response): Promise<void> => {
    let validatedBody: ICity | undefined = undefined;

    try {
        validatedBody = await bodySchema.validate(req.body)
    } catch (error) {
        const yupError = error as yup.ValidationError;
        res.json({
            errors: {
                default: yupError.message
            }
        });
        return;
    }
    
    res.status(StatusCodes.CREATED).json(validatedBody);
}