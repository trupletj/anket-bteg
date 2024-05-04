import React from "react";
import {
  Package2,
  Bell,
  Star,
  Check,
  Package,
  Tag,
  LineChart,
  Mail,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";
import { Label } from "../ui/label";

const SideMenu = () => {
  return (
    <div className="hidden border-r bg-muted/80 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex-1 space-y-6">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              Ирсэн анкет
            </Link>
            <Link
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
            </Link>
          </nav>

          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <h1 className="text-md font-bold">Байршил</h1>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-1 text-muted-foreground transition-all hover:text-primary"
            >
              <Tag className="h-3 w-3" />
              Клиффорд ХХК
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-1 text-muted-foreground transition-all hover:text-primary"
            >
              <Tag className="h-3 w-3" />
              Болдтөмөр ерөө гол ХХК
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-1 text-muted-foreground transition-all hover:text-primary"
            >
              <Tag className="h-3 w-3" />
              Инфинити ХХК
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-1 text-muted-foreground transition-all hover:text-primary"
            >
              <Tag className="h-3 w-3" />
              МТЛ ХХК
            </Link>
          </nav>
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <h1 className="text-md font-bold">Байгууллага</h1>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-1 text-muted-foreground transition-all hover:text-primary"
            >
              <Tag className="h-3 w-3" />
              Сэлнгэ, Ерөө
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
