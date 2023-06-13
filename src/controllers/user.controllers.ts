import { Request, Response } from "express"
import createUserService from "../service/user/createUser.service"
import listAllUsersService from "../service/user/listAllUsers.service"
import listUserLoggedService from "../service/user/listUser.service"

const createUserController = async (request: Request, response: Response) => {
    const userData = request.body
    const user = await createUserService(userData)
    
    return response.status(201).json(user)
}

const listAllUsersController = async (request: Request, response: Response) => {

    const allUsers = await listAllUsersService()

    return response.json(allUsers)
}

const listUserController = async (request: Request, response: Response) => {
    const token: any = request.headers.authorization

    const listUser = await listUserLoggedService(token)
    
    return response.json(listUser)
}

export {
    createUserController,
    listAllUsersController,
    listUserController
}