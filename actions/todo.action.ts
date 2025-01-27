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
  if (!userId) {
    return []; // Return an empty array if userId is null
  }

  const data = await prisma.todo.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  return data;
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
