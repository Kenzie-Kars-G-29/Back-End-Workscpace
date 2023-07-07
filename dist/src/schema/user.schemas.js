"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchemaUpdate = exports.returnAllUsersSchema = exports.returnUserSchema = exports.userSchema = void 0;
const zod_1 = require("zod");
const announcement_schemas_1 = require("./announcement.schemas");
const userSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .min(3, { message: "o nome precisa ter no mínimo 3 caracteres" })
        .max(50, { message: "maximo de 50 caracteres" }),
    email: zod_1.z
        .string()
        .email({ message: "o email precisa ser válido" })
        .max(50, { message: "maximo de 50 caracteres" }),
    password: zod_1.z.string().min(4, { message: "mínimo de 4 caracteres" }).max(120),
    cpf: zod_1.z
        .string()
        .min(3, { message: "mínimo de 3 caracteres" })
        .max(12, { message: "maximo de 12 caracteres" }),
    phone: zod_1.z
        .string()
        .min(3, { message: "mínimo de 3 caracters" })
        .max(12, { message: "maximo de 12 caracters" }),
    birthday: zod_1.z.string(),
    description: zod_1.z.string(),
    cep: zod_1.z
        .string()
        .min(3, { message: "mínimo de 3 caracters" })
        .max(12, { message: "maximo de 12 caracters" }),
    state: zod_1.z
        .string()
        .min(3, { message: "mínimo de 3 caracters" })
        .max(45, { message: "maximo de 45 caracters" }),
    city: zod_1.z
        .string()
        .min(3, { message: "mínimo de 3 caracters" })
        .max(45, { message: "maximo de 45 caracters" }),
    street: zod_1.z
        .string()
        .min(3, { message: "mínimo de 3 caracters" })
        .max(45, { message: "maximo de 45 caracters" }),
    number: zod_1.z.string().min(1).max(5, { message: "maximo de 5 caracters" }),
    complement: zod_1.z.string(),
    isSeller: zod_1.z.boolean().default(false),
});
exports.userSchema = userSchema;
const returnUserSchema = userSchema
    .extend({
    id: zod_1.z.string().uuid(),
    announcement: zod_1.z.array(announcement_schemas_1.createAnnouncementWithImageReturnSchema).default([]),
})
    .omit({ password: true });
exports.returnUserSchema = returnUserSchema;
const returnAllUsersSchema = returnUserSchema.array();
exports.returnAllUsersSchema = returnAllUsersSchema;
const userSchemaUpdate = userSchema.partial();
exports.userSchemaUpdate = userSchemaUpdate;
