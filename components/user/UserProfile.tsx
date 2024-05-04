"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useFormState, useFormStatus } from "react-dom";
import { removeUser, deleteTodo } from "@/actions/users";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const initialState = {
  message: "",
};

function UserProfile({ user }: { user: any }) {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(removeUser, initialState);
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-xl">Хэрэглэгчийн мэдээлэл</CardTitle>
        <CardDescription>
          Зөвхөн Gmail account-н mail хаяг бүртгэх шаардлагатайг анхаарна уу.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-2 w-full flex flex-col itmes-center justify-center">
          <Avatar className="mx-auto w-20 h-20">
            <AvatarImage src={user?.image} alt="avatar" className="w-20 h-20" />
            <AvatarFallback className="uppercase w-20 h-20 text-2xl">
              {user?.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <h1 className="w-full text-center text-2xl">{user?.name}</h1>
          <div className="mx-auto">
            <code className="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-[12px] font-semibold">
              {user?.email}
            </code>
          </div>
        </div>
        <div className="h-[200px]"></div>
        <div className="grid grid-cols-2 gap-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant={"destructive"}>Устгах</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Хэрэглэгчийг устгах уу?</AlertDialogTitle>
                <AlertDialogDescription>
                  Энэ үйлдлийг буцаах боломжгүйг анхаарна уу. Хэрэглэгчийг
                  устгаснаар бусад хэрэглэгчтэй холбоотой бүх мэдээллүүд устах
                  болно.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Цуцлах</AlertDialogCancel>

                <form action={formAction}>
                  <input type="hidden" name="id" value={user?.id} />
                  <AlertDialogAction asChild>
                    <Button variant={"destructive"} type="submit">
                      Устгах
                    </Button>
                  </AlertDialogAction>
                </form>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" disabled>
                Мэдээлэл Засах
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Мэдээлэл Засах</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
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
        </div>
        <p aria-live="polite" className="sr-only" role="status">
          {state?.message}
        </p>
      </CardContent>
    </Card>
  );
}

export default UserProfile;
