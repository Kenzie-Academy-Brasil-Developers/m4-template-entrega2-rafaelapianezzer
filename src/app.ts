import express, { json } from "express";
import { objectRouter } from "./routes/objects.routes";

export const app = express();

app.use(json());

app.use("/", objectRouter);
