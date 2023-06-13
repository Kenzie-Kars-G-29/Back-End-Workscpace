import { AppDataSource } from "../../data-source"
import User from "../../entities/user.entity"
import { AppError } from "../../errors"
import { returnUserSchema } from "../../schema/user.schemas"
import jwt from "jsonwebtoken"

const listUserLoggedService = async (token: string) => {
    const userRepository = AppDataSource.getRepository(User)

    let userId = ""

    token = token.split(" ")[1]

    jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {
    if(error){
        throw new AppError(error.message, 401)
    }

    userId = decoded.id
    })

    const user = await userRepository.find({
        where: {
            id: userId
        },
        relations: {
            announcement: true
        }
    })

    return user
}

export default listUserLoggedService