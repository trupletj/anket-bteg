import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function getOrganizations(args: Prisma.OrganizationFindManyArgs) {
  const organizations = await prisma.organization.findMany(args);
  return organizations;
}
