import { get } from "http";
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