import { z } from 'zod'
import { createAnnouncementReturnSchema } from './announcement.schemas';

const userSchema = z.object({
    name: z.string()
      .min(3, {message: "o nome precisa ter no mínimo 3 caracteres"})
      .max(50, {message: "maximo de 50 caracteres"}),
    email: z.string()
      .email({message: "o email precisa ser válido"})
      .max(50, {message: "maximo de 50 caracteres"}),
    password: z.string()
      .min(4, {message: "mínimo de 4 caracteres"}).max(120),
    cpf: z.string()
      .min(3, {message: "mínimo de 3 caracteres"})
      .max(12, {message: "maximo de 12 caracteres"}),
    phone: z.string()
      .min(3, {message: "mínimo de 3 caracters"})
      .max(12, {message: "maximo de 12 caracters"}),
    birthday: z.string(),
    description: z.string(),
    cep: z.string()
      .min(3, {message: "mínimo de 3 caracters"})
      .max(12, {message: "maximo de 12 caracters"}),
    state: z.string()
      .min(3, {message: "mínimo de 3 caracters"})
      .max(45, {message: "maximo de 45 caracters"}),
    city: z.string()
      .min(3, {message: "mínimo de 3 caracters"})
      .max(45, {message: "maximo de 45 caracters"}),
    street: z.string()
      .min(3, {message: "mínimo de 3 caracters"})
      .max(45, {message: "maximo de 3 caracters"}),
    number: z.string()
      .min(1)
      .max(5, {message: "maximo de 3 caracters"}),
    complement: z.string()
      .min(3, {message: "mínimo de 3 caracters"})
      .max(20, {message: "maximo de 3 caracters"}),
    isSeller: z.boolean().default(false)
})

const returnUserSchema = userSchema
  .extend({
    id: z.string(),
    announcement: z.array(createAnnouncementReturnSchema).default([]),
  }).omit({password: true})

const returnAllUsersSchema = returnUserSchema.array()

export {
    userSchema,
    returnUserSchema,
    returnAllUsersSchema  
}