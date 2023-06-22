import { Router } from "express"
import ensureDataIsValid from "../middleware/ensureDataIsValid.middleware"
import { loginSchema, resetPasswordSchema } from "../schema/login.schema"
import { createLoginController, forgotPasswordController, resetPasswordController } from "../controllers/login.controller"

export const loginRouter: Router = Router()

loginRouter.post("", ensureDataIsValid(loginSchema), createLoginController)
loginRouter.post("/forgot-password", forgotPasswordController)
loginRouter.patch("/reset-password/:token", /* ensureDataIsValid(resetPasswordSchema), */ resetPasswordController)


