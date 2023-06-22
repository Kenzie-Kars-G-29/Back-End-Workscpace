import { z } from "zod"

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

const resetPasswordSchema = z.object({
    newPassword: z.string().min(6),
});

export {
    loginSchema,
    resetPasswordSchema
}