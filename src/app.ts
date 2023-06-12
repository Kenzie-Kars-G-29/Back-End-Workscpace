import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import announcementRouter from "./routes/announcement.routes";

const app: Application = express();
app.use(express.json());
app.use(handleErrors);

app.use("/announcement", announcementRouter);

export default app;
