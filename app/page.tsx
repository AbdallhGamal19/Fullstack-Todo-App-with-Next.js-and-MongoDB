import { auth } from "@clerk/nextjs/server";
import { getUserTodoListActions } from "../actions/todo.action";

import AddTodo from "../components/AddTodo";
import TodoTable from "../components/TodoTable";

export default async function Home() {
  const { userId } = await auth();
  const todos = await getUserTodoListActions({ userId });

  return (
    <main className="container m-auto">
      <AddTodo userId={userId} />
      <TodoTable todos={todos} />
    </main>
  );
}
