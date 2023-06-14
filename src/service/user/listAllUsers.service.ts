import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import User from "../../entities/user.entity"
import { returnAllUsersSchema } from "../../schema/user.schemas"
import { IAllUsersReturn } from "../../interfaces/user.interfaces"

const listAllUsersService = async () => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUsers = await userRepository.find({
        relations: {
            announcement: true
        }
    })
    
    return findUsers 
}

export default listAllUsersService