import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { CitiesProvider } from "../../database/providers/cities";

interface IQueryProps {
    page?: number;
    limit?: number;
    filter?: string;
}

export const getAllValidation = validation((getSchema) => ({
    query: getSchema<IQueryProps>(yup.object().shape({
        page: yup.number().optional().moreThan(0),
        limit: yup.number().optional().moreThan(0),
        filter: yup.string().optional(),
    })),
}));    


export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response): Promise<void> => {
    const result = await CitiesProvider.getAll(
        req.query.page || 1,
        req.query.limit || 10,
        req.query.filter || ""
    );
    res.status(StatusCodes.OK).json(result);
}