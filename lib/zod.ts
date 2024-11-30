
import { z } from "zod"


export const formAddSchema = z.object({
    title: z.string().min(1).max(50),
    description: z.string().min(1).max(200),
    finished: z.boolean()
})