import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterServices } from './academicSemester.services';
import catchAysnc from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createSemester = catchAysnc(
  async (request: Request, response: Response, next: NextFunction) => {
    const { ...semesterData } = request.body;
    const result = await AcademicSemesterServices.createSemester(semesterData);
    sendResponse(response, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'academic semester created successfully',
      data: result,
    });
    next();
  }
);

export const AcademicSemesterController = {
  createSemester,
};
