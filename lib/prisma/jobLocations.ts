import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function getJobLocations(args: Prisma.JobLocationFindManyArgs) {
  const jobLocations = await prisma.jobLocation.findMany(args);
  return jobLocations;
}

export async function getJobLocationById(id: number) {
  const jobLocation = await prisma.jobLocation.findUnique({
    where: {
      id,
    },
  });
  return jobLocation;
}

export async function createJobLocation(data: Prisma.JobLocationCreateInput) {
  const jobLocation = await prisma.jobLocation.create({
    data,
  });
  return jobLocation;
}

export const deleteJobLocation = async (id: number) => {
  const jobLocation = await prisma.jobLocation.delete({
    where: {
      id,
    },
  });
  return jobLocation;
};
