import { AppDataSource } from "../../data-source"
import User from "../../entities/user.entity"

import { AppError } from "../../errors"
import { IUser, IUserReturn } from "../../interfaces/user.interfaces"
import { returnUserSchema } from "../../schema/user.schemas"

const createUserService = async (userData: IUser): Promise<IUserReturn> => {
    const userRepository = AppDataSource.getRepository(User)

    const emailExist = await userRepository.findOne({
        where: {
            email: userData.email
        }
    })

    if(emailExist){
        throw new AppError("Email already exists", 409)
    }

    const user = userRepository.create(userData)

    await userRepository.save(user)

    const newUser = returnUserSchema.parse(user)

    return newUser
}

export default createUserService