"use server";
import { Prisma } from "@prisma/client";
import {
  getJobLocations,
  getJobLocationById,
  createJobLocation,
  deleteJobLocation,
} from "@/lib/prisma/jobLocations";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const findJobLocations = async (
  args: Prisma.JobLocationFindManyArgs
) => {
  return await getJobLocations(args);
};

export const findJobLocationById = async (id: number) => {
  return await getJobLocationById(id);
};

export const addJobLocation = async (data: Prisma.JobLocationCreateInput) => {
  return await createJobLocation(data);
};

export const removeJobLocation = async (
  prevState: {
    message: string;
  },
  formData: FormData
) => {
  const schema = z.object({
    id: z.number().int(),
  });
  const data = schema.parse({
    id: formData.get("id"),
  });

  try {
    await deleteJobLocation(data.id);
  } catch {
    return { message: "Алдаа гарлаа" };
  }

  revalidatePath("/dashboard/jobs");

  return { message: "JobLocation deleted" };
};

// export const createJobForm = async (values: z.infer<typeof JobSchema>) => {
//     try {
//       await createJob(values);

//       return { success: "Амжилттай бүртгэгдлээ" };
//     } catch (error) {
//       return { error: "Something went wrong" };
//     }
//   };
