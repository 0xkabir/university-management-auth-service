import { NextFunction, Request, Response, RequestHandler } from 'express';

const catchAysnc = (func: RequestHandler) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    try {
      func(request, response, next);
    } catch (error) {
      next(error);
    }
  };
};

export default catchAysnc;
