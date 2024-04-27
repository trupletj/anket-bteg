-- CreateTable
CREATE TABLE "JobHistory" (
    "id" SERIAL NOT NULL,
    "applicationId" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "companyName" TEXT NOT NULL,
    "jobPosition" TEXT NOT NULL,

    CONSTRAINT "JobHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "JobHistory" ADD CONSTRAINT "JobHistory_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
