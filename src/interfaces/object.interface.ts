export interface IObject{
    id: number,
    name: string,
    pages: number,
    category?: string,
    createdAt: Date,
    updatedAt: Date
}

export type TCreateObjectData = Pick<IObject, "name" | "pages" | "category" | "updatedAt">;

export type TUpdateBookData = Partial<TCreateObjectData>;


