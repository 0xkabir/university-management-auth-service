import { Model, Schema, model } from 'mongoose'
import { IUser } from './user.interface'

type userModel = Model<IUser, object> //to create further statics

const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export const User = model<IUser, userModel>('User', userSchema)
