import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors";
import jwt from "jsonwebtoken";
import { returnUserSchema } from "../../schema/user.schemas";

const listUserLoggedService = async (token: string) => {
  const userRepository = AppDataSource.getRepository(User);

  let userId = "";

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {
    if (error) {
      throw new AppError(error.message, 401);
    }

    userId = decoded.id;
  });

  const user = await userRepository.findOne({
    where: {
      id: userId
    },
    relations: ['announcement', 'announcement.image'],
    select: ['id',
      'name',
      'email',
      'cpf',
      'phone',
      'birthday',
      'description',
      'cep',
      'state',
      'city',
      'street',
      'number',
      'complement',
      'isSeller'],
  })
}

export default listUserLoggedService;
