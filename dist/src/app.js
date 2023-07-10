"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const errors_1 = require("./errors");
const announcement_routes_1 = __importDefault(require("./routes/announcement.routes"));
const user_routes_1 = require("./routes/user.routes");
const login_routes_1 = require("./routes/login.routes");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("../swagger.json"));
const comment_routes_1 = __importDefault(require("./routes/comment.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/announcement", announcement_routes_1.default);
app.use("/users", user_routes_1.userRoutes);
app.use("/login", login_routes_1.loginRouter);
app.use("/comments", comment_routes_1.default);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use(errors_1.handleErrors);
exports.default = app;