import { booksDatabase, generateId } from "../database/database";
import { IObject, TCreateObjectData, TUpdateBookData  } from "../interfaces/object.interface";

export class ObjectService {
    create(data: TCreateObjectData) {
        const now = new Date();
        

        const newObject: IObject = {
            id: generateId(),
            ...data,
            createdAt: now,
            updatedAt: now
        }

        booksDatabase.push(newObject);

        return newObject;
    }

    getMany(search?: string) {
        
        const filteredBookList = booksDatabase.filter((book) => 
            search ? book.name.toLowerCase().includes(search.toLowerCase()) : true
        );

        return filteredBookList;
    }

    getOne(id: number) {
        const book = booksDatabase.find((book) => book.id === id);
         
        if(!book) {
            throw new Error("Book not found.")
        }

        return book;
    }

    update(id: number, data: TUpdateBookData) {
        const currentBook = booksDatabase.find((book) => book.id === id);

        if (!currentBook) {
            throw new Error("Book not found.");
        }

        const now = new Date();

        const UpdateBook: IObject = { ...currentBook, ...data, updatedAt: now};

        const index = booksDatabase.findIndex((book) => book.id === id);

        booksDatabase.splice(index, 1, UpdateBook);

        return UpdateBook;
    }

    delete(id: number) {
        const index = booksDatabase.findIndex((book) => book.id === id);

        if (index === -1) {
            throw new Error("Book not found.");
        }

        booksDatabase.splice(index, 1);

        return { message: "Book successfully deleted"};
    }
}