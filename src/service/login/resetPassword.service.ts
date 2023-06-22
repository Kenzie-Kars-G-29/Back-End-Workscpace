import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import bcrypt from 'bcrypt';



export const resetPasswordService = async (token: string, newPassword: string) => {
    const userRepository = AppDataSource.getRepository(User)

    // Verificar se o token existe no banco de dados
    const user = await userRepository.findOne({
        where: {
            resetToken: token
        }
    });

    if (!user) {
        throw new Error("Token inválido");
    }

    try {
        // Atualizar a senha do usuário com a nova senha fornecida
        const hashedPassword = await bcrypt.hash(newPassword, 8);
        user.password = hashedPassword;
        await userRepository.save(user);

        return { message: "Senha redefinida com sucesso" };
    } catch (error) {
        throw new Error("Ocorreu um erro ao redefinir a senha");
    }
};