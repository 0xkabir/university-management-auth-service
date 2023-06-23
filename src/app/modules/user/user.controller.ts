import { Request, Response } from 'express'
import userServices from './user.services'

const createUser = async (request: Request, response: Response) => {
  const { user } = request.body
  try {
    const result = await userServices.createUser(user)
    response.status(200).json({
      success: true,
      message: 'user created successfully',
      data: result,
    })
  } catch (error) {
    response.status(400).json({
      success: false,
      message: 'failed to create user',
      data: null,
    })
  }
}

export default {
  createUser,
}
