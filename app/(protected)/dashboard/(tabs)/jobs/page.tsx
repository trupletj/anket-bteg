import JobsList from "@/components/jobs/JobsList";
import { getJobs } from "@/lib/prisma/jobs";

export default async function Dashboard() {
  const jobs = await getJobs({
    include: {
      jobLocation: true,
      organization: true,
    },
  });

  return <JobsList jobs={jobs} />;
}
