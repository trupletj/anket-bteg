"use server";
import { Prisma } from "@prisma/client";
import {
  createUser,
  deleteUser,
  updateUser,
  getUsers,
  getUserById,
} from "@/lib/prisma/users";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const addUser = async (data: Prisma.UserCreateInput) => {
  return await createUser(data);
};

export const removeUser = async (
  prevState: {
    message: string;
  },
  formData: FormData
) => {
  const schema = z.object({
    id: z.string().min(1),
  });
  const data = schema.parse({
    id: formData.get("id"),
  });

  try {
    await deleteUser(data.id);
  } catch {
    return { message: "Алдаа гарлаа" };
  }

  revalidatePath("/dashboard/users");

  return { message: "User deleted" };
};

export const editUser = async (id: string, data: Prisma.UserUpdateInput) => {
  const response = await updateUser(id, data);
  revalidatePath("/dashboard/users");
  return response;
};

export const findUsers = async (args: Prisma.UserFindManyArgs) => {
  return await getUsers(args);
};

export const findUserById = async (id: string) => {
  return await getUserById(id);
};

export async function deleteTodo(
  prevState: {
    message: string;
  },
  formData: FormData
) {
  const schema = z.object({
    id: z.string().min(1),
  });
  const data = schema.parse({
    id: formData.get("id"),
  });

  console.log("====================+==>", data);

  return { message: "Todo deleted" };
}
