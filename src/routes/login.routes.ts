import { Router } from "express"
import ensureDataIsValid from "../middleware/ensureDataIsValid.middleware"
import { loginSchema } from "../schema/login.schema"
import { createLoginController } from "../controllers/login.controller"

const loginRouter: Router = Router()

loginRouter.post("", ensureDataIsValid(loginSchema), createLoginController)


export {
    loginRouter
}