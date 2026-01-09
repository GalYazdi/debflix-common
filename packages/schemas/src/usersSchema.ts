import {z} from "zod";

export const usersSchema = z.object({
    _id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    image: z.string(),
    personalNumber: z.string(),
    likedMovies: z.array(z.string()),
    birthDate: z.coerce.date().min(new Date("1800-01-01")),
})

export type User = z.infer<typeof usersSchema>
export type UserUpdateInfo = Pick<z.infer<typeof usersSchema>, '_id' | 'firstName' | 'lastName' | 'birthDate'>;
export type UserQueueData = Pick<z.infer<typeof usersSchema>, 'firstName' | 'lastName' | 'birthDate'>
