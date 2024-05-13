import { Request, Response } from "express";
import { BookService } from "../services/book.service";


export class BookController{
    create(request: Request, response: Response){
        const bookService = new BookService();

        const object = bookService.create(request.body);

        return response.status(201).json(object);
    }

    getMany(request: Request, response: Response){
        
        const bookService = new BookService();

        const objects = bookService.getMany(request.query.search as string);

        return response.status(200).json(objects);
    }

    getOne(request: Request, response: Response){
        const bookService = new BookService();
             
        const object = bookService.getOne(Number(request.params.id));

        return response.status(200).json(object);
    }

    update(request: Request, response: Response){
        const bookService = new BookService();

        const object = bookService.update(Number(request.params.id), request.body);

        return response.status(200).json(object);
    }

    remove(request: Request, response: Response){
        const bookService = new BookService();

        const message = bookService.delete(Number(request.params.id));

        return response.status(200).json(message);
        
    }
}