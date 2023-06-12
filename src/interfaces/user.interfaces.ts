import { z } from "zod"
import { returnAllUsersSchema, returnUserSchema, userSchema } from "../schema/user.schemas"

type IUser = z.infer<typeof userSchema>
type IUserReturn = z.infer<typeof returnUserSchema>
type IAllUsersReturn = z.infer<typeof returnAllUsersSchema>

export {
    IUser,
    IUserReturn,
    IAllUsersReturn
}