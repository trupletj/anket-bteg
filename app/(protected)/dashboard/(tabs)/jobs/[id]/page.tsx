import CreateJobForm from "@/components/jobs/CreateJobForm";
import { getJobLocations } from "@/lib/prisma/jobLocations";
import { getOrganizations } from "@/lib/prisma/organizations";

export default async function CreateNewJob() {
  const jobLocations = await getJobLocations({});
  const organizations = await getOrganizations({});

  return (
    <CreateJobForm jobLocations={jobLocations} organizations={organizations} />
  );
}
