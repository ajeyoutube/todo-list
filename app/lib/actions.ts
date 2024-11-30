'use server'

import { z } from 'zod'
import prisma from './prisma'
import { formAddSchema } from '@/lib/zod'



export async function AddTask(values: z.infer<typeof formAddSchema>) {
    try {
        const { data, success } = formAddSchema.safeParse(values)
        if (!success) {
            return {
                error: 'Invalid Data'
            }
        }
        await prisma.todo.create({
            data: {
                ...data
            }
        })
    } catch (error) {
        console.error('Db Error', error)
    }
}
export async function EdiTask(values: z.infer<typeof formAddSchema>, id: string) {
    try {
        const { data, success } = formAddSchema.safeParse(values)
        if (!success) {
            return {
                error: 'Invalid Data'
            }
        }
        await prisma.todo.update({
            where:{
            id
            },
            data: {
                ...data
            }
        })
    } catch (error) {
        console.error('Db Error', error)
    }
}



