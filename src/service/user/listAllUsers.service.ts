import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import User from "../../entities/user.entity"
import { IAllUsersReturn } from "../../interfaces/user.interfaces"
import { returnAllUsersSchema } from "../../schema/user.schemas"


const listAllUsersService = async (): Promise<IAllUsersReturn>  => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUsers = await userRepository.find()

    const allUsers =  returnAllUsersSchema.parse(findUsers)
    
    return allUsers 
}

export default listAllUsersService