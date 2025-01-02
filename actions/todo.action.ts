"use server";
import { revalidatePath } from "next/cache.js";

import { PrismaClient } from "@prisma/client";
import { ITodo } from "../interfaces/index.js";
const prisma = new PrismaClient();
export const addTodoAction = async ({
  title,
  body,
  completed,
  userId,
}: ITodo) => {
  await prisma.todo.create({
    data: {
      title,
      body,
      userId: userId as string,
      completed,
    },
  });
  revalidatePath("/");
};
export const getUserTodoListActions = async ({
  userId,
}: {
  userId: string | null;
}) => {
  return await prisma.todo.findMany({
    where: { userId: userId as string },
    orderBy: { createdAt: "desc" },
  });
};

export const deleteTodoActions = async (id: string | undefined) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
};

export const updateTodoAction = async ({
  body,
  title,
  completed,
  id,
}: ITodo) => {
  await prisma.todo.update({
    where: { id },
    data: {
      body,
      title,
      completed,
    },
  });
  revalidatePath("/");
};
