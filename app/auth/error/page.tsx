import { AlertCircle } from "lucide-react";
import Link from "next/link";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertDestructive() {
  return (
    <div>
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Алдаа</AlertTitle>
        <AlertDescription>
          Уучлаарай, Алдаа гарлаа.{" "}
          <Link href="/auth/login" className="underline">
            Энд дарж
          </Link>{" "}
          дахин оролдоно уу.
        </AlertDescription>
      </Alert>
    </div>
  );
}
