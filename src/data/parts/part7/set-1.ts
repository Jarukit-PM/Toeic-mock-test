import type { Part7Set } from "@/types/toeic";

export const part7Set1: Part7Set = {
  id: "set-1",
  part: 7,
  title: "Set 1 — Office Communications",
  titleTh: "ชุดที่ 1 — การสื่อสารในสำนักงาน",
  description: "Emails, articles, and notices with comprehension questions.",
  descriptionTh: "อีเมล บทความ และประกาศพร้อมคำถามความเข้าใจ",
  difficulty: "beginner",
  groups: [
    {
      id: "p7-1-group-1",
      layout: "single",
      passages: [
        {
          id: "p7-1-p1",
          title: "Email — Meeting Reschedule",
          type: "email",
          content: [
            "From: James Whitfield <j.whitfield@northline.com>",
            "To: Product Development Team <dev@northline.com>",
            "Subject: Rescheduled Strategy Meeting",
            "Date: April 2",
            "",
            "Hello Team,",
            "Due to a conflict with the quarterly board review, tomorrow's strategy meeting has been moved to Thursday, April 4, at 10:00 a.m. in Conference Room B.",
            "Please review the attached market analysis before the meeting. If you cannot attend, send your comments to me by Wednesday afternoon.",
            "",
            "Regards, James",
          ],
        }
      ],
      questions: [
        {
          id: "p7-1-q01",
          number: 1,
          prompt: "Why was the meeting rescheduled?",
          options: ["The conference room was unavailable", "A board review was scheduled", "Team members requested more time", "Market data was incomplete"],
          correctAnswer: "B",
          explanation: "Conflict with quarterly board review.",
        },
        {
          id: "p7-1-q02",
          number: 2,
          prompt: "When will the meeting take place?",
          options: ["April 2 at 10:00 a.m.", "April 3 at 10:00 a.m.", "April 4 at 10:00 a.m.", "April 4 at 2:00 p.m."],
          correctAnswer: "C",
          explanation: "Thursday, April 4, at 10:00 a.m.",
        },
        {
          id: "p7-1-q03",
          number: 3,
          prompt: "What should team members do before the meeting?",
          options: ["Submit expense reports", "Review an attachment", "Reserve Conference Room B", "Contact the board"],
          correctAnswer: "B",
          explanation: "Review the attached market analysis.",
        },
        {
          id: "p7-1-q04",
          number: 4,
          prompt: "What should absent team members do?",
          options: ["Cancel their travel plans", "Send comments by Wednesday", "Join by video on April 2", "Update the market analysis"],
          correctAnswer: "B",
          explanation: "Send comments by Wednesday afternoon.",
        },
        {
          id: "p7-1-q05",
          number: 5,
          prompt: "Where will the meeting be held?",
          options: ["Conference Room A", "Conference Room B", "The board room", "Online only"],
          correctAnswer: "B",
          explanation: "Conference Room B.",
        }
      ],
    },
    {
      id: "p7-1-group-2",
      layout: "double",
      passages: [
        {
          id: "p7-1-p2a",
          title: "Article — Green Commute Week",
          type: "article",
          content: [
            "Riverside Tech will host its annual Green Commute Week from May 6 to May 10. The initiative encourages employees to use public transportation, carpool, or bicycle to work.",
            "Participants who log five green commutes will receive a reusable water bottle and a voucher for the cafeteria. Registration opens on the company wellness portal next Monday.",
          ],
        },
        {
          id: "p7-1-p2b",
          title: "Notice — Parking Changes",
          type: "notice",
          content: [
            "To support Green Commute Week, half of the east parking lot will be reserved for carpool vehicles displaying a special permit.",
            "Permits can be picked up at the security desk starting May 3. Employees who usually park in the east lot should arrive early or use alternative parking areas listed on the intranet.",
          ],
        }
      ],
      questions: [
        {
          id: "p7-1-q06",
          number: 6,
          prompt: "What is the purpose of Green Commute Week?",
          options: ["To repair office bicycles", "To promote environmentally friendly travel", "To reduce cafeteria prices", "To expand the parking lot"],
          correctAnswer: "B",
          explanation: "Encourages greener commuting.",
        },
        {
          id: "p7-1-q07",
          number: 7,
          prompt: "What reward do participants receive?",
          options: ["A parking permit", "A water bottle and cafeteria voucher", "A free bus pass", "An extra vacation day"],
          correctAnswer: "B",
          explanation: "Water bottle and cafeteria voucher.",
        },
        {
          id: "p7-1-q08",
          number: 8,
          prompt: "When can employees obtain carpool permits?",
          options: ["Starting May 3", "Starting May 6", "Starting May 10", "After the event ends"],
          correctAnswer: "A",
          explanation: "Starting May 3.",
        },
        {
          id: "p7-1-q09",
          number: 9,
          prompt: "What should east lot parkers do during the event?",
          options: ["Cancel their parking subscription", "Arrive early or use alternative parking", "Display a regular employee badge", "Contact the cafeteria"],
          correctAnswer: "B",
          explanation: "Arrive early or use alternatives.",
        }
      ],
    },
    {
      id: "p7-1-group-3",
      layout: "single",
      passages: [
        {
          id: "p7-1-p3",
          title: "Advertisement — CloudSync Pro",
          type: "advertisement",
          content: [
            "CloudSync Pro — Enterprise File Management",
            "",
            "Store, share, and collaborate on documents securely from any device.",
            "Features: Real-time collaboration | 256-bit encryption | 1TB storage per user | 24/7 support",
            "Special Offer: Sign up before June 30 and receive 3 months free on annual plans.",
            "Visit www.cloudsyncpro.com/enterprise or call 1-800-555-0199 for a demo.",
          ],
        }
      ],
      questions: [
        {
          id: "p7-1-q10",
          number: 10,
          prompt: "What type of product is being advertised?",
          options: ["A physical storage device", "A file management service", "A video conferencing tool", "An email platform"],
          correctAnswer: "B",
          explanation: "Enterprise file management.",
        },
        {
          id: "p7-1-q11",
          number: 11,
          prompt: "What is included in the special offer?",
          options: ["A free demo", "Three months free on annual plans", "Unlimited storage", "A hardware upgrade"],
          correctAnswer: "B",
          explanation: "3 months free on annual plans.",
        },
        {
          id: "p7-1-q12",
          number: 12,
          prompt: "How much storage does each user receive?",
          options: ["100 GB", "500 GB", "1 TB", "Unlimited"],
          correctAnswer: "C",
          explanation: "1TB storage per user.",
        },
        {
          id: "p7-1-q13",
          number: 13,
          prompt: "How can potential customers learn more?",
          options: ["By visiting a retail store", "By calling or visiting the website", "By attending a workshop", "By emailing support"],
          correctAnswer: "B",
          explanation: "Website or phone number provided.",
        }
      ],
    },
    {
      id: "p7-1-group-4",
      layout: "triple",
      passages: [
        {
          id: "p7-1-p4a",
          title: "Email — Conference Proposal",
          type: "email",
          content: [
            "From: Dr. Elena Vasquez <e.vasquez@university.edu>",
            "To: Conference Committee <committee@bizforum.org>",
            "Subject: Proposal for Panel Discussion",
            "",
            "Dear Committee, I would like to propose a panel on sustainable supply chain management for the October conference. Our research team has published extensively on this topic.",
            "The panel would feature three industry experts and include a Q&A session. Please let me know if you need additional materials.",
          ],
        },
        {
          id: "p7-1-p4b",
          title: "Article — Conference Schedule",
          type: "article",
          content: [
            "Business Forum 2026 — October 15-17, Grand Hotel",
            "Day 1: Keynote and networking reception. Day 2: Panel discussions and workshops. Day 3: Closing remarks and awards.",
            "Confirmed panels include Digital Transformation, Sustainable Supply Chains, and Future of Remote Work.",
          ],
        },
        {
          id: "p7-1-p4c",
          title: "Notice — Registration Deadline",
          type: "notice",
          content: [
            "Early bird registration for Business Forum 2026 closes on August 31. Standard registration rates apply after this date.",
            "Group discounts are available for organizations sending five or more attendees. Contact events@bizforum.org for details.",
          ],
        }
      ],
      questions: [
        {
          id: "p7-1-q14",
          number: 14,
          prompt: "What topic does Dr. Vasquez want to discuss?",
          options: ["Digital transformation", "Sustainable supply chains", "Remote work", "Networking strategies"],
          correctAnswer: "B",
          explanation: "Sustainable supply chain management.",
        },
        {
          id: "p7-1-q15",
          number: 15,
          prompt: "When does the conference take place?",
          options: ["August 31", "October 15-17", "November 1", "December 15"],
          correctAnswer: "B",
          explanation: "October 15-17.",
        },
        {
          id: "p7-1-q16",
          number: 16,
          prompt: "When does early bird registration end?",
          options: ["August 31", "October 15", "October 17", "December 31"],
          correctAnswer: "A",
          explanation: "Closes on August 31.",
        },
        {
          id: "p7-1-q17",
          number: 17,
          prompt: "Who qualifies for a group discount?",
          options: ["Students", "Organizations with 5+ attendees", "Early registrants only", "Panel speakers"],
          correctAnswer: "B",
          explanation: "Five or more attendees.",
        },
        {
          id: "p7-1-q18",
          number: 18,
          prompt: "What happens on Day 3 of the conference?",
          options: ["Keynote speech", "Panel discussions", "Closing remarks and awards", "Networking reception"],
          correctAnswer: "C",
          explanation: "Closing remarks and awards.",
        }
      ],
    },
    {
      id: "p7-1-group-5",
      layout: "single",
      passages: [
        {
          id: "p7-1-p5",
          title: "Memo — Office Supply Order",
          type: "memo",
          content: [
            "MEMORANDUM",
            "To: Department Heads",
            "From: Administrative Services",
            "Date: March 10",
            "Subject: Quarterly Supply Order",
            "Please submit your department's office supply requests by March 20. Use the online ordering form available on the intranet.",
            "Standard delivery time is 5 business days. Rush orders (2-day delivery) are available for an additional fee.",
            "Contact admin-services@company.com with questions.",
          ],
        }
      ],
      questions: [
        {
          id: "p7-1-q19",
          number: 19,
          prompt: "What are department heads asked to do?",
          options: ["Approve budgets", "Submit supply requests", "Attend a meeting", "Review delivery schedules"],
          correctAnswer: "B",
          explanation: "Submit office supply requests.",
        },
        {
          id: "p7-1-q20",
          number: 20,
          prompt: "What is the deadline for requests?",
          options: ["March 10", "March 15", "March 20", "March 25"],
          correctAnswer: "C",
          explanation: "By March 20.",
        }
      ],
    }
  ],
};
