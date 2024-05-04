import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { RegisterSchema } from "@/lib/schemas";

export async function getUsers(args: Prisma.UserFindManyArgs) {
  try {
    const users = await prisma.user.findMany(args);
    return users;
  } catch (e) {
    console.log(e);
  }
}

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    return { error };
  }
};

//TODO: existingUser check
export const createUser = async (data: Prisma.UserCreateInput) => {
  const validatedFields = RegisterSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, name } = validatedFields.data;

  const exixtingUser = await getUserByEmail(email);

  if (exixtingUser) {
    return {
      error: "Бүртгэлтэй имэйл хаяг байна",
    };
  }
  await prisma.user.create({
    data: {
      email,
      name,
    },
  });
  return { success: "Бүртгэл амжилттай" };
};

export const updateUser = async (id: string, data: Prisma.UserUpdateInput) => {
  try {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data,
    });
    return { success: "Амжилттай засагдлаа" };
  } catch (e) {
    return { error: "Алдаа гарлаа" };
  }
};

export const deleteUser = async (id: string) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });
    return user;
  } catch (e) {
    console.log(e);
  }
};
