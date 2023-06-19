import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { IUser, IUserUpdateRequest } from "../../interfaces/user.interfaces";
import User from "../../entities/user.entity";
import { userSchema } from "../../schema/user.schemas";
import { AppError } from "../../errors";


const updateUserService = async (data: Partial<User>, userId: string): Promise<IUser> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const user: User | null = await userRepository.findOneBy({ id: userId })

    if (user === null) {
        throw new AppError("User not found", 404)
    }

    const newUser = userRepository.create({
        ...user,
        ...data
    })

    await userRepository.save(newUser)


    return userSchema.parse(newUser)

}

export { updateUserService }