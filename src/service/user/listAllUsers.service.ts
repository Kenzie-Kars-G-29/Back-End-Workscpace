import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import User from "../../entities/user.entity"

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