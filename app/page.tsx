import { format } from "date-fns";

import Link from "next/link";
import {
  CircleUser,
  Menu,
  Package2,
  Search,
  MapPin,
  Building2,
  Calendar,
} from "lucide-react";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { getJobs } from "@/lib/prisma/jobs";
import { getJobLocations } from "@/lib/prisma/jobLocations";
import { getOrganizations } from "@/lib/prisma/organizations";
export default async function Home() {
  const jobs = await getJobs({
    include: {
      jobLocation: true,
      organization: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const jobLocations = await getJobLocations({});
  const organizations = await getOrganizations({});
  // if (error) {
  //   throw error;
  // }
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 container">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 text-nowrap ">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Нээлттэй ажлын байрууд
          </Link>
          {/* <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Бидний тухай
          </Link> */}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Нээлттэй ажлын байрууд
              </Link>
              {/* <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Customers
              </Link>
              <Link href="#" className="hover:text-foreground">
                Settings
              </Link> */}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                <Link href="/dashboard"> Нэвтрэх</Link>
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/80 p-4 md:gap-8 md:p-10 ">
        <div className="mx-auto grid w-full container gap-2">
          <h1 className="text-3xl font-semibold">Нээлттэй ажлын байрууд</h1>
        </div>
        <div className="mx-auto grid w-full container items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <div className="relative hidden flex-col items-start gap-8 md:flex">
            <form className="grid w-full items-start gap-6">
              <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Шүүлтүүр
                </legend>
                <div className="grid gap-3">
                  <Label htmlFor="model">Компани</Label>
                  <Select>
                    <SelectTrigger
                      id="model"
                      className="items-start [&_[data-description]]:hidden"
                    >
                      <SelectValue placeholder="-----" />
                    </SelectTrigger>
                    <SelectContent>
                      {organizations?.map((organization: any) => (
                        <SelectItem
                          key={organization?.id}
                          value={organization?.id}
                        >
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <div className="grid gap-0.5">
                              <p>
                                <span className="font-medium text-foreground">
                                  {organization?.name}
                                </span>
                              </p>
                              {/* <p className="text-xs" data-description>
                                Our fastest model for general use cases.
                              </p> */}
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Label htmlFor="model">Байршил</Label>
                  <Select>
                    <SelectTrigger
                      id="model"
                      className="items-start [&_[data-description]]:hidden"
                    >
                      <SelectValue placeholder="-----" />
                    </SelectTrigger>
                    <SelectContent>
                      {jobLocations?.map((jobLocation: any) => (
                        <SelectItem
                          key={jobLocation?.id}
                          value={jobLocation?.id}
                        >
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <div className="grid gap-0.5">
                              <p>
                                <span className="font-medium text-foreground">
                                  {jobLocation?.name}
                                </span>
                              </p>
                              {/* <p className="text-xs" data-description>
                                Our fastest model for general use cases.
                              </p> */}
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {/* <div className="grid gap-3">
                  <Label htmlFor="temperature">Temperature</Label>
                  <Input id="temperature" type="number" placeholder="0.4" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="top-p">Top P</Label>
                    <Input id="top-p" type="number" placeholder="0.7" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="top-k">Top K</Label>
                    <Input id="top-k" type="number" placeholder="0.0" />
                  </div>
                </div> */}
              </fieldset>
              <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Messages
                </legend>
                <div className="grid gap-3">
                  <Label htmlFor="role">Role</Label>
                  <Select defaultValue="system">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="system">System</SelectItem>
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="assistant">Assistant</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="content">Content</Label>
                </div>
              </fieldset>
            </form>
          </div>
          <div className="">
            <Accordion type="single" collapsible className="grid gap-4">
              {jobs.map((job: any) => (
                <AccordionItem key={job.id} value={job.id}>
                  <Card>
                    <CardHeader>
                      <AccordionTrigger>
                        <CardTitle>{job.name}</CardTitle>
                      </AccordionTrigger>
                      <CardDescription>
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center space-x-1">
                            <MapPin className="size-4" />{" "}
                            <p>{job.jobLocation?.name}</p>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Building2 className="size-4" />
                            <p>{job.organization?.name}</p>
                          </span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <AccordionContent>
                      <CardContent>{JSON.stringify(jobs, null, 2)}</CardContent>
                    </AccordionContent>

                    <CardFooter className="border-t px-6 py-4 flex justify-between">
                      <Link href={`/anket/${job.id}`}>
                        <Button>Анкет илгээх</Button>
                      </Link>
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                          <Calendar className="size-4" />{" "}
                          <p>Нээлтийн огноо: </p>
                          <p>{format(job.openingAt, "PPP")}</p>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Calendar className="size-4" /> <p>Хаалтын огноо: </p>
                          <p>{format(job.closingAt, "PPP")}</p>
                        </span>
                      </div>
                    </CardFooter>
                  </Card>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>
    </div>
  );
}
