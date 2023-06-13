import { Router } from "express"
import { createUserController, listAllUsersController, listUserController } from "../controllers/user.controllers"
import ensureAuthMidlleware from "../middleware/ensureAuth.middleware"
import ensureIsSellerMiddleware from "../middleware/user/ensureIsSeller"


export const userRoutes = Router()

userRoutes.post("", createUserController)
userRoutes.get("", listAllUsersController)
userRoutes.get("/user", ensureAuthMidlleware, ensureIsSellerMiddleware,listUserController)
