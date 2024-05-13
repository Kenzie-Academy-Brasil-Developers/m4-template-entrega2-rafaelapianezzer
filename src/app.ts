import express, { json } from "express";
import { objectRouter } from "./routes/objects.routes";
import helmet from "helmet";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/", objectRouter);
