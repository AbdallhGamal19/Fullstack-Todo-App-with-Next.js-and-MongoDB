import { getTodoListActions } from "../actions/todo.action";

import AddTodoForm from "../components/AddTodoForm";
import TodoTable from "../components/TodoTable";

export default async function Home() {
  const todos = await getTodoListActions();
  return (
    <main className="container m-auto">
      <TodoTable todos={todos} />
      <AddTodoForm />
    </main>
  );
}
