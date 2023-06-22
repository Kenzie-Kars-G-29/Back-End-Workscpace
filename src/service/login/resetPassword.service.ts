import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import bcrypt from 'bcrypt';
import { AppError } from "../../errors";



export const resetPasswordService = async (token: string, newPassword: string) => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            resetToken: token
        }
    });

    /* if (!user) {
        throw new AppError("Token inválido", 404);
    }
     */
    console.log(user)
    try {
        const hashedPassword = await bcrypt.hash(newPassword, 8);
        user!.password = hashedPassword;
        await userRepository.save(user!);

        return { message: "Senha redefinida com sucesso" };
    } catch (error) {
        throw new Error("Ocorreu um erro ao redefinir a senha");
    }
};