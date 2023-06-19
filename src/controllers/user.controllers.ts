import { Request, Response } from "express"
import createUserService from "../service/user/createUser.service"
import listAllUsersService from "../service/user/listAllUsers.service"
import listUserLoggedService from "../service/user/listUserLogged.service"
import listUserIdService from "../service/user/listUserId.service"
import { IUserUpdateRequest } from "../interfaces/user.interfaces"
import { updateUserService } from "../service/user/updateUser.service"
import { deleteUserService } from "../service/user/deleteUser.service"

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

const listUserIdController = async (request: Request, response: Response) => {
    const userId: any = request.params.id

    const listUser = await listUserIdService(userId)

    return response.json(listUser)
}

const updateUserController = async (req: Request, res: Response) => {
    const userId = req.params.id
    const updatedValues: IUserUpdateRequest = req.body
    const updatedUser = await updateUserService(updatedValues, userId)
    return res.json(updatedUser)
}

const deleteUserController = async (req: Request, res: Response) => {
    await deleteUserService(req.params.id)
    res.status(204).send()
}

export {
    createUserController,
    listAllUsersController,
    listUserController,
    listUserIdController,
    updateUserController,
    deleteUserController
}