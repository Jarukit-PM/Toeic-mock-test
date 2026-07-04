import type { Part6Set } from "@/types/toeic";

export const part6Set1: Part6Set = {
  id: "set-1",
  part: 6,
  title: "Set 1 — Workplace Notices",
  titleTh: "ชุดที่ 1 — ประกาศในที่ทำงาน",
  description: "Emails, memos, and notices with text completion.",
  descriptionTh: "อีเมล เมโม และประกาศพร้อมเติมคำ",
  difficulty: "beginner",
  passages: [
    {
      id: "p6-1-passage-1",
      title: "Office Relocation Notice",
      paragraphs: [
        "Dear Staff Members,",
        "As part of our company expansion, the Human Resources department will be relocating to the fifth floor of the West Tower next month. The move is scheduled to take place over the weekend of March 15–16 to (1) ___ disruption to daily operations.",
        "During the relocation, all HR services will remain available online. Employees who need in-person assistance should visit the temporary service desk on the second floor. The desk will be staffed from 9:00 a.m. to 4:00 p.m. (2) ___ the transition period.",
        "Please update your internal directory listings once the move is complete. If you have questions about benefits enrollment or payroll, contact HR at extension 2200.",
        "Thank you for your cooperation.",
        "Sincerely, Diana Morris, Director of Human Resources",
      ],
      questions: [
        {
          id: "p6-1-q01",
          number: 1,
          options: ["minimize", "maximize", "predict", "replace"],
          correctAnswer: "A",
          explanation: "The move is planned to reduce disruption.",
        },
        {
          id: "p6-1-q02",
          number: 2,
          options: ["permanently", "temporarily", "rarely", "automatically"],
          correctAnswer: "B",
          explanation: "A temporary desk during transition.",
        },
        {
          id: "p6-1-q03",
          number: 3,
          options: ["delete", "update", "ignore", "print"],
          correctAnswer: "B",
          explanation: "Employees should update directory listings.",
        },
        {
          id: "p6-1-q04",
          number: 4,
          options: ["complaints", "questions", "resignations", "promotions"],
          correctAnswer: "B",
          explanation: "Contact HR with questions.",
        }
      ],
    },
    {
      id: "p6-1-passage-2",
      title: "Product Recall Memo",
      paragraphs: [
        "MEMORANDUM",
        "To: All Regional Sales Managers",
        "From: Quality Assurance Department",
        "Date: June 12",
        "Subject: Urgent Product Recall — Model XR-450",
        "We are initiating an immediate recall of Model XR-450 power adapters due to a manufacturing defect that may cause (5) ___ during extended use. All units shipped between April 1 and May 30 are affected.",
        "Sales managers must contact customers who purchased the affected units and arrange for (6) ___ replacements at no charge. A prepaid shipping label will be provided for returning defective units.",
        "Please submit a report of all affected customers in your region by June 19. For additional information, refer to the recall guidelines posted on the company intranet.",
      ],
      questions: [
        {
          id: "p6-1-q05",
          number: 5,
          options: ["overheating", "overheat", "overheated", "overheats"],
          correctAnswer: "A",
          explanation: "Noun form needed: 'cause overheating'.",
        },
        {
          id: "p6-1-q06",
          number: 6,
          options: ["free", "freely", "freedom", "freeing"],
          correctAnswer: "A",
          explanation: "Adjective 'free' modifies 'replacements'.",
        },
        {
          id: "p6-1-q07",
          number: 7,
          options: ["submitting", "submit", "submitted", "submits"],
          correctAnswer: "A",
          explanation: "Gerund after preposition 'for' implied in 'arrange for'.",
        },
        {
          id: "p6-1-q08",
          number: 8,
          options: ["addition", "additional", "additionally", "add"],
          correctAnswer: "B",
          explanation: "Adjective modifies 'information'.",
        }
      ],
    },
    {
      id: "p6-1-passage-3",
      title: "Training Workshop Announcement",
      paragraphs: [
        "NOTICE: Professional Development Workshop",
        "The Learning and Development team is pleased to announce a workshop on effective business communication. The session will be held on July 8 from 1:00 p.m. to 4:00 p.m. in Training Room C.",
        "This workshop is designed for employees who (9) ___ interact with clients or external partners. Topics will include email etiquette, presentation skills, and cross-cultural communication.",
        "Seating is limited to 25 participants. To register, visit the training portal and select the July 8 session. Registration closes on July 1 or when all seats are (10) ___.",
        "Participants who complete the workshop will receive a certificate of (11) ___ and may count the session toward their annual professional development requirements.",
      ],
      questions: [
        {
          id: "p6-1-q09",
          number: 9,
          options: ["frequent", "frequently", "frequency", "frequented"],
          correctAnswer: "B",
          explanation: "Adverb modifies 'interact'.",
        },
        {
          id: "p6-1-q10",
          number: 10,
          options: ["filling", "filled", "fill", "fills"],
          correctAnswer: "B",
          explanation: "Passive: seats are filled.",
        },
        {
          id: "p6-1-q11",
          number: 11,
          options: ["attend", "attended", "attendance", "attending"],
          correctAnswer: "C",
          explanation: "Noun: certificate of attendance.",
        },
        {
          id: "p6-1-q12",
          number: 12,
          options: ["develop", "developed", "development", "developing"],
          correctAnswer: "C",
          explanation: "Noun: professional development requirements.",
        }
      ],
    },
    {
      id: "p6-1-passage-4",
      title: "Parking Policy Update",
      paragraphs: [
        "To: All Employees",
        "From: Facilities Management",
        "Effective August 1, the company parking policy will be updated to accommodate the growing number of staff vehicles. The east parking lot will be reserved (13) ___ employees who participate in the carpool program.",
        "Carpool participants must display a valid permit on their dashboard. Permits can be obtained from the security desk starting July 25. Employees who do not carpool should use the west lot or the (14) ___ parking garage on Oak Street.",
        "Violators will receive a warning for the first offense and may face (15) ___ penalties for repeated violations. Questions about the new policy can be directed to facilities@company.com.",
        "We appreciate your cooperation in helping us manage parking resources (16) ___.",
      ],
      questions: [
        {
          id: "p6-1-q13",
          number: 13,
          options: ["for", "to", "by", "with"],
          correctAnswer: "A",
          explanation: "'Reserved for' employees.",
        },
        {
          id: "p6-1-q14",
          number: 14,
          options: ["nearby", "nearly", "near", "nearest"],
          correctAnswer: "A",
          explanation: "Adjective modifies 'parking garage'.",
        },
        {
          id: "p6-1-q15",
          number: 15,
          options: ["finance", "financial", "financially", "financed"],
          correctAnswer: "B",
          explanation: "Adjective modifies 'penalties'.",
        },
        {
          id: "p6-1-q16",
          number: 16,
          options: ["efficient", "efficiently", "efficiency", "efficiencies"],
          correctAnswer: "B",
          explanation: "Adverb modifies 'manage'.",
        }
      ],
    }
  ],
};
