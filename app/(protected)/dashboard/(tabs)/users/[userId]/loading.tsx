import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function loading() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-xl">
          <Skeleton className="h-6 w-full " />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-4 w-full " />
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </CardContent>
    </Card>
  );
}

export default loading;
