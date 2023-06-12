import { Router } from "express"
import { createUserController, listAllUsersController } from "../controllers/user.controllers"


export const userRoutes = Router()

userRoutes.post("", createUserController)
userRoutes.get("", listAllUsersController)
