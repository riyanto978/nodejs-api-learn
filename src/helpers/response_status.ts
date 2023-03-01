import { Response } from 'express'

export const successResponse = (res: Response, message: string, data: any) => res.status(200).send({
    message,
    data,
});

export const errorResponse = (
    res: Response,
    errorMessage = 'Something went wrong',
    code = 500,
    error = {},
) => res.status(code).json({
    code,
    errorMessage,
    error,
});