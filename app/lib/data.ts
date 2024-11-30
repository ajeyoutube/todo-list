'use server'
import  prisma  from './prisma';


 export async function fetchAllTodo(){

    try {
        const todos = await prisma.todo.findMany() 
        return todos
    } catch (error) {
        console.error('DB error', error)
    }
}

