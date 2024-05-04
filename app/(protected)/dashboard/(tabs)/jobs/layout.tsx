import Header2 from "@/components/dashboard/Header";
import SideMenu from "@/components/dashboard/SideMenu";
import React from "react";

function JobsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid min-h-full w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] md:pl-14 ">
      <SideMenu />
      <div className="p-10">{children}</div>
    </div>
  );
}

export default JobsLayout;
