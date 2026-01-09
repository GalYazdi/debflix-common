import { z } from "zod";
import { moviesSchema } from "./moviesSchema";

export const categoriesSchema = z
  .object({
    name: z.string(),
    description: z.string(),
  })
  .strict();

export type categoriesInput = z.infer<typeof categoriesSchema>;
export const addCategorySchema = { body: categoriesSchema };
