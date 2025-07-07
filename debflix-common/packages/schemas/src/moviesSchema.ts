import { string, z } from "zod";
import { categoriesSchema } from "./categoriesSchema";

export const moviesSchema = z
  .object({
    id: z.string().uuid(),
    title: z.string().min(1),
    year: z
      .number()
      .int()
      .min(1800)
      .max(new Date().getFullYear() + 5),
    director: z.string(),
    rating: z.number().min(0),
    likes: z.number().int().min(0),
    categories: z.array(z.string())
  })
  .strict();

export const moviesInputSchema = moviesSchema.omit({ id: true });
export const addMovieSchema = { body: moviesInputSchema };
export type moviesInput = z.infer<typeof moviesInputSchema>;
