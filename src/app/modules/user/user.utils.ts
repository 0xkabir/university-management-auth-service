import { User } from './user.model'

const findLastUserId = async () => {
  const user = await User.findOne({}, { id: true, _id: false })
    .sort({ createdAt: -1 })
    .lean()
  return user?.id
}

export const generateUserId = async () => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0')
  const incrementedId = parseInt(currentId) + 1
  const userId = incrementedId.toString().padStart(5, '0')
  return userId
}
