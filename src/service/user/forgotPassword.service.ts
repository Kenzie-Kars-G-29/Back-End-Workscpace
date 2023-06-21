import { Repository } from "typeorm"
import User from "../../entities/user.entity"
import nodemailer from "nodemailer"
import { AppDataSource } from "../../data-source"
import crypto from "crypto"
import bcrypt from 'bcrypt';


export const forgotPasswordService = async (email: string/* userData: IUser */) => {

    try {
        const userRepository = AppDataSource.getRepository(User)
        const user = await userRepository.findOne({
            where: {
                email,
            }
        })

        if (!user) {
            throw new Error('Usuário não encontrado');
        }

        const newPassword = crypto.randomBytes(4).toString('hex');
        const hashedPassword = await bcrypt.hash(newPassword, 8);

        await userRepository.update(user.id, {
            password: hashedPassword,
        });

        const transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "4c897dadbeb524",
                pass: "********73f0"
            }
        })

        transporter.sendMail({
            from: 'Administrador <i.e 54463e4259-63a6a1+1@inbox.mailtrap.io>',
            to: email,
            subject: "Recuperação de Senha!",
            html: `<p>Olá, sua nova senha para acessar Motors Shop é:${newPassword}</p><br/><a href="http://localhost:3333/signin">Motors Shop</a>`
        })/* .then(
            () => {
                bcrypt.hash(newPassword, 8).then(
                    password => {
                        getRepository(User).update(user[0].id, {
                            password
                        }).then(
                            () => {
                                return response.status(200).json({ message: "Email enviado!" })
                            }
                        ).catch(
                            () => {
                                return response.status(404).json({ message: "Usuário não encontrado!" })
                            }
                        )
                    }
                )

            }
        ) */
        return { message: "Email enviado!" }

    } catch (error) {
        throw new Error("Usuário não encontrado!")
    }
}