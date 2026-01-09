import { z } from "zod";

export const moviesSchema = z
  .object({
    _id: z.string(),
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

export const moviesInputSchema = moviesSchema.omit({ _id: true });
export const addMovieSchema = { body: moviesInputSchema };
export type moviesInput = z.infer<typeof moviesInputSchema>;
export type Movie = z.infer<typeof moviesSchema>;

