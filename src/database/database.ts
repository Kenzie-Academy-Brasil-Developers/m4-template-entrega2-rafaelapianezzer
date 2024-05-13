import { IObject } from "../interfaces/book.interface";

export const booksDatabase: IObject[] = [];

let id = 0;

export const generateId = () => {
    id++;
    return id;
}

