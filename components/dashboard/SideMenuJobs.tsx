import React from "react";
import {
  Package2,
  Bell,
  Star,
  Check,
  Package,
  Tag,
  Database,
  Mail,
  Plus,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import Link from "next/link";
import { Label } from "../ui/label";

const SideMenuJobs = ({
  jobLocations,
  organizations,
}: {
  jobLocations: any[];
  organizations: any[];
}) => {
  return (
    <div className="hidden border-r bg-muted/80 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex-1 space-y-6">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Database className="h-4 w-4" />
              Бүх зар
            </Link>
            {/* <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Star className="h-4 w-4" />
              Онцолсон
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                6
              </Badge>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
            >
              <Package className="h-4 w-4" />
              Татгалзсан
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Check className="h-4 w-4" />
              Тэнцсэн
            </Link> */}
          </nav>

          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <div className="flex justify-between">
              <h1 className="text-md font-bold">Байршил</h1>
            </div>

            {organizations.map((organization) => (
              <Link
                key={organization.id}
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-1 text-muted-foreground transition-all hover:text-primary"
              >
                <Tag className="h-3 w-3" />
                {organization.name}
              </Link>
            ))}
          </nav>
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <div className="flex justify-between">
              <h1 className="text-md font-bold">Байршил</h1>
            </div>

            {jobLocations.map((organization) => (
              <Link
                key={organization.id}
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-1 text-muted-foreground transition-all hover:text-primary"
              >
                <Tag className="h-3 w-3" />
                {organization.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideMenuJobs;
