import { Router } from "express";
import { BookController } from "../controllers/book.controller";
import { IsBookIdValid } from "../middlewares/isBookIdValid.middleware";
import { IsBookAlreadyRegistered } from "../middlewares/isBookAlreadyRegistered.middlewares";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { createBookBodySchema } from "../schemas/createBookBody.schema";
import { updateBookBodySchema } from "../schemas/createBookBody.schema";



export const objectRouter = Router();

const objectControllers = new BookController();



objectRouter.post("/books", IsBookAlreadyRegistered.execute, ValidateBody.execute({ body: createBookBodySchema}), objectControllers.create);
objectRouter.get("/books", objectControllers.getMany);
objectRouter.get("/books/:id", IsBookIdValid.execute, objectControllers.getOne);
objectRouter.patch("/books/:id", IsBookIdValid.execute, ValidateBody.execute({ body: updateBookBodySchema }), IsBookAlreadyRegistered.execute, objectControllers.update);
objectRouter.delete("/books/:id", IsBookIdValid.execute, objectControllers.remove);



