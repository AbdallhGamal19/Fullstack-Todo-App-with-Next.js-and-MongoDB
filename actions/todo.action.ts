"use server";
import { todoFormValues } from "./../validation/index";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTodoListActions = async () => {
  return await prisma.todo.findMany();
};
export const addTodoAction = async ({
  title,
  body,
  completed,
}: todoFormValues) => {
  return await prisma.todo.create({
    data: {
      title,
      body,
      completed,
    },
  });
};
