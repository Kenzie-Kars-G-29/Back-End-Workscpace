import { Repository } from "typeorm"
import User from "../../entities/user.entity"
import nodemailer from "nodemailer"
import { AppDataSource } from "../../data-source"
import crypto from "crypto"
import bcrypt from 'bcrypt';

export const passwordResetTokens: Record<string, string> = {};

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

        const resetToken = crypto.randomBytes(32).toString('hex');
        passwordResetTokens[user.id] = resetToken

        await userRepository.save({
            ...user, resetToken: resetToken
        })


        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: 587,
            auth: {
                user: process.env.EMAIL_HOST_USER,
                pass: process.env.EMAIL_HOST_PASSWORD
            },
            tls: { rejectUnauthorized: false }
        })

        transporter.sendMail({
            from: `Motors Shop <${process.env.EMAIL_HOST_USER}>`,
            to: email,
            subject: "Recuperação de Senha!",
            html: `<p>Olá ${user.name}, clique no link para redefinir sua senha: <a href="http://localhost:5173/forget-password/${resetToken}">Redefinir Senha</a></p>`
        })
        return { message: "Email enviado!" }

    } catch (error) {
        throw new Error("Usuário não encontrado!")
    }
}

//http://localhost:5173/forget-password?token=${resetToken}