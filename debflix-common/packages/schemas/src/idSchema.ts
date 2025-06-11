import { z } from "zod";

export const idSchema = z
  .object({
    id: z.string().uuid(),
  })
  .strict();


export const getByIdParamsSchema = {params: idSchema}
export const getByIdQuerySchema = {querystring: idSchema }

