import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function getJobs(args: Prisma.JobFindManyArgs) {
  const jobs = await prisma.job.findMany(args);
  return jobs;
}

export async function getJobById(id: number) {
  const job = await prisma.job.findUnique({
    where: {
      id,
    },
  });
  return job;
}

export async function createJob(data: Prisma.JobCreateInput) {
  try {
    const job = await prisma.job.create({
      data,
    });
    return job;
  } catch (e) {
    console.log(e);
  }
}
