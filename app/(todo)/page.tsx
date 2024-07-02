import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getTodos } from "@/lib/actions";
import TodoCard from "./todo-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const todos = await getTodos()

  return (
    <div className="w-[500px]">
      <Card>
        <CardHeader>
          <div className="flex">
            <Input className="mr-3" placeholder="Type new todo here..." />
            <Button>Add</Button>
          </div>
        </CardHeader>
        <CardContent>
          {todos.map(todo => (
            <div className="mt-3">
              <TodoCard todo={todo} />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
