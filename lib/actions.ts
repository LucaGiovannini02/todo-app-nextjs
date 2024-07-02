'use server'

import { sql } from "@vercel/postgres"
import { Todo } from "./definitions"
import { unstable_noStore as noStore, revalidatePath } from "next/cache" 

export const getTodos = async () => {
    noStore()

    const data = await sql<Todo>`SELECT * FROM todos`
    return data.rows
}

export const delTodo = async (id: string) => {
    const data = (await sql<Todo>`SELECT * FROM todos WHERE id = ${id}`).rows[0]
    if(!data) {
        throw new Error("Not found")
    }

    await sql`DELETE FROM todos WHERE id = ${id}`
    revalidatePath("/")
}

export const addTodo = async (todo: Todo) => {
    await sql`INSERT INTO todos (title) VALUES (${todo.title})`
}

export const patchTodo = async (todo: Todo) => {
    await sql`UPDATE todos SET title = ${todo.title}, completed = ${todo.completed} WHERE id = ${todo.id}`
    revalidatePath('/')
}