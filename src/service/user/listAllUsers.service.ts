import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import User from "../../entities/user.entity"

const listAllUsersService = async () => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUsers = await userRepository.find({
        relations: ['announcement', 'announcement.image'],
        select: ['id', 
        'name', 
        'email', 
        'cpf', 
        'phone', 
        'birthday', 
        'description', 
        'cep', 
        'state', 
        'city', 
        'street', 
        'number', 
        'complement', 
        'isSeller'],
      });

    return findUsers
}

export default listAllUsersService