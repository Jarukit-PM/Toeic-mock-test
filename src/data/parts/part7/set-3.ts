import type { Part7Set } from "@/types/toeic";

export const part7Set3: Part7Set = {
  id: "set-3",
  part: 7,
  title: "Set 3 — Corporate & Policy",
  titleTh: "ชุดที่ 3 — องค์กรและนโยบาย",
  description: "Complex passages including triple-passage sets.",
  descriptionTh: "บทความซับซ้อนรวมชุดสามเรื่อง",
  difficulty: "advanced",
  groups: [
    {
      id: "p7-3-group-1",
      layout: "single",
      passages: [
        {
          id: "p7-3-p1",
          title: "Email — Policy Update",
          type: "email",
          content: [
            "From: HR Department <hr@meridian.com>",
            "To: All Staff",
            "Subject: Updated Dress Code Policy",
            "",
            "Effective September 1, business casual attire is required Monday through Thursday. Casual dress is permitted on Fridays.",
            "Jeans are acceptable on Fridays only if they are neat and free of rips. Athletic wear and flip-flops are never permitted.",
            "Questions? Contact HR at extension 300.",
          ],
        }
      ],
      questions: [
        {
          id: "p7-3-q01",
          number: 1,
          prompt: "When does the new policy take effect?",
          options: ["August 1", "September 1", "October 1", "January 1"],
          correctAnswer: "B",
          explanation: "Effective September 1.",
        },
        {
          id: "p7-3-q02",
          number: 2,
          prompt: "What attire is required Monday through Thursday?",
          options: ["Formal business", "Business casual", "Casual", "Uniforms"],
          correctAnswer: "B",
          explanation: "Business casual.",
        },
        {
          id: "p7-3-q03",
          number: 3,
          prompt: "When are jeans acceptable?",
          options: ["Every day", "Monday through Thursday", "Fridays only", "Never"],
          correctAnswer: "C",
          explanation: "Fridays only.",
        }
      ],
    },
    {
      id: "p7-3-group-2",
      layout: "double",
      passages: [
        {
          id: "p7-3-p2a",
          title: "Article — Company Milestone",
          type: "article",
          content: [
            "Meridian Technologies celebrated its 25th anniversary on October 5 with a gala event attended by over 500 employees, partners, and community leaders.",
            "CEO Maria Gonzalez highlighted the company's growth from a three-person startup to a global enterprise with offices in 12 countries.",
          ],
        },
        {
          id: "p7-3-p2b",
          title: "Press Release — New Product",
          type: "notice",
          content: [
            "Meridian Technologies Launches NexGen Platform",
            "The NexGen platform integrates cloud computing, AI analytics, and cybersecurity into a single enterprise solution.",
            "Early adopters report a 40% reduction in IT management costs. General availability begins January 2027.",
          ],
        }
      ],
      questions: [
        {
          id: "p7-3-q04",
          number: 4,
          prompt: "How long has Meridian Technologies been in business?",
          options: ["10 years", "15 years", "20 years", "25 years"],
          correctAnswer: "D",
          explanation: "25th anniversary.",
        },
        {
          id: "p7-3-q05",
          number: 5,
          prompt: "How many countries have Meridian offices?",
          options: ["5", "8", "12", "20"],
          correctAnswer: "C",
          explanation: "Offices in 12 countries.",
        },
        {
          id: "p7-3-q06",
          number: 6,
          prompt: "What does the NexGen platform integrate?",
          options: ["Only cloud computing", "Cloud, AI, and cybersecurity", "Only cybersecurity", "Hardware and software"],
          correctAnswer: "B",
          explanation: "Cloud, AI analytics, cybersecurity.",
        },
        {
          id: "p7-3-q07",
          number: 7,
          prompt: "What benefit do early adopters report?",
          options: ["Faster hiring", "40% reduction in IT costs", "Increased sales", "Better customer reviews"],
          correctAnswer: "B",
          explanation: "40% reduction in IT management costs.",
        }
      ],
    },
    {
      id: "p7-3-group-3",
      layout: "single",
      passages: [
        {
          id: "p7-3-p3",
          title: "Memo — Security Protocol",
          type: "memo",
          content: [
            "SECURITY UPDATE — All Employees",
            "Recent phishing attempts targeting our organization have increased. Do not click links in unsolicited emails.",
            "If you receive a suspicious message, forward it to security@meridian.com and delete the original.",
            "Mandatory cybersecurity training must be completed by all staff by November 30. Access the training module on the intranet.",
          ],
        }
      ],
      questions: [
        {
          id: "p7-3-q08",
          number: 8,
          prompt: "What recent threat is mentioned?",
          options: ["Physical break-ins", "Phishing attempts", "Power outages", "Software bugs"],
          correctAnswer: "B",
          explanation: "Phishing attempts.",
        },
        {
          id: "p7-3-q09",
          number: 9,
          prompt: "What should employees do with suspicious emails?",
          options: ["Reply to the sender", "Forward to security and delete", "Print and file them", "Ignore them completely"],
          correctAnswer: "B",
          explanation: "Forward to security@meridian.com and delete.",
        },
        {
          id: "p7-3-q10",
          number: 10,
          prompt: "By when must cybersecurity training be completed?",
          options: ["October 31", "November 15", "November 30", "December 31"],
          correctAnswer: "C",
          explanation: "By November 30.",
        }
      ],
    },
    {
      id: "p7-3-group-4",
      layout: "triple",
      passages: [
        {
          id: "p7-3-p4a",
          title: "Email — Internship Program",
          type: "email",
          content: [
            "From: Talent Acquisition <talent@meridian.com>",
            "To: Department Managers",
            "Subject: Summer Internship Program 2027",
            "We are accepting applications for our summer internship program. Each department may host up to 3 interns from June through August.",
            "Please submit your intern requirements and project descriptions by February 15.",
          ],
        },
        {
          id: "p7-3-p4b",
          title: "Article — Internship Benefits",
          type: "article",
          content: [
            "Meridian's internship program has been ranked among the top 10 in the technology sector for three consecutive years.",
            "Interns receive mentorship from senior staff, hands-on project experience, and a competitive stipend. Top performers are often offered full-time positions.",
          ],
        },
        {
          id: "p7-3-p4c",
          title: "Application Guidelines",
          type: "notice",
          content: [
            "Internship Application Guidelines",
            "Applicants must be enrolled in a bachelor's or master's program. GPA of 3.0 or higher required.",
            "Applications are accepted through the careers portal from January 1 to March 1. Interviews will be conducted in March and April.",
          ],
        }
      ],
      questions: [
        {
          id: "p7-3-q11",
          number: 11,
          prompt: "How many interns can each department host?",
          options: ["1", "2", "3", "5"],
          correctAnswer: "C",
          explanation: "Up to 3 interns.",
        },
        {
          id: "p7-3-q12",
          number: 12,
          prompt: "When is the deadline for managers to submit requirements?",
          options: ["January 15", "February 15", "March 1", "March 15"],
          correctAnswer: "B",
          explanation: "By February 15.",
        },
        {
          id: "p7-3-q13",
          number: 13,
          prompt: "What GPA is required for applicants?",
          options: ["2.5", "3.0", "3.5", "4.0"],
          correctAnswer: "B",
          explanation: "GPA of 3.0 or higher.",
        },
        {
          id: "p7-3-q14",
          number: 14,
          prompt: "What may top-performing interns receive?",
          options: ["A scholarship", "A full-time job offer", "Free tuition", "A company car"],
          correctAnswer: "B",
          explanation: "Often offered full-time positions.",
        },
        {
          id: "p7-3-q15",
          number: 15,
          prompt: "When are applications accepted?",
          options: ["December 1 – January 1", "January 1 – March 1", "March 1 – April 1", "Year-round"],
          correctAnswer: "B",
          explanation: "January 1 to March 1.",
        }
      ],
    },
    {
      id: "p7-3-group-5",
      layout: "single",
      passages: [
        {
          id: "p7-3-p5",
          title: "Advertisement — Wellness Program",
          type: "advertisement",
          content: [
            "Meridian Wellness Program — Join Today!",
            "",
            "Free gym membership | Nutrition counseling | Mental health resources | Flu shots on-site",
            "Open enrollment: November 1–15. Visit the wellness portal or stop by the HR office on the 2nd floor.",
            "Questions? Email wellness@meridian.com.",
          ],
        }
      ],
      questions: [
        {
          id: "p7-3-q16",
          number: 16,
          prompt: "Which benefit is NOT mentioned?",
          options: ["Gym membership", "Dental insurance", "Nutrition counseling", "Flu shots"],
          correctAnswer: "B",
          explanation: "Dental insurance not mentioned.",
        },
        {
          id: "p7-3-q17",
          number: 17,
          prompt: "When is open enrollment?",
          options: ["October 1–15", "November 1–15", "December 1–15", "January 1–15"],
          correctAnswer: "B",
          explanation: "November 1–15.",
        },
        {
          id: "p7-3-q18",
          number: 18,
          prompt: "Where can employees enroll?",
          options: ["The gym", "The wellness portal or HR office", "The cafeteria", "Online only"],
          correctAnswer: "B",
          explanation: "Wellness portal or HR office.",
        }
      ],
    },
    {
      id: "p7-3-group-6",
      layout: "double",
      passages: [
        {
          id: "p7-3-p6a",
          title: "Email — Client Visit",
          type: "email",
          content: [
            "From: Account Manager <accounts@meridian.com>",
            "To: Reception Team",
            "Subject: VIP Client Visit — November 20",
            "Our key client, Horizon Industries, will visit headquarters on November 20. CEO Robert Hayes and three executives will arrive at 10:00 a.m.",
            "Please prepare Conference Room A and arrange catering for lunch. Parking passes are needed for their vehicles.",
          ],
        },
        {
          id: "p7-3-p6b",
          title: "Client Profile — Horizon Industries",
          type: "article",
          content: [
            "Horizon Industries is Meridian's largest client, accounting for 18% of annual revenue. The partnership began in 2019.",
            "Horizon specializes in renewable energy solutions and has expanded into 8 international markets since 2020.",
          ],
        }
      ],
      questions: [
        {
          id: "p7-3-q19",
          number: 19,
          prompt: "When is the client visit?",
          options: ["November 10", "November 15", "November 20", "November 25"],
          correctAnswer: "C",
          explanation: "November 20.",
        },
        {
          id: "p7-3-q20",
          number: 20,
          prompt: "How many people from Horizon will visit?",
          options: ["2", "3", "4", "5"],
          correctAnswer: "C",
          explanation: "CEO + 3 executives = 4.",
        },
        {
          id: "p7-3-q21",
          number: 21,
          prompt: "What percentage of Meridian's revenue comes from Horizon?",
          options: ["8%", "12%", "18%", "25%"],
          correctAnswer: "C",
          explanation: "18% of annual revenue.",
        },
        {
          id: "p7-3-q22",
          number: 22,
          prompt: "What industry is Horizon in?",
          options: ["Technology", "Renewable energy", "Healthcare", "Finance"],
          correctAnswer: "B",
          explanation: "Renewable energy solutions.",
        }
      ],
    }
  ],
};
