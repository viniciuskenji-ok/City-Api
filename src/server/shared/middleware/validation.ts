import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { AnyObject, Maybe, ObjectSchema, Schema, ValidationError } from "yup";


type TField = 'body' | 'query' | 'params' | 'headers';

type TSchema = Record<TField, ObjectSchema<any>>

type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler;

type TGetSchema = <T extends Maybe<AnyObject>>(schema: ObjectSchema<T>) => ObjectSchema<any> 

type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TSchema>


export const validation: TValidation = (getAllSchemas) =>  async (req, res, next) =>{
    const schemas = getAllSchemas(schema => schema)
    const errorsResult: Record<string, Record<string, string>> = {}

    Object.entries(schemas).forEach(([field, schema]) => {
        try {
            schema.validateSync(req[field as TField], {abortEarly: false})
        } catch (error) {
            const yupError = error as ValidationError;
            const errors: Record<string, string> = {};
            
            yupError.inner.forEach(error => {
                if(!error.path) return;
                errors[error.path] = error.message;

            errorsResult[field] = errors
        });
    }
    })

    if(Object.entries(errorsResult).length === 0){
        return next();
    }else {
        res.status(StatusCodes.BAD_REQUEST).json({errors: errorsResult})
    }
}

