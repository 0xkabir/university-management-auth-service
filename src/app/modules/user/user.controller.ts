import { RequestHandler } from 'express';
import { UserServices } from './user.services';
import { z } from 'zod';

const createUser: RequestHandler = async (request, response, next) => {
  try {
    const { user } = request.body;

    const createUserZodSchema = z.object({
      body: z.object({
        role: z.string({
          required_error: 'user role is required',
        }),
        password: z.string().optional(),
      }),
    });

    await createUserZodSchema.parseAsync(request);

    const result = await UserServices.createUser(user);
    response.status(200).json({
      success: true,
      message: 'user created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createUser,
};
