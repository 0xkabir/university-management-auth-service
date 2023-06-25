/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
import { ErrorRequestHandler } from 'express'
import config from '../config'
import { IGenericErrorMessages } from '../interfaces/error'
import { handleValidationError } from '../errors/handleValidationError'
import ApiError from '../errors/ApiError'
import { errorLogger } from '../shared/logger'

const globalErrorHandler: ErrorRequestHandler = (
  error,
  request,
  response,
  next
) => {
  let statusCode = 500
  let message = 'Something Went Wrong'
  let errorMessages: IGenericErrorMessages[] = []

  config.env === 'development' ? console.log(error) : errorLogger.error(error)

  if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode
    message = error?.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  } else if (error instanceof Error) {
    message = error?.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  }

  response.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? error?.stack : undefined,
  })
  next()
}

export default globalErrorHandler
