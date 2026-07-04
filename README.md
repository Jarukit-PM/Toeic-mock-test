# TOEIC Reading Practice

Free TOEIC Reading practice web app for **Part 5**, **Part 6**, and **Part 7**. Organized by part with multiple practice sets at real TOEIC difficulty — no login, no database.

ฝึกทำข้อสอบ TOEIC ส่วน Reading ฟรี แยกตาม Part มีจับเวลา ดูคะแนน และทบทวนข้อผิด

## Features

- **9 practice sets** organized by Part (not mixed)
- **Part 5**: Set A, B, C — 30 questions each (full Part 5 length)
- **Part 6**: Set 1, 2, 3 — 16 questions each (4 passages × 4 blanks)
- **Part 7**: Set 1, 2, 3 — 20–22 questions each (single/double/triple passages)
- Countdown timer scaled to TOEIC ratios (15 min/30 for P5, 8 min/16 for P6, ~1 min/question for P7)
- Score summary + review wrong answers with explanations
- Progress saved in browser localStorage (best score, attempts)
- Mobile-friendly UI (Thai + English labels)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home — Part 5, 6, 7 sections with set cards |
| `/part/[partNumber]` | Part overview (e.g. `/part/5`) |
| `/part/[partNumber]/[setId]` | Take the test (timer + submit) |
| `/part/[partNumber]/[setId]/results` | Score + answer review |

### Set IDs

| Part | Set IDs | Questions |
|------|---------|-----------|
| Part 5 | `set-a`, `set-b`, `set-c` | 30 each |
| Part 6 | `set-1`, `set-2`, `set-3` | 16 each |
| Part 7 | `set-1`, `set-2`, `set-3` | 20, 20, 22 |

## Data Structure

Content lives under `src/data/parts/`:

```
src/data/parts/
├── index.ts          # Exports + getters
├── part5/
│   ├── set-a.ts      # Office & Workplace (beginner)
│   ├── set-b.ts      # Business & Finance (intermediate)
│   └── set-c.ts      # Advanced Grammar (advanced)
├── part6/
│   ├── set-1.ts      # Workplace Notices
│   ├── set-2.ts      # Corporate Communications
│   └── set-3.ts      # Policy & Reports
└── part7/
    ├── set-1.ts      # Office Communications
    ├── set-2.ts      # Business & Travel
    └── set-3.ts      # Corporate & Policy
```

### Adding a new set

1. Create a file matching `Part5Set`, `Part6Set`, or `Part7Set` in `src/types/toeic.ts`
2. Import and add to the array in `src/data/parts/index.ts`
3. Regenerate with `node scripts/generate-parts.mjs` if using the generator script

### Timer scaling

Time limits are calculated from question count using official TOEIC ratios:

- Part 5: 15 min / 30 questions
- Part 6: 8 min / 16 questions
- Part 7: 54 min / 54 questions (~1 min per question)

## Content Sources

Questions are **original TOEIC-style adaptations** written for business English practice, inspired by common TOEIC formats (incomplete sentences, text completion, reading comprehension). Style references include standard TOEIC prep patterns from sites like esl-lounge.com and toeic-train.com.

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- Static TS data (no database)

## Project Structure

```
src/
├── app/
│   ├── page.tsx                          # Home
│   └── part/[partNumber]/
│       ├── page.tsx                      # Part overview
│       └── [setId]/
│           ├── page.tsx                  # Exam
│           └── results/page.tsx          # Results
├── components/             # UI + exam components
├── data/
│   ├── index.ts            # Data accessors
│   └── parts/              # Part practice sets
├── hooks/
├── lib/                    # Utils, storage, scoring
└── types/                  # TypeScript types
```
