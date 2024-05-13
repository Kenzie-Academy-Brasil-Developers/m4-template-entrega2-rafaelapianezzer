export interface IBook{
    id: number,
    name: string,
    pages: number,
    category?: string,
    createdAt: Date,
    updatedAt: Date
}

export type TCreateObjectData = Pick<IBook, "name" | "pages" | "category" | "updatedAt">;

export type TUpdateBookData = Partial<TCreateObjectData>;


