import { Router } from "express";
import { ObjectController } from "../controllers/object.controller";
import { IsBookIdValid } from "../middlewares/isBookIdValid.middleware";
import { IsBookAlreadyRegistered } from "../middlewares/isBookAlreadyRegistered.middlewares";


export const objectRouter = Router();

const objectControllers = new ObjectController();



objectRouter.post("/books", IsBookAlreadyRegistered.execute, objectControllers.create);
objectRouter.get("/books", objectControllers.getMany);
objectRouter.get("/books/:id", IsBookIdValid.execute, objectControllers.getOne);
objectRouter.patch("/books/:id", IsBookIdValid.execute, IsBookAlreadyRegistered.execute, objectControllers.update);
objectRouter.delete("/books/:id", IsBookIdValid.execute, objectControllers.remove);



