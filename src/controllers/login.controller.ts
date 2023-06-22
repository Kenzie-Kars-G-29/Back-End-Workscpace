import { Request, Response } from "express"
import { IUserLogin } from "../interfaces/user.interfaces"
import createLoginService from "../service/login/loginUser.service"
import User from "../entities/user.entity"
import nodemailer from "nodemailer"
import crypto from "crypto"
import { Repository } from "typeorm"
import { forgotPasswordService } from "../service/login/forgotPassword.service"
import { resetPasswordService } from "../service/login/resetPassword.service"


const createLoginController = async (request: Request, response: Response): Promise<Response> => {
    const loginData: IUserLogin = request.body
    const token = await createLoginService(loginData)

    return response.json({ token })
}

const forgotPasswordController = async (request: Request, response: Response) => {
    const { email } = request.body
    try {
        const result = await forgotPasswordService(email)
        return response.status(200).json(result)
    } catch (error) {
        return response.status(404).json({ message: "Usuário não encontrado!" })
    }
}

const resetPasswordController = async (request: Request, response: Response) => {
    const { token } = request.params
    const { newPassword } = request.body

    try {
        const result = await resetPasswordService(token, newPassword)
        return response.status(200).json(result)
    } catch (error) {
        return response.status(500)
    }
}


export {
    createLoginController,
    forgotPasswordController,
    resetPasswordController
}