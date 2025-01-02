import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import { deleteTodoActions, updateTodoAction } from "../actions/todo.action";
import Spinner from "./ui/Spinner";
import { useState } from "react";
import { ITodo } from "../interfaces/index";
import TodoForm from "./TodoForm";

const TodoActions = ({ todo }: { todo: ITodo }) => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <>
      <div className="flex space-x-2">
        <TodoForm
          userId={todo.userId}
          buttonSize="icon"
          todo={todo}
          dialogTitle={"Edit Todo"}
          action={updateTodoAction}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-pen m-auto"
            >
              <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
            </svg>
          }
        />

        <Button
          onClick={async () => {
            setLoading(true);
            await deleteTodoActions(todo.id);
            setLoading(false);
          }}
          size={"icon"}
          variant={"destructive"}
        >
          {loading ? <Spinner /> : <Trash strokeWidth="2" size={16} />}
          {/* <Pen /> */}
        </Button>
      </div>
    </>
  );
};

export default TodoActions;
