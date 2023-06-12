import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import announcementRouter from "./routes/announcement.routes";
import { userRoutes } from "./routes/user.routes";
import { loginRouter } from "./routes/login.routes";

const app: Application = express();
app.use(express.json());

app.use("/announcement", announcementRouter);
app.use("/users", userRoutes)
app.use("/login", loginRouter)

app.use(handleErrors);
export default app;
