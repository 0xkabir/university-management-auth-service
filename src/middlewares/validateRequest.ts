import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

const validateRequest =
  (schema: AnyZodObject) =>
  async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      await schema.parseAsync({
        body: request.body,
        query: request.query,
        params: request.params,
        cookies: request.cookies,
      });

      return next();
    } catch (error) {
      next(error);
    }
  };

export default validateRequest;
