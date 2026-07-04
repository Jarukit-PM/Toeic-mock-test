import type { Part7Set } from "@/types/toeic";

export const part7Set2: Part7Set = {
  id: "set-2",
  part: 7,
  title: "Set 2 — Business & Travel",
  titleTh: "ชุดที่ 2 — ธุรกิจและการเดินทาง",
  description: "Business emails, advertisements, and multi-passage sets.",
  descriptionTh: "อีเมลธุรกิจ โฆษณา และชุดบทความหลายเรื่อง",
  difficulty: "intermediate",
  groups: [
    {
      id: "p7-2-group-1",
      layout: "single",
      passages: [
        {
          id: "p7-2-p1",
          title: "Email — Project Deadline Extension",
          type: "email",
          content: [
            "From: Sarah Kim <s.kim@innovatecorp.com>",
            "To: Development Team",
            "Subject: Extended Deadline for Project Atlas",
            "",
            "Team, due to unexpected vendor delays, the Project Atlas deadline has been extended from November 15 to November 30.",
            "This extension should allow us to complete integration testing properly. Please update your task schedules accordingly.",
            "Let me know if you foresee any additional issues. — Sarah",
          ],
        }
      ],
      questions: [
        {
          id: "p7-2-q01",
          number: 1,
          prompt: "Why was the deadline extended?",
          options: ["Team members requested more time", "Vendor delays occurred", "Testing was cancelled", "The project was downsized"],
          correctAnswer: "B",
          explanation: "Unexpected vendor delays.",
        },
        {
          id: "p7-2-q02",
          number: 2,
          prompt: "What is the new deadline?",
          options: ["November 1", "November 15", "November 30", "December 15"],
          correctAnswer: "C",
          explanation: "Extended to November 30.",
        },
        {
          id: "p7-2-q03",
          number: 3,
          prompt: "What will the extra time be used for?",
          options: ["Vendor negotiations", "Integration testing", "Team training", "Budget planning"],
          correctAnswer: "B",
          explanation: "Complete integration testing.",
        }
      ],
    },
    {
      id: "p7-2-group-2",
      layout: "double",
      passages: [
        {
          id: "p7-2-p2a",
          title: "Article — New Branch Opening",
          type: "article",
          content: [
            "Pacific Retail Group will open its 50th store in downtown Portland on December 1. The 15,000-square-foot location will feature the company's full product line and a customer service center.",
            "Grand opening celebrations will include live music, product demonstrations, and special discounts of up to 30% on selected items.",
          ],
        },
        {
          id: "p7-2-p2b",
          title: "Job Listing — Store Manager",
          type: "advertisement",
          content: [
            "Pacific Retail Group — Now Hiring: Store Manager, Portland Downtown",
            "Requirements: 5+ years retail management experience, bachelor's degree preferred, strong leadership skills.",
            "Benefits: Competitive salary, health insurance, employee discount, career advancement opportunities.",
            "Apply at careers.pacificretail.com by November 15.",
          ],
        }
      ],
      questions: [
        {
          id: "p7-2-q04",
          number: 4,
          prompt: "When will the new store open?",
          options: ["November 15", "December 1", "December 15", "January 1"],
          correctAnswer: "B",
          explanation: "December 1.",
        },
        {
          id: "p7-2-q05",
          number: 5,
          prompt: "What is special about this store location?",
          options: ["It is the company's first store", "It is the 50th store", "It is the largest store", "It is an online-only store"],
          correctAnswer: "B",
          explanation: "50th store.",
        },
        {
          id: "p7-2-q06",
          number: 6,
          prompt: "What experience is required for the manager position?",
          options: ["2 years", "3 years", "5 years", "10 years"],
          correctAnswer: "C",
          explanation: "5+ years retail management.",
        },
        {
          id: "p7-2-q07",
          number: 7,
          prompt: "What is NOT listed as a benefit?",
          options: ["Health insurance", "Employee discount", "Free housing", "Career advancement"],
          correctAnswer: "C",
          explanation: "Free housing not mentioned.",
        }
      ],
    },
    {
      id: "p7-2-group-3",
      layout: "single",
      passages: [
        {
          id: "p7-2-p3",
          title: "Notice — Building Maintenance",
          type: "notice",
          content: [
            "BUILDING MAINTENANCE NOTICE",
            "The elevator in the east wing will be out of service from June 10 to June 14 for scheduled maintenance.",
            "During this period, please use the west wing elevator or the stairs. Signs will be posted at all east wing entrances.",
            "We apologize for any inconvenience. For accessibility assistance, contact the front desk at extension 100.",
          ],
        }
      ],
      questions: [
        {
          id: "p7-2-q08",
          number: 8,
          prompt: "Which elevator will be unavailable?",
          options: ["West wing", "East wing", "Both elevators", "The freight elevator"],
          correctAnswer: "B",
          explanation: "East wing elevator.",
        },
        {
          id: "p7-2-q09",
          number: 9,
          prompt: "How long will the maintenance last?",
          options: ["2 days", "3 days", "5 days", "7 days"],
          correctAnswer: "C",
          explanation: "June 10 to June 14 = 5 days.",
        },
        {
          id: "p7-2-q10",
          number: 10,
          prompt: "What should people needing accessibility help do?",
          options: ["Use the stairs", "Contact the front desk", "Wait until June 15", "Use the parking garage"],
          correctAnswer: "B",
          explanation: "Contact front desk at ext. 100.",
        }
      ],
    },
    {
      id: "p7-2-group-4",
      layout: "triple",
      passages: [
        {
          id: "p7-2-p4a",
          title: "Email — Travel Arrangements",
          type: "email",
          content: [
            "From: Travel Desk <travel@globalfirm.com>",
            "To: Mr. David Chen",
            "Subject: Your Trip to Singapore — Confirmed",
            "Your flights and hotel have been booked. Departure: July 8, Flight GF302 at 8:45 a.m. Return: July 12, Flight GF315 at 6:30 p.m.",
            "Hotel: Marina Bay Suites, check-in July 8. Your meeting with SingTech Ltd. is scheduled for July 10 at 2:00 p.m.",
          ],
        },
        {
          id: "p7-2-p4b",
          title: "Article — SingTech Partnership",
          type: "article",
          content: [
            "Global Firm announced a strategic partnership with SingTech Ltd. to develop AI-powered logistics solutions for the Asia-Pacific market.",
            "The collaboration will combine Global Firm's distribution network with SingTech's machine learning expertise.",
          ],
        },
        {
          id: "p7-2-p4c",
          title: "Itinerary — Singapore Trip",
          type: "memo",
          content: [
            "Singapore Business Trip Itinerary — David Chen",
            "July 8: Arrive, hotel check-in, dinner with local team.",
            "July 9: Office tour and product demo. July 10: Partnership signing ceremony and press conference.",
            "July 11: Free day. July 12: Depart for home.",
          ],
        }
      ],
      questions: [
        {
          id: "p7-2-q11",
          number: 11,
          prompt: "When does Mr. Chen depart for Singapore?",
          options: ["July 8", "July 10", "July 11", "July 12"],
          correctAnswer: "A",
          explanation: "Departure July 8.",
        },
        {
          id: "p7-2-q12",
          number: 12,
          prompt: "What is the purpose of the partnership?",
          options: ["Marketing campaigns", "AI-powered logistics", "Employee training", "Office relocation"],
          correctAnswer: "B",
          explanation: "AI-powered logistics solutions.",
        },
        {
          id: "p7-2-q13",
          number: 13,
          prompt: "What happens on July 10?",
          options: ["Office tour", "Partnership signing ceremony", "Free day", "Departure"],
          correctAnswer: "B",
          explanation: "Signing ceremony and press conference.",
        },
        {
          id: "p7-2-q14",
          number: 14,
          prompt: "Where will Mr. Chen stay?",
          options: ["Airport hotel", "Marina Bay Suites", "SingTech offices", "A conference center"],
          correctAnswer: "B",
          explanation: "Marina Bay Suites.",
        },
        {
          id: "p7-2-q15",
          number: 15,
          prompt: "What does SingTech contribute to the partnership?",
          options: ["Distribution network", "Machine learning expertise", "Financial investment", "Office space"],
          correctAnswer: "B",
          explanation: "Machine learning expertise.",
        }
      ],
    },
    {
      id: "p7-2-group-5",
      layout: "single",
      passages: [
        {
          id: "p7-2-p5",
          title: "Advertisement — Professional Training",
          type: "advertisement",
          content: [
            "Elevate Your Career with ProLearn Academy",
            "",
            "Online courses in project management, data analysis, and leadership.",
            "Flexible scheduling — study at your own pace. Certificates recognized by major employers.",
            "Enroll by August 15 and save 20% on all courses. Visit www.prolearnacademy.com.",
          ],
        }
      ],
      questions: [
        {
          id: "p7-2-q16",
          number: 16,
          prompt: "What type of organization is ProLearn Academy?",
          options: ["A recruitment agency", "An online training provider", "A university", "A consulting firm"],
          correctAnswer: "B",
          explanation: "Online courses provider.",
        },
        {
          id: "p7-2-q17",
          number: 17,
          prompt: "What discount is offered?",
          options: ["10%", "15%", "20%", "25%"],
          correctAnswer: "C",
          explanation: "Save 20%.",
        },
        {
          id: "p7-2-q18",
          number: 18,
          prompt: "What is a feature of the courses?",
          options: ["In-person only", "Flexible scheduling", "Free tuition", "Guaranteed employment"],
          correctAnswer: "B",
          explanation: "Study at your own pace.",
        },
        {
          id: "p7-2-q19",
          number: 19,
          prompt: "When must you enroll to get the discount?",
          options: ["July 15", "August 1", "August 15", "September 1"],
          correctAnswer: "C",
          explanation: "By August 15.",
        },
        {
          id: "p7-2-q20",
          number: 20,
          prompt: "What do graduates receive?",
          options: ["A job offer", "A certificate", "A laptop", "A travel voucher"],
          correctAnswer: "B",
          explanation: "Certificates recognized by employers.",
        }
      ],
    }
  ],
};
