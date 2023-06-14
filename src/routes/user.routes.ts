import { Router } from "express"
import { createUserController, listAllUsersController, listUserController, listUserIdController } from "../controllers/user.controllers"
import ensureAuthMidlleware from "../middleware/ensureAuth.middleware"


export const userRoutes = Router()

userRoutes.post("", createUserController)
userRoutes.get("", listAllUsersController)
userRoutes.get("/userlogged", ensureAuthMidlleware,listUserController)
userRoutes.get("/:id", listUserIdController)
