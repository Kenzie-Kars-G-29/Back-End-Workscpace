import 'dotenv/config'
import { compare } from "bcryptjs"
import jwt  from "jsonwebtoken"
import { AppDataSource } from "../../data-source"
import { Repository } from "typeorm"
import { AppError } from "../../errors"
import User from "../../entities/user.entity"
import { IUserLogin } from "../../interfaces/user.interfaces"

const createLoginService = async (loginData: IUserLogin): Promise<string> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepository.findOneBy({
        email: loginData.email
    })

    if(!user){
        throw new AppError("Invalid credentials", 401)
    }

    const passwordMatch = await compare(loginData.password, user!.password)

    if(!passwordMatch){
        throw new AppError("Invalid credentials", 401)
    }

    const token: string = jwt.sign(
        {
            isSeller: user!.isSeller,
            id: user!.id
        },
        process.env.SECRET_KEY!,
        {
        expiresIn: '24h',
        subject: String(user.id)
        }
    )

    return token
}

export default createLoginService