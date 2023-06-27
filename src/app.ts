import "reflect-metadata";
import "express-async-errors";
import cors from 'cors'
import express, { Application } from "express";
import { handleErrors } from "./errors";
import announcementRouter from "./routes/announcement.routes";
import { userRoutes } from "./routes/user.routes";
import { loginRouter } from "./routes/login.routes";
import swaggerUI from "swagger-ui-express"
import swaggerDocument from "../swagger.json"

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/announcement", announcementRouter);
app.use("/users", userRoutes);
app.use("/login", loginRouter);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.use(handleErrors);
export default app;
