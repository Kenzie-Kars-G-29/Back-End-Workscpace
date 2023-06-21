import { Request, Response } from "express"
import { IUserLogin } from "../interfaces/user.interfaces"
import createLoginService from "../service/login/loginUser.service"
import User from "../entities/user.entity"
import nodemailer from "nodemailer"
import crypto from "crypto"
import { Repository } from "typeorm"
import { forgotPasswordService } from "../service/user/forgotPassword.service"


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

    /* const {email} = request.body
    try {
        const user = await getRepository(User).find({
            where: {
                email
            }
        })

        const transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "4c897dadbeb524",
              pass: "********73f0"
            }
        })
        const newPassword = crypto.randomBytes(4).toString('hex')
        
        transporter.sendMail({
            from: 'Administrador <i.e 54463e4259-63a6a1+1@inbox.mailtrap.io>',
            to: email,
            subject: "Recuperação de Senha!",
            html: `<p>Olá, sua nova senha para acessar Motors Shop é:${newPassword}</p><br/><a href="http://localhost:3333/signin">Motors Shop</a>`
        }).then(
            () =>{
                bcrypt.hash(newPassword,8).then(
                    password => {
                        getRepository(User).update(user[0].id,{
                            password
                        }).then(
                            () => {
                                return response.status(200).json({ message: "Email enviado!"})
                            }
                        ).catch(
                            () => {
                                return response.status(404).json({message: "Usuário não encontrado!"})
                            }
                        )
                    }
                )
               
            }
        )

    } catch (error){
        return response.status(404).json({ message: "Usuário não encontrado!"})
    } */
}

export {
    createLoginController,
    forgotPasswordController
}