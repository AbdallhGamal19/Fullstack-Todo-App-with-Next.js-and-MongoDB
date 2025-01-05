import { addTodoAction } from "../actions/todo.action";

import TodoForm from "./TodoForm";

const AddTodo = ({ userId }: { userId: string | null }) => {
  return (
    <div className="p-2">
      <TodoForm
        userId={userId}
        action={addTodoAction}
        dialogTitle="Add new Todo"
        icon="Add Todo"
      />
    </div>
  );
};

export default AddTodo;
