import Example from "@/components/dashboard/Example";
import React from "react";
import { useRouter, redirect } from "next/navigation";

function page() {
  redirect("/dashboard/applications");
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="loader"></div>
    </div>
  );
}

export default page;
