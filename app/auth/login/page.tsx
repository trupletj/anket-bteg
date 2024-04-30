import { auth, signIn } from "@/auth";
import Link from "next/link";
import * as z from "zod";
import { useState, useTransition } from "react";
import { LoginSchema } from "@/lib/schemas";
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
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { login } from "@/actions/login";
import { log } from "console";
import { set } from "date-fns";

export default function LoginForm() {
  // const [isPending, startTransition] = useTransition();

  // const [error, setError] = useState<string | undefined>("");
  // const [success, setSuccess] = useState<string | undefined>("");

  // const form = useForm<z.infer<typeof LoginSchema>>({
  //   resolver: zodResolver(LoginSchema),
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   },
  // });

  // const onSubmit = (values: z.infer<typeof LoginSchema>) => {
  //   setError("");
  //   setSuccess("");
  //   startTransition(() => {
  //     login(values).then((data) => {
  //       setError(data?.error);
  //     });
  //   });
  // };
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Нэвтрэх</CardTitle>
        <CardDescription>Google бүртгэлээ ашиглана уу</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/auth/login" });
          }}
        >
          <Button className="w-full" type="submit">
            Login with Google
          </Button>
        </form>
        {/* {error && (
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
        )} */}
        {/* <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isPending}
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
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          id="password"
                          type="password"
                          placeholder="******"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button disabled={isPending} type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/auth/register" className="underline">
                Sign up
              </Link>
            </div>
          </form>

          
        </Form> */}
      </CardContent>
    </Card>
  );
}
