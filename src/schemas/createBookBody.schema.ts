import { z } from "zod";

export const bookBodySchema = z.object({
    id: z.number().positive(),
    name: z.string().min(3),
    pages: z.number().min(1), 
    category: z.string().optional(),
});

export const createBookBodySchema = bookBodySchema.omit({ id: true });

export const updateBookBodySchema = bookBodySchema.omit({ id: true }).merge(z.object({ pages: z.number().min(1).optional() })).partial();


