import Link from "next/link";
import { BookOpen } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-primary">
          <BookOpen className="size-5" />
          <span>TOEIC Reading</span>
        </Link>
        <p className="hidden text-sm text-muted-foreground sm:block">
          ฝึกอ่าน TOEIC · Part 5–7
        </p>
      </div>
    </header>
  );
}
