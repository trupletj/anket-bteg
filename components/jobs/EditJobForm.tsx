"use client";
import { useTransition, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { JobSchema } from "@/lib/schemas";
import { ChevronLeft, Upload, CalendarIcon, Save } from "lucide-react";
import { useRouter } from "next/navigation";

import { format, formatRelative } from "date-fns";
import { mn } from "date-fns/locale";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { saveJobForm } from "@/actions/jobs";
import { useToast } from "@/components/ui/use-toast";

function EditJobForm({
  jobLocations,
  organizations,
}: {
  jobLocations: any[];
  organizations: any[];
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof JobSchema>>({
    resolver: zodResolver(JobSchema),
    defaultValues: {
      name: "",
      description: "",
      organizationId: "",
      jobLocationId: "",
    },
  });
  function onSubmit(values: any) {
    setError("");
    setSuccess("");
    startTransition(() => {
      saveJobForm(values).then((data) => {
        setError(data?.error);
        setError(data?.success);
        if (data.success) {
          form.reset();
          toast({
            title: "Амжилттай",
            description: "Ажлын зар амжилттай хадгалагдлаа",
          });
          router.push("/dashboard/jobs");
        }
      });
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7"
              type="button"
              onClick={() => {
                router.push("/dashboard/jobs");
              }}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
              Шинэ ажлын зар оруулах
            </h1>
            <Badge variant="outline" className="ml-auto sm:ml-0">
              Шинэ
            </Badge>
            <div className="hidden items-center gap-2 md:ml-auto md:flex">
              {/* <Button variant="outline" size="sm">
                Цуцлах
              </Button> */}
              <Button
                disabled={isPending}
                size="sm"
                type="submit"
                className="h-8 gap-1"
              >
                <Save className="h-3.5 w-3.5 text-green-500" />
                <span>Хадгалах</span>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Үндсэн мэдээлэл</CardTitle>
                  <CardDescription>
                    Ажлын байрны мэдээллийг бүрэн оруулна уу
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="grid gap-3">
                          <FormLabel>Ажлын байрны нэр</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Хүний нөөцийн мэргэжилтэн"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem className="grid gap-3">
                          <FormLabel>Тайлбар</FormLabel>
                          <FormControl>
                            <Textarea
                              className=" min-h-[400px]"
                              placeholder="Тавигдах шаардлага"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Хугацааны мэдээлэл сонгох</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-6 gap-6 ">
                    <FormField
                      control={form.control}
                      name="openingAt"
                      render={({ field }) => (
                        <FormItem className="flex flex-col col-span-3">
                          <FormLabel>Нээлтийн огноо</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-[240px] pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP", { locale: mn })
                                  ) : (
                                    <span>Огноо сонгоно уу</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                              />
                            </PopoverContent>
                          </Popover>
                          <FormDescription>
                            Анкет хүлээн авах нээлтийн огноо
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="closingAt"
                      render={({ field }) => (
                        <FormItem className="flex flex-col col-span-3">
                          <FormLabel>Хаалтын огноо</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-[240px] pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP", { locale: mn })
                                  ) : (
                                    <span>Огноо сонгоно уу</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                              />
                            </PopoverContent>
                          </Popover>
                          <FormDescription>
                            Анкет хүлээн авах сүүлийн огноо
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Байгууллага сонгох</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="organizationId"
                        render={({ field }) => (
                          <FormItem className="">
                            <Label htmlFor="status">Багууллага сонгох</Label>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue=""
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Сонгоно уу" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {organizations?.map((organization) => (
                                  <SelectItem value={organization?.id}>
                                    {organization?.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        variant="outline"
                        type="button"
                        disabled
                      >
                        Шинээр нэмэх
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here. Click save when
                          you're done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Name
                          </Label>
                          <Input
                            id="name"
                            defaultValue="Pedro Duarte"
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            Username
                          </Label>
                          <Input
                            id="username"
                            defaultValue="@peduarte"
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Байршил</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="jobLocationId"
                        render={({ field }) => (
                          <FormItem className="">
                            <Label htmlFor="jobLocationId">
                              Байршил сонгох
                            </Label>
                            <Select onValueChange={field.onChange}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Сонгоно уу" />
                                </SelectTrigger>
                              </FormControl>

                              <SelectContent>
                                {jobLocations?.map((jobLocation) => (
                                  <SelectItem value={jobLocation.id}>
                                    {jobLocation.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        variant="outline"
                        type="button"
                        disabled
                      >
                        Шинээр нэмэх
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here. Click save when
                          you're done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Name
                          </Label>
                          <Input
                            id="name"
                            defaultValue="Pedro Duarte"
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            Username
                          </Label>
                          <Input
                            id="username"
                            defaultValue="@peduarte"
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </div>
          </div>
          {/* <div className="flex items-center justify-center gap-2 md:hidden">
            <Button variant="outline" size="sm">
              Discard
            </Button>
            <Button size="sm" type="submit">
              Save Product
            </Button>
          </div> */}
        </div>
      </form>
    </Form>
  );
}

export default EditJobForm;
