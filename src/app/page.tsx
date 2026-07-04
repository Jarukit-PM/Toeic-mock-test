import { BookOpenCheck, Target, Timer } from "lucide-react";
import { HomePartSections } from "@/components/home-part-sections";
import { part5Sets, part6Sets, part7Sets } from "@/data";

const totalSets = part5Sets.length + part6Sets.length + part7Sets.length;

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:py-12">
      <section className="mb-10 rounded-2xl border bg-gradient-to-br from-primary/5 via-background to-accent/20 p-6 sm:p-8">
        <p className="text-sm font-medium text-primary">6-Day TOEIC Reading Prep</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          ฝึก TOEIC Reading
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          ฝึกทำ Part 5, 6, 7 แยกตาม Part พร้อมชุดข้อสอบจำลองระดับ TOEIC จริง
          มีจับเวลา ดูคะแนน และทบทวนข้อผิด — ไม่ต้องสมัครสมาชิก ใช้ฟรี
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="flex items-start gap-3 rounded-xl border bg-background/80 p-4">
            <BookOpenCheck className="mt-0.5 size-5 text-primary" />
            <div>
              <p className="font-medium">9 ชุดข้อสอบ</p>
              <p className="text-sm text-muted-foreground">
                {totalSets} sets · Part 5 (A/B/C) · Part 6 & 7 (1/2/3)
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border bg-background/80 p-4">
            <Timer className="mt-0.5 size-5 text-primary" />
            <div>
              <p className="font-medium">จับเวลาตามจริง</p>
              <p className="text-sm text-muted-foreground">
                Part 5: 15 นาที/30 ข้อ · Part 6: 8 นาที/16 ข้อ
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border bg-background/80 p-4">
            <Target className="mt-0.5 size-5 text-primary" />
            <div>
              <p className="font-medium">ทบทวนข้อผิด</p>
              <p className="text-sm text-muted-foreground">
                ดูเฉลยและคำอธิบายหลังส่งคำตอบ
              </p>
            </div>
          </div>
        </div>
      </section>

      <HomePartSections />
    </div>
  );
}
