import { AppDataSource } from "../../data-source"
import User from "../../entities/user.entity"
import { returnUserSchema } from "../../schema/user.schemas"

const listUserIdService = async (userId: string) => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            id: userId
        },
        relations: {
            announcement: true
        }
    })

    const returnedUser = returnUserSchema.parse(user)

    return returnedUser
}

export default listUserIdService