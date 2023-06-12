import { z } from "zod"
import { returnAllUsersSchema, returnUserSchema, userSchema } from "../schema/user.schemas"
import { loginSchema } from "../schema/login.schema"

type IUser = z.infer<typeof userSchema>
type IUserReturn = z.infer<typeof returnUserSchema>
type IAllUsersReturn = z.infer<typeof returnAllUsersSchema>
type IUserLogin = z.infer<typeof loginSchema>

export {
    IUser,
    IUserReturn,
    IAllUsersReturn,
    IUserLogin
}