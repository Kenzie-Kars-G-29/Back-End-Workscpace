import { Request, Response } from "express"
import { IUserLogin } from "../interfaces/user.interfaces"
import createLoginService from "../service/login/loginUser.service"


const createLoginController = async (request: Request, response: Response): Promise<Response> => {
    const loginData: IUserLogin = request.body
    const token = await createLoginService(loginData)

    return response.json({token})
}

export {
    createLoginController
}