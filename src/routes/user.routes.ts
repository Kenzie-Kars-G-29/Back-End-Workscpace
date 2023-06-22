import { Router } from "express"
import { createUserController, deleteUserController, listAllUsersController, listUserController, listUserIdController, updateUserController } from "../controllers/user.controllers"
import ensureAuthMidlleware from "../middleware/ensureAuth.middleware"
import ensureDataIsValid from "../middleware/ensureDataIsValid.middleware"
import { userSchema, userSchemaUpdate } from "../schema/user.schemas"
import { ensureUserExistsMiddleware } from "../middleware/user/ensureUserExists.middleware"
import { forgotPasswordController } from "../controllers/login.controller"


export const userRoutes = Router()

userRoutes.post("", ensureDataIsValid(userSchema), createUserController)
userRoutes.get("", listAllUsersController)
userRoutes.get("/userlogged", ensureAuthMidlleware, listUserController)
userRoutes.get("/:id", ensureAuthMidlleware, listUserIdController)
userRoutes.patch("/:id", ensureAuthMidlleware, ensureDataIsValid(userSchemaUpdate), updateUserController)
userRoutes.delete("/:id", ensureUserExistsMiddleware, deleteUserController)
