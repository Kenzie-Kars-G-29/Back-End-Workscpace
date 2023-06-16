import { AppDataSource } from "../../data-source"
import User from "../../entities/user.entity"
import { AppError } from "../../errors"

const listUserIdService = async (userId: string) => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            id: userId
        },
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
    })

    if(!user){
        throw new AppError("User not found", 409)
    }

    return user
}

export default listUserIdService