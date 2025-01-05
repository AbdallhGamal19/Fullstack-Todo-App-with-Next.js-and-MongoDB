"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ITodo } from "../interfaces/index";
import { Badge } from "./ui/badge";

import TodoActions from "./TodoActions";

export default function TodoTable({ todos }: { todos: ITodo[] }) {
  return (
    <Table>
      <TableCaption className="mb-5">A list of your Todos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Completed</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos?.map((todo, idx) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{idx + 1}</TableCell>
            <TableCell>{todo.title}</TableCell>
            <TableCell>
              {todo.completed ? (
                <Badge className="w-28 block text-center">Completed</Badge>
              ) : (
                <Badge className="w-28 block text-center" variant={"secondary"}>
                  UnCompleted
                </Badge>
              )}
            </TableCell>
            <TableCell className="text-right space-x-2">
              <TodoActions todo={todo} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">
            {todos.length ? todos.length : "You Not Have Todos"}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
