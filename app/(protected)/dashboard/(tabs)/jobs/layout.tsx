import Header2 from "@/components/dashboard/Header";
import SideMenuJobs from "@/components/dashboard/SideMenuJobs";
import React from "react";
import { getJobLocations } from "@/lib/prisma/jobLocations";
import { getOrganizations } from "@/lib/prisma/organizations";

async function JobsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jobLocations = await getJobLocations({});
  const organizations = await getOrganizations({});
  return (
    <div className="grid min-h-full w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] md:pl-14 ">
      <SideMenuJobs jobLocations={jobLocations} organizations={organizations} />
      <div className="p-10">{children}</div>
    </div>
  );
}

export default JobsLayout;
