/*
  Warnings:

  - You are about to drop the `JobHistory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_jobCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_jobLocationId_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_processId_fkey";

-- DropForeignKey
ALTER TABLE "JobHistory" DROP CONSTRAINT "JobHistory_applicationId_fkey";

-- AlterTable
ALTER TABLE "Job" ALTER COLUMN "jobLocationId" DROP NOT NULL,
ALTER COLUMN "organizationId" DROP NOT NULL,
ALTER COLUMN "processId" DROP NOT NULL,
ALTER COLUMN "jobCategoryId" DROP NOT NULL;

-- DropTable
DROP TABLE "JobHistory";

-- CreateTable
CREATE TABLE "WorkHistory" (
    "id" SERIAL NOT NULL,
    "applicationId" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "companyName" TEXT NOT NULL,
    "jobPosition" TEXT NOT NULL,

    CONSTRAINT "WorkHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_jobLocationId_fkey" FOREIGN KEY ("jobLocationId") REFERENCES "JobLocation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_processId_fkey" FOREIGN KEY ("processId") REFERENCES "Process"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_jobCategoryId_fkey" FOREIGN KEY ("jobCategoryId") REFERENCES "JobCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkHistory" ADD CONSTRAINT "WorkHistory_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
