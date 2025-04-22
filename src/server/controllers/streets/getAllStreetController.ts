import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { StreetsProvider } from "../../database/providers/streets";

interface IQueryProps {
    page?: number;
    limit?: number;
    filter?: string;
    cityId?: number;    
}

export const getAllStreetValidation = validation((getSchema) => ({
    query: getSchema<IQueryProps>(yup.object().shape({
        page: yup.number().optional().moreThan(0),
        limit: yup.number().optional().moreThan(0),
        filter: yup.string().optional(),
        cityId: yup.number().optional()
    })),
}));

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response): Promise<void> => {  
    const result = await StreetsProvider.getAll(
        req.query.page || 1,
        req.query.limit || 10,
        req.query.filter || "",
        req.query.cityId || undefined
    );
    res.status(StatusCodes.OK).json(result);
}