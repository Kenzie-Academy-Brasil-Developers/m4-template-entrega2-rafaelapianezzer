import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";

export class IsBookAlreadyRegistered {
    static execute(req: Request, res: Response, next: NextFunction) {
        if(booksDatabase.some(book => book.name === req.body.name)){
            return res.status(409).json({ "error": "Book already registered."})
        }
        
        next();
    }
}