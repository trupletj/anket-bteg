import { redirect } from "next/navigation";
import { findUserById } from "@/actions/users";
import UserProfile from "@/components/user/UserProfile";
import React from "react";

async function UserEdit({
  params: { userId },
}: {
  params: { userId: string };
}) {
  const user = await findUserById(userId);

  if (!user) redirect("/dashboard/users");
  return <UserProfile user={user} />;
}

export default UserEdit;
