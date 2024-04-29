import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

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
  } catch {
    return null;
  }
};

// export async function getJobs(args: Prisma.JobFindManyArgs) {
//   const jobs = await prisma.job.findMany(args);
//   return jobs;
// }

// export async function getUserByEmailPassword(email: string, password: string) {
//   console.log("getUserByEmailPassword", email, password);
//   const user = await prisma.user.findUnique({
//     where: {
//       email,
//     },
//   });
//   if (!user) {
//     return null;
//   }

//   return user;
// }

// export async function createUser(data: Prisma.UserCreateInput) {
//   const user = await prisma.user.create({
//     data,
//   });
//   return user;
// }
