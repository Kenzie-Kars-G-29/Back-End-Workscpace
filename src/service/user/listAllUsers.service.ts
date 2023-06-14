import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import User from "../../entities/user.entity"
import { returnAllUsersSchema } from "../../schema/user.schemas"

const listAllUsersService = async () => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUsers = await userRepository.find({
        relations: {
            announcement: true
        }
    })
    
    const returnedUsers = returnAllUsersSchema.parse(findUsers)

    return returnedUsers
}

export default listAllUsersService