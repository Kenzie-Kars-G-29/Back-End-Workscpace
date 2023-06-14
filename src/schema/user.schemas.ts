import { z } from 'zod'
import { createAnnouncementWithImageSchema } from './announcement.schemas';

const userSchema = z.object({
    name: z.string().min(3).max(50),
    email: z.string().email().max(50),
    password: z.string().min(4).max(120),
    cpf: z.string().min(3).max(12),
    phone: z.string().min(3).max(12),
    birthday: z.string(),
    description: z.string(),
    cep: z.string().min(3).max(12),
    state: z.string().min(3).max(45),
    city: z.string().min(3).max(45),
    street: z.string().min(3).max(45),
    number: z.string().min(1).max(5),
    complement: z.string().min(3).max(20),
    isSeller: z.boolean().default(false)
})

const returnUserSchema = userSchema
  .extend({
    id: z.string(),
    announcements: z.array(createAnnouncementWithImageSchema).default([]),
  }).omit({password: true})

const returnAllUsersSchema = returnUserSchema.array()

export {
    userSchema,
    returnUserSchema,
    returnAllUsersSchema  
}