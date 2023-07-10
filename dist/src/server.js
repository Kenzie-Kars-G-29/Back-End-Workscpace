"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
require("dotenv/config");
const data_source_1 = require("./data-source");
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("Database connected!");
    app_1.default.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}!`);
    });
})
    .catch((err) => {
    console.log(err);
});