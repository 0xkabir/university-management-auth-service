import { RequestHandler } from 'express'
import { UserServices } from './user.services'

const createUser: RequestHandler = async (request, response, next) => {
  const { user } = request.body
  try {
    const result = await UserServices.createUser(user)
    response.status(200).json({
      success: true,
      message: 'user created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const UserController = {
  createUser,
}
