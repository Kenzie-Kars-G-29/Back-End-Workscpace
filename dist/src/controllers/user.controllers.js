"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserController = exports.updateUserController = exports.listUserIdController = exports.listUserController = exports.listAllUsersController = exports.createUserController = void 0;
const createUser_service_1 = __importDefault(require("../service/user/createUser.service"));
const listAllUsers_service_1 = __importDefault(require("../service/user/listAllUsers.service"));
const listUserLogged_service_1 = __importDefault(require("../service/user/listUserLogged.service"));
const listUserId_service_1 = __importDefault(require("../service/user/listUserId.service"));
const updateUser_service_1 = require("../service/user/updateUser.service");
const deleteUser_service_1 = require("../service/user/deleteUser.service");
const createUserController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = request.body;
    const user = yield (0, createUser_service_1.default)(userData);
    return response.status(201).json(user);
});
exports.createUserController = createUserController;
const listAllUsersController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield (0, listAllUsers_service_1.default)();
    return response.json(allUsers);
});
exports.listAllUsersController = listAllUsersController;
const listUserController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const token = request.headers.authorization;
    const listUser = yield (0, listUserLogged_service_1.default)(token);
    return response.json(listUser);
});
exports.listUserController = listUserController;
const listUserIdController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = request.params.id;
    const listUser = yield (0, listUserId_service_1.default)(userId);
    return response.json(listUser);
});
exports.listUserIdController = listUserIdController;
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    const updatedValues = req.body;
    const updatedUser = yield (0, updateUser_service_1.updateUserService)(updatedValues, userId);
    return res.json(updatedUser);
});
exports.updateUserController = updateUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, deleteUser_service_1.deleteUserService)(req.params.id);
    res.status(204).send();
});
exports.deleteUserController = deleteUserController;
