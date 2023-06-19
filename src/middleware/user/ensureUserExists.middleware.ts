import { Request, Response, NextFunction } from 'express'
import { Repository } from 'typeorm'
import User from '../../entities/user.entity'
import { AppDataSource } from '../../data-source'
import { AppError } from '../../errors'


const ensureUserExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const userId: string = req.params.id
    const findUser = await userRepository.findOne({
        where: {
            id: userId
        }
    })
    if (!findUser) {
        throw new AppError('User not found', 404)
    }
    return next()
}

export { ensureUserExistsMiddleware }