"use client";

import { useRouter, useParams } from "next/navigation";
import * as z from "zod";
import { useState, useTransition } from "react";
import { RegisterSchema } from "@/lib/schemas";

import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { addUser, editUser } from "@/actions/users";
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function UserEditForm({ user }: { user: any }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  //   const user = await findUserById(userId);

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: user?.email,
      name: user?.name,
    },
  });
  console.log("render");

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      editUser(user.id, values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
        if (data.success) {
          form.reset();
          router.push("/dashboard/users");
        }
      });
    });
  };
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-xl">Хэрэглэгчийн мэдээлэл</CardTitle>
        <CardDescription>
          Зөвхөн Gmail account-н mail хаяг бүртгэх шаардлагатайг анхаарна уу.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Avatar className="mx-auto ">
          <AvatarImage src={user?.image} alt="avatar" />
          <AvatarFallback className="uppercase">
            {user?.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Алдаа</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {success && (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Амжилттай</AlertTitle>
            <AlertDescription>{success}</AlertDescription>
          </Alert>
        )}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="password">Нэр</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          id="name"
                          type="text"
                          placeholder="Нэр"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input
                          disabled={true}
                          id="email"
                          type="email"
                          placeholder="example@gmail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button disabled={isPending} variant={"destructive"} size="sm">
                  Хэрэглэгч устгах
                </Button>
                <Button disabled={isPending} type="submit" size="sm">
                  Хадгалах
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
