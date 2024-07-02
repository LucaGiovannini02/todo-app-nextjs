'use client'

import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Todo } from "@/lib/definitions"
import { BiTrash } from "react-icons/bi";
import { delTodo, patchTodo } from "@/lib/actions";
import clsx from "clsx";

const TodoCard = ({ todo }: { todo: Todo }) => {
    return (
        <Card className={clsx(todo.completed && "opacity-50 line-through", "p-4 flex justify-between")}>
            <div className="flex items-center">
                <Checkbox defaultChecked={todo.completed} onClick={() => patchTodo({...todo, completed: !todo.completed})} className="mr-3" />
                {todo.title}
            </div>
            <div className="flex items-center text-2xl">
                <BiTrash onClick={() => delTodo(todo.id)} className="hover:text-red-500 cursor-pointer transition duration-500" />
            </div>
        </Card>
    )
}

export default TodoCard