#!/usr/bin/env node
/**
 * Generates Part 5/6/7 practice set TypeScript files.
 * Run: node scripts/generate-parts.mjs
 */
import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "src", "data", "parts");

function ensureDir(path) {
  mkdirSync(path, { recursive: true });
}

function writeSet(dir, filename, content) {
  ensureDir(dir);
  writeFileSync(join(dir, filename), content, "utf8");
  console.log(`Wrote ${join(dir, filename)}`);
}

function q(id, num, sentence, options, correct, explanation) {
  return { id, number: num, sentence, options, correctAnswer: correct, explanation };
}

// ─── PART 5 SET A — Office & Workplace (30) ───────────────────────────────
const p5a = [
  q("p5a-q01", 1, "The marketing department will ___ a new advertising campaign next quarter.", ["launch", "launches", "launched", "launching"], "A", "After 'will', use the base verb form."),
  q("p5a-q02", 2, "All employees are required ___ their identification badges at all times.", ["wear", "wearing", "to wear", "wore"], "C", "'Required to + verb' is the correct structure."),
  q("p5a-q03", 3, "Ms. Tanaka's quarterly report was ___ comprehensive than the previous one.", ["most", "more", "very", "much"], "B", "Comparative form is needed before 'than'."),
  q("p5a-q04", 4, "Please submit your travel expense forms ___ Friday at the latest.", ["during", "by", "since", "from"], "B", "'By' indicates a deadline."),
  q("p5a-q05", 5, "The conference room on the third floor is ___ available until 4 p.m.", ["no", "not", "none", "never"], "B", "'Not' negates the adjective 'available'."),
  q("p5a-q06", 6, "Mr. Harrison has worked in the accounting division ___ fifteen years.", ["for", "since", "during", "while"], "A", "'For' is used with a period of time."),
  q("p5a-q07", 7, "The delivery arrived later ___ expected because of traffic congestion.", ["than", "then", "that", "as"], "A", "Comparative 'later than' is correct."),
  q("p5a-q08", 8, "Neither the supervisor ___ the assistant manager was present at the meeting.", ["or", "nor", "and", "but"], "B", "'Neither...nor' is a paired conjunction."),
  q("p5a-q09", 9, "The updated employee handbook is ___ on the company intranet.", ["locate", "located", "location", "locating"], "B", "Passive voice: 'is located'."),
  q("p5a-q10", 10, "We appreciate your prompt ___ to our customer satisfaction survey.", ["respond", "responds", "response", "responsive"], "C", "A noun is needed after the adjective 'prompt'."),
  q("p5a-q11", 11, "The factory has increased its production capacity ___ twenty percent this year.", ["at", "by", "for", "with"], "B", "'Increased by' indicates the amount of change."),
  q("p5a-q12", 12, "Before the audit begins, all financial records must be thoroughly ___.", ["review", "reviewed", "reviewing", "reviews"], "B", "Passive: records must be reviewed."),
  q("p5a-q13", 13, "The new software will be installed ___ all workstations by next Monday.", ["in", "on", "at", "to"], "B", "'On' is used with workstations/computers."),
  q("p5a-q14", 14, "Ms. Rivera is responsible ___ coordinating the annual trade show.", ["of", "for", "to", "with"], "B", "'Responsible for' is the correct collocation."),
  q("p5a-q15", 15, "The board of directors has decided to ___ the merger proposal.", ["approval", "approve", "approved", "approving"], "B", "After 'to', use the base verb."),
  q("p5a-q16", 16, "Customer complaints have decreased significantly ___ the new policy was implemented.", ["when", "while", "since", "during"], "C", "'Since' introduces a point in time from which something has continued."),
  q("p5a-q17", 17, "The seminar on workplace safety is open to ___ interested employees.", ["every", "all", "each", "much"], "B", "'All interested employees' is grammatically correct."),
  q("p5a-q18", 18, "Please make sure the report is ___ to the regional manager by noon.", ["submit", "submitted", "submitting", "submits"], "B", "Passive: report is submitted."),
  q("p5a-q19", 19, "The company offers excellent benefits ___ its full-time staff.", ["for", "to", "at", "by"], "B", "'Offer benefits to' is the correct preposition."),
  q("p5a-q20", 20, "Due to the holiday, the office will remain ___ on Monday.", ["close", "closed", "closing", "closes"], "B", "Adjective 'closed' describes the office state."),
  q("p5a-q21", 21, "The technician ___ the network issue within two hours.", ["fix", "fixes", "fixed", "fixing"], "C", "Past tense for a completed action."),
  q("p5a-q22", 22, "Applicants must have at least three years of ___ experience in sales.", ["relate", "relation", "related", "relating"], "C", "Adjective 'related' modifies 'experience'."),
  q("p5a-q23", 23, "The warehouse inventory is checked ___ a monthly basis.", ["in", "on", "at", "by"], "B", "'On a monthly basis' is a fixed expression."),
  q("p5a-q24", 24, "Mr. Okada asked ___ the meeting could be rescheduled to Thursday.", ["what", "that", "whether", "which"], "C", "'Whether' introduces an indirect yes/no question."),
  q("p5a-q25", 25, "The presentation was ___ well received by the audience.", ["very", "much", "many", "most"], "A", "'Very' modifies 'well received'."),
  q("p5a-q26", 26, "Employees are encouraged to ___ suggestions for improving workflow.", ["do", "make", "take", "have"], "B", "'Make suggestions' is a common collocation."),
  q("p5a-q27", 27, "The contract will expire at the end of ___.", ["March", "March's", "the March", "a March"], "A", "Month names don't need an article."),
  q("p5a-q28", 28, "All visitors must sign in at the reception desk ___ entering the building.", ["before", "during", "while", "until"], "A", "'Before' indicates the required sequence."),
  q("p5a-q29", 29, "The project deadline has been extended ___ further notice.", ["until", "for", "since", "by"], "A", "'Until further notice' is a fixed phrase."),
  q("p5a-q30", 30, "The quality assurance team conducts regular ___ of production processes.", ["inspect", "inspections", "inspected", "inspecting"], "B", "A noun is needed after 'regular'."),
];

// ─── PART 5 SET B — Business & Finance (30) ───────────────────────────────
const p5b = [
  q("p5b-q01", 1, "The quarterly earnings report will be ___ to shareholders next week.", ["distribute", "distributed", "distributing", "distributes"], "B", "Passive: report will be distributed."),
  q("p5b-q02", 2, "Investors showed great ___ in the company's new product line.", ["interesting", "interested", "interest", "interests"], "C", "'Show interest in' requires a noun."),
  q("p5b-q03", 3, "The budget proposal needs to be ___ by the finance committee.", ["approve", "approval", "approved", "approving"], "C", "Passive: needs to be approved."),
  q("p5b-q04", 4, "Revenue from overseas markets has grown ___ over the past year.", ["steady", "steadily", "steadiness", "steadiest"], "B", "Adverb modifies the verb 'grown'."),
  q("p5b-q05", 5, "The bank charges a fee ___ every international wire transfer.", ["in", "on", "for", "at"], "C", "'Charge a fee for' is correct."),
  q("p5b-q06", 6, "Stock prices fell sharply ___ the announcement of the merger.", ["during", "following", "while", "until"], "B", "'Following' means after the announcement."),
  q("p5b-q07", 7, "The accountant recommended ___ unnecessary expenses immediately.", ["reduce", "reducing", "reduced", "reduction"], "B", "After 'recommended', use gerund or 'that' clause."),
  q("p5b-q08", 8, "Neither the CEO ___ the CFO was available for comment.", ["or", "nor", "and", "but"], "B", "'Neither...nor' pairing."),
  q("p5b-q09", 9, "The loan application must be accompanied ___ financial statements.", ["by", "with", "for", "to"], "A", "'Accompanied by' is the correct collocation."),
  q("p5b-q10", 10, "Profits this quarter exceeded our most ___ projections.", ["optimism", "optimistic", "optimistically", "optimize"], "B", "Adjective modifies 'projections'."),
  q("p5b-q11", 11, "The insurance policy covers damages ___ by natural disasters.", ["cause", "caused", "causing", "causes"], "B", "Past participle in reduced relative clause."),
  q("p5b-q12", 12, "Shareholders will vote ___ the proposed dividend increase.", ["in", "on", "at", "for"], "B", "'Vote on' a proposal."),
  q("p5b-q13", 13, "The exchange rate has remained relatively ___ this month.", ["stable", "stably", "stabilize", "stability"], "A", "Adjective after linking verb 'remained'."),
  q("p5b-q14", 14, "All invoices must be paid within thirty days of ___.", ["receive", "received", "receipt", "receiving"], "C", "'Of receipt' — noun form needed."),
  q("p5b-q15", 15, "The firm specializes ___ providing consulting services to startups.", ["on", "in", "at", "for"], "B", "'Specialize in' is correct."),
  q("p5b-q16", 16, "Tax regulations have become increasingly ___ in recent years.", ["complex", "complexity", "complexly", "complexes"], "A", "Adjective after 'become'."),
  q("p5b-q17", 17, "The audit revealed several ___ in the accounting records.", ["discrepancy", "discrepancies", "discrepant", "discrepantly"], "B", "Plural noun after 'several'."),
  q("p5b-q18", 18, "Interest rates are expected to ___ slightly next quarter.", ["rise", "rises", "rose", "rising"], "A", "Base form after 'expected to'."),
  q("p5b-q19", 19, "The partnership agreement is valid ___ December 31, 2027.", ["since", "until", "during", "for"], "B", "'Valid until' indicates expiration date."),
  q("p5b-q20", 20, "Cash flow improved ___ the company reduced overhead costs.", ["although", "because", "unless", "despite"], "B", "'Because' introduces the reason."),
  q("p5b-q21", 21, "The financial analyst prepared a detailed ___ of market trends.", ["analyze", "analysis", "analytical", "analytically"], "B", "Noun after 'detailed'."),
  q("p5b-q22", 22, "Depreciation expenses are calculated ___ a straight-line method.", ["by", "with", "in", "on"], "A", "'Calculated by' a method."),
  q("p5b-q23", 23, "The board unanimously agreed ___ appoint a new treasurer.", ["for", "to", "on", "with"], "B", "'Agreed to' + verb."),
  q("p5b-q24", 24, "Outstanding debts must be settled ___ the end of the fiscal year.", ["by", "until", "since", "during"], "A", "'By' indicates deadline."),
  q("p5b-q25", 25, "The venture capital firm has expressed strong ___ in the startup.", ["commit", "committed", "commitment", "committing"], "C", "'Expressed commitment' — noun needed."),
  q("p5b-q26", 26, "Currency fluctuations can significantly ___ export profitability.", ["affect", "effect", "effective", "effectively"], "A", "'Affect' is the verb meaning to influence."),
  q("p5b-q27", 27, "The annual report highlights the company's ___ to sustainability.", ["dedicate", "dedicated", "dedication", "dedicating"], "C", "'Commitment/dedication to' — noun form."),
  q("p5b-q28", 28, "Dividends will be paid to shareholders who owned stock ___ the record date.", ["in", "on", "at", "by"], "B", "'On the record date' — specific date."),
  q("p5b-q29", 29, "The restructuring plan aims to ___ operational efficiency.", ["improvement", "improve", "improved", "improving"], "B", "'Aims to' + base verb."),
  q("p5b-q30", 30, "Credit applications are processed within two business days of ___.", ["submit", "submitted", "submission", "submitting"], "C", "'Of submission' — noun after preposition."),
];

// ─── PART 5 SET C — Advanced Grammar & Vocabulary (30) ────────────────────
const p5c = [
  q("p5c-q01", 1, "Had the shipment arrived on time, we ___ the deadline easily.", ["would meet", "would have met", "will meet", "met"], "B", "Third conditional: would have + past participle."),
  q("p5c-q02", 2, "The committee recommended that the policy ___ revised immediately.", ["is", "be", "was", "being"], "B", "Subjunctive: 'recommend that' + base form."),
  q("p5c-q03", 3, "Not only did sales increase, ___ customer satisfaction improved as well.", ["and", "but", "or", "so"], "B", "'Not only...but also' structure."),
  q("p5c-q04", 4, "The merger is contingent ___ regulatory approval.", ["to", "on", "for", "with"], "B", "'Contingent on' is the correct collocation."),
  q("p5c-q05", 5, "Employees found the new system confusing at first, ___ they adapted quickly.", ["because", "yet", "so", "unless"], "B", "'Yet' shows contrast between clauses."),
  q("p5c-q06", 6, "The attorney advised against ___ the contract before review.", ["sign", "signing", "signed", "signs"], "B", "After 'against', use gerund."),
  q("p5c-q07", 7, "Scarcely had the meeting begun ___ the fire alarm sounded.", ["than", "when", "then", "that"], "B", "'Scarcely...when' is the correct pairing."),
  q("p5c-q08", 8, "The proposal was rejected due to ___ funding concerns.", ["it", "its", "it's", "their"], "B", "Possessive 'its' modifies 'concerns'."),
  q("p5c-q09", 9, "All equipment must be calibrated in accordance ___ manufacturer specifications.", ["to", "with", "for", "by"], "B", "'In accordance with' is fixed."),
  q("p5c-q10", 10, "The CEO's decision was met with widespread ___.", ["approve", "approved", "approval", "approving"], "C", "Noun after 'widespread'."),
  q("p5c-q11", 11, "No sooner had the product launched ___ orders began pouring in.", ["than", "when", "then", "that"], "A", "'No sooner...than' pairing."),
  q("p5c-q12", 12, "The warranty covers defects arising ___ normal use of the product.", ["from", "by", "with", "at"], "A", "'Arising from' indicates origin."),
  q("p5c-q13", 13, "It is imperative that all safety protocols ___ followed strictly.", ["are", "be", "were", "being"], "B", "Subjunctive after 'imperative that'."),
  q("p5c-q14", 14, "The negotiations reached an impasse, ___ both parties refused to compromise.", ["because", "as", "since", "for"], "B", "'As' introduces reason (formal)."),
  q("p5c-q15", 15, "The subsidiary operates ___ of the parent company.", ["independent", "independently", "independence", "independents"], "B", "Adverb modifies 'operates'."),
  q("p5c-q16", 16, "Despite ___ significant challenges, the project was completed on schedule.", ["face", "faced", "facing", "faces"], "C", "After 'despite', use gerund/noun."),
  q("p5c-q17", 17, "The patent application is pending ___ the intellectual property office.", ["at", "with", "in", "on"], "B", "'Pending with' the office."),
  q("p5c-q18", 18, "Whichever option you choose, the outcome will be ___.", ["benefit", "beneficial", "beneficially", "benefited"], "B", "Adjective after linking verb."),
  q("p5c-q19", 19, "The delegation was given a comprehensive ___ of the facility.", ["tour", "toured", "touring", "tours"], "A", "Noun after article 'a'."),
  q("p5c-q20", 20, "The software license is non-___, meaning it cannot be transferred.", ["transfer", "transferred", "transferable", "transferring"], "C", "Adjective in compound: non-transferable."),
  q("p5c-q21", 21, "Under no circumstances ___ confidential data be shared externally.", ["should", "shouldn't", "won't", "can't"], "A", "Inverted structure: 'should...be shared'."),
  q("p5c-q22", 22, "The restructuring resulted ___ the elimination of redundant positions.", ["from", "in", "to", "with"], "B", "'Resulted in' means caused."),
  q("p5c-q23", 23, "The board is comprised ___ seven members from diverse backgrounds.", ["of", "by", "with", "from"], "A", "'Comprised of' is correct (or 'comprises')."),
  q("p5c-q24", 24, "Prior to ___ the agreement, both parties conducted due diligence.", ["sign", "signing", "signed", "signs"], "B", "After 'prior to', use gerund."),
  q("p5c-q25", 25, "The compliance officer ensures adherence ___ industry regulations.", ["of", "to", "with", "for"], "B", "'Adherence to' regulations."),
  q("p5c-q26", 26, "The prototype performed ___ than the engineering team had anticipated.", ["good", "well", "better", "best"], "C", "Comparative adverb before 'than'."),
  q("p5c-q27", 27, "Such was the demand for the product that production had to be ___.", ["double", "doubled", "doubling", "doubles"], "B", "Passive: production was doubled."),
  q("p5c-q28", 28, "The arbitrator's ruling is binding ___ all parties involved.", ["to", "on", "for", "with"], "B", "'Binding on' all parties."),
  q("p5c-q29", 29, "Little did they know that the decision would have far-reaching ___.", ["imply", "implied", "implications", "implicating"], "C", "Noun after 'far-reaching'."),
  q("p5c-q30", 30, "The initiative seeks to foster greater collaboration ___ departments.", ["between", "among", "within", "across"], "D", "'Across departments' — spanning multiple departments."),
];

function formatP5Questions(questions) {
  return questions.map((item) => `    {
      id: "${item.id}",
      number: ${item.number},
      sentence: "${item.sentence}",
      options: [${item.options.map((o) => `"${o}"`).join(", ")}],
      correctAnswer: "${item.correctAnswer}",
      explanation: "${item.explanation}",
    }`).join(",\n");
}

function genP5Set(id, meta, questions) {
  return `import type { Part5Set } from "@/types/toeic";

export const ${id.replace(/-/g, "")}: Part5Set = {
  id: "${meta.setId}",
  part: 5,
  title: "${meta.title}",
  titleTh: "${meta.titleTh}",
  description: "${meta.description}",
  descriptionTh: "${meta.descriptionTh}",
  difficulty: "${meta.difficulty}",
  questions: [
${formatP5Questions(questions)}
  ],
};
`;
}

// Part 6 passage generator
function p6q(id, num, options, correct, explanation) {
  return { id, number: num, options, correctAnswer: correct, explanation };
}

const p6Set1Passages = [
  {
    id: "p6-1-passage-1", title: "Office Relocation Notice",
    paragraphs: [
      "Dear Staff Members,",
      "As part of our company expansion, the Human Resources department will be relocating to the fifth floor of the West Tower next month. The move is scheduled to take place over the weekend of March 15–16 to (1) ___ disruption to daily operations.",
      "During the relocation, all HR services will remain available online. Employees who need in-person assistance should visit the temporary service desk on the second floor. The desk will be staffed from 9:00 a.m. to 4:00 p.m. (2) ___ the transition period.",
      "Please (3) ___ your internal directory listings once the move is complete. If you have (4) ___ about benefits enrollment or payroll, contact HR at extension 2200.",
      "Thank you for your cooperation.",
      "Sincerely, Diana Morris, Director of Human Resources",
    ],
    questions: [
      p6q("p6-1-q01", 1, ["minimize", "maximize", "predict", "replace"], "A", "The move is planned to reduce disruption."),
      p6q("p6-1-q02", 2, ["permanently", "temporarily", "rarely", "automatically"], "B", "A temporary desk during transition."),
      p6q("p6-1-q03", 3, ["delete", "update", "ignore", "print"], "B", "Employees should update directory listings."),
      p6q("p6-1-q04", 4, ["complaints", "questions", "resignations", "promotions"], "B", "Contact HR with questions."),
    ],
  },
  {
    id: "p6-1-passage-2", title: "Product Recall Memo",
    paragraphs: [
      "MEMORANDUM",
      "To: All Regional Sales Managers",
      "From: Quality Assurance Department",
      "Date: June 12",
      "Subject: Urgent Product Recall — Model XR-450",
      "We are initiating an immediate recall of Model XR-450 power adapters due to a manufacturing defect that may cause (5) ___ during extended use. All units shipped between April 1 and May 30 are affected.",
      "Sales managers must contact customers who purchased the affected units and arrange for (6) ___ replacements at no charge. A prepaid shipping label will be provided for returning defective units.",
      "Please (7) ___ a report of all affected customers in your region by June 19. For (8) ___ information, refer to the recall guidelines posted on the company intranet.",
    ],
    questions: [
      p6q("p6-1-q05", 5, ["overheating", "overheat", "overheated", "overheats"], "A", "Noun form needed: 'cause overheating'."),
      p6q("p6-1-q06", 6, ["free", "freely", "freedom", "freeing"], "A", "Adjective 'free' modifies 'replacements'."),
      p6q("p6-1-q07", 7, ["submitting", "submit", "submitted", "submits"], "B", "Imperative: please submit a report."),
      p6q("p6-1-q08", 8, ["addition", "additional", "additionally", "add"], "B", "Adjective modifies 'information'."),
    ],
  },
  {
    id: "p6-1-passage-3", title: "Training Workshop Announcement",
    paragraphs: [
      "NOTICE: Professional Development Workshop",
      "The Learning and Development team is pleased to announce a workshop on effective business communication. The session will be held on July 8 from 1:00 p.m. to 4:00 p.m. in Training Room C.",
      "This workshop is designed for employees who (9) ___ interact with clients or external partners. Topics will include email etiquette, presentation skills, and cross-cultural communication.",
      "Seating is limited to 25 participants. To register, visit the training portal and select the July 8 session. Registration closes on July 1 or when all seats are (10) ___.",
      "Participants who complete the workshop will receive a certificate of (11) ___ and may count the session toward their annual professional (12) ___ requirements.",
    ],
    questions: [
      p6q("p6-1-q09", 9, ["frequent", "frequently", "frequency", "frequented"], "B", "Adverb modifies 'interact'."),
      p6q("p6-1-q10", 10, ["filling", "filled", "fill", "fills"], "B", "Passive: seats are filled."),
      p6q("p6-1-q11", 11, ["attend", "attended", "attendance", "attending"], "C", "Noun: certificate of attendance."),
      p6q("p6-1-q12", 12, ["develop", "developed", "development", "developing"], "C", "Noun: professional development requirements."),
    ],
  },
  {
    id: "p6-1-passage-4", title: "Parking Policy Update",
    paragraphs: [
      "To: All Employees",
      "From: Facilities Management",
      "Effective August 1, the company parking policy will be updated to accommodate the growing number of staff vehicles. The east parking lot will be reserved (13) ___ employees who participate in the carpool program.",
      "Carpool participants must display a valid permit on their dashboard. Permits can be obtained from the security desk starting July 25. Employees who do not carpool should use the west lot or the (14) ___ parking garage on Oak Street.",
      "Violators will receive a warning for the first offense and may face (15) ___ penalties for repeated violations. Questions about the new policy can be directed to facilities@company.com.",
      "We appreciate your cooperation in helping us manage parking resources (16) ___.",
    ],
    questions: [
      p6q("p6-1-q13", 13, ["for", "to", "by", "with"], "A", "'Reserved for' employees."),
      p6q("p6-1-q14", 14, ["nearby", "nearly", "near", "nearest"], "A", "Adjective modifies 'parking garage'."),
      p6q("p6-1-q15", 15, ["finance", "financial", "financially", "financed"], "B", "Adjective modifies 'penalties'."),
      p6q("p6-1-q16", 16, ["efficient", "efficiently", "efficiency", "efficiencies"], "B", "Adverb modifies 'manage'."),
    ],
  },
];

// Part 6 Set 2
const p6Set2Passages = [
  {
    id: "p6-2-passage-1", title: "Conference Registration Email",
    paragraphs: [
      "From: events@globaltechsummit.com",
      "To: Registered Attendees",
      "Subject: Final Reminders — Global Tech Summit 2026",
      "Dear Attendee,",
      "The Global Tech Summit will begin on September 14 at the Metro Convention Center. Registration opens at 7:30 a.m. on the first day. Please bring a printed or digital copy of your confirmation email and a valid photo ID.",
      "Lunch will be (1) ___ for all registered participants on both days. Those with (2) ___ dietary needs should update their profile on the event website by September 7.",
      "Shuttle service from the airport will be (3) ___ every hour from 6:00 a.m. to 10:00 p.m. The schedule is (4) ___ on our website under the Transportation tab.",
      "We look forward to seeing you at the summit.",
    ],
    questions: [
      p6q("p6-2-q01", 1, ["provide", "provided", "providing", "provides"], "B", "Passive: lunch will be provided."),
      p6q("p6-2-q02", 2, ["restrict", "restricted", "restricting", "restriction"], "B", "Adjective: restricted dietary needs."),
      p6q("p6-2-q03", 3, ["available", "availability", "availably", "avail"], "A", "Adjective after 'will be'."),
      p6q("p6-2-q04", 4, ["post", "posted", "posting", "posts"], "B", "Passive: schedule is posted."),
    ],
  },
  {
    id: "p6-2-passage-2", title: "New Employee Orientation",
    paragraphs: [
      "Welcome to Apex Industries! Your orientation session is scheduled for Monday, October 6, at 9:00 a.m. in the main auditorium.",
      "During orientation, you will receive your employee badge, complete necessary paperwork, and meet your department (5) ___. A campus tour will follow the morning session.",
      "Please arrive 15 minutes early to allow time for check-in. Business casual attire is (6) ___. Lunch will be served in the employee cafeteria at noon.",
      "If you are unable to attend, contact Human Resources at hr@apexind.com to (7) ___ an alternative date. We are (8) ___ to have you join our team!",
    ],
    questions: [
      p6q("p6-2-q05", 5, ["supervise", "supervisor", "supervisory", "supervising"], "B", "Noun: meet your supervisor."),
      p6q("p6-2-q06", 6, ["recommend", "recommended", "recommending", "recommendation"], "B", "Passive: attire is recommended."),
      p6q("p6-2-q07", 7, ["arrange", "arranged", "arranging", "arrangement"], "A", "Infinitive: to arrange."),
      p6q("p6-2-q08", 8, ["excitement", "excited", "exciting", "excitedly"], "C", "Adjective: exciting to have you."),
    ],
  },
  {
    id: "p6-2-passage-3", title: "Software Upgrade Notice",
    paragraphs: [
      "IT Department Notice",
      "The company will upgrade its email system this weekend. The upgrade will begin Saturday at 11:00 p.m. and is expected to be (9) ___ by Sunday at 6:00 a.m.",
      "During the upgrade, email access will be temporarily unavailable. Please save any important drafts before Friday evening. Mobile email apps may also be (10) ___ during this period.",
      "After the upgrade, you will need to log in with your existing credentials. A new feature allowing larger attachment sizes will be (11) ___ enabled.",
      "If you (12) ___ any issues after the upgrade, contact the IT help desk at extension 5000.",
    ],
    questions: [
      p6q("p6-2-q09", 9, ["complete", "completed", "completing", "completion"], "B", "Passive: expected to be completed."),
      p6q("p6-2-q10", 10, ["affect", "affected", "affecting", "affective"], "B", "Passive: may be affected."),
      p6q("p6-2-q11", 11, ["automatic", "automatically", "automate", "automation"], "B", "Adverb modifies 'enabled'."),
      p6q("p6-2-q12", 12, ["experience", "experienced", "experiencing", "experiences"], "A", "Base verb after 'you will'."),
    ],
  },
  {
    id: "p6-2-passage-4", title: "Health and Safety Bulletin",
    paragraphs: [
      "Workplace Safety Bulletin — November 2026",
      "With winter approaching, the Safety Committee reminds all employees to take precautions against seasonal hazards. Wet floors near entrances should be reported to the facilities team (13) ___.",
      "Emergency evacuation routes have been updated and are posted near all stairwells. Please familiarize yourself with the nearest exit from your workstation. Fire drills will be conducted (14) ___ on the first Wednesday of each month.",
      "Employees who work outdoors must wear appropriate protective gear. High-visibility vests are (15) ___ for warehouse and loading dock personnel.",
      "Your safety is our priority. Report any hazards to your supervisor or the safety hotline (16) ___.",
    ],
    questions: [
      p6q("p6-2-q13", 13, ["immediate", "immediately", "immediacy", "immediateness"], "B", "Adverb modifies 'reported'."),
      p6q("p6-2-q14", 14, ["regular", "regularly", "regularity", "regularize"], "B", "Adverb: conducted regularly."),
      p6q("p6-2-q15", 15, ["require", "required", "requiring", "requirement"], "B", "Passive: are required."),
      p6q("p6-2-q16", 16, ["immediate", "immediately", "immediacy", "immediateness"], "B", "Adverb: report immediately."),
    ],
  },
];

// Part 6 Set 3
const p6Set3Passages = [
  {
    id: "p6-3-passage-1", title: "Vendor Contract Renewal",
    paragraphs: [
      "MEMORANDUM",
      "To: Procurement Team",
      "From: Finance Department",
      "The current contract with Summit Office Supplies expires on December 31. We need to (1) ___ whether to renew or seek alternative vendors.",
      "Summit has consistently met delivery deadlines and offered competitive pricing. However, two other vendors have submitted proposals with (2) ___ rates for bulk orders.",
      "Please review the attached comparison chart and prepare a (3) ___ by November 15. The final (4) ___ will be made by the executive committee at the November 20 meeting.",
    ],
    questions: [
      p6q("p6-3-q01", 1, ["decide", "decided", "deciding", "decision"], "A", "Infinitive: need to decide."),
      p6q("p6-3-q02", 2, ["favor", "favorable", "favorably", "favored"], "B", "Adjective modifies 'rates'."),
      p6q("p6-3-q03", 3, ["recommend", "recommended", "recommendation", "recommending"], "C", "Noun: prepare a recommendation."),
      p6q("p6-3-q04", 4, ["final", "finally", "finalize", "finality"], "A", "Adjective modifies 'decision'."),
    ],
  },
  {
    id: "p6-3-passage-2", title: "Customer Feedback Report",
    paragraphs: [
      "Quarterly Customer Satisfaction Report",
      "Our latest survey received responses from 2,400 customers across all regions. Overall satisfaction increased by 8 percent compared to the previous quarter.",
      "Customers particularly praised our technical support team, noting (5) ___ response times and knowledgeable staff. Product quality ratings remained stable at 4.2 out of 5.",
      "Areas for improvement include shipping speed and website navigation. The marketing team has been tasked with (6) ___ a plan to address these concerns by the end of the quarter.",
      "A detailed breakdown by region is (7) ___ in the appendix. The full report will be (8) ___ at the board meeting on January 8.",
    ],
    questions: [
      p6q("p6-3-q05", 5, ["quick", "quickly", "quickness", "quicken"], "A", "Adjective modifies 'response times'."),
      p6q("p6-3-q06", 6, ["develop", "developing", "developed", "development"], "B", "Gerund after 'tasked with'."),
      p6q("p6-3-q07", 7, ["include", "included", "including", "inclusion"], "B", "Passive: is included."),
      p6q("p6-3-q08", 8, ["present", "presented", "presenting", "presentation"], "B", "Passive: will be presented."),
    ],
  },
  {
    id: "p6-3-passage-3", title: "Remote Work Policy",
    paragraphs: [
      "Updated Remote Work Policy — Effective February 1",
      "Employees may work remotely up to three days per week with manager approval. Remote work days must be scheduled in (9) ___ and entered into the HR system.",
      "Employees working from home are expected to maintain regular business hours and remain (10) ___ during core collaboration times (10:00 a.m. – 3:00 p.m.).",
      "Company equipment issued for remote work remains company property and must be returned upon (11) ___ of employment. IT support is available for remote workers via the help desk portal.",
      "This policy will be reviewed annually and may be updated based on operational (12) ___.",
    ],
    questions: [
      p6q("p6-3-q09", 9, ["advance", "advanced", "advancing", "advancement"], "A", "'In advance' — beforehand."),
      p6q("p6-3-q10", 10, ["access", "accessible", "accessibly", "accessibility"], "B", "Adjective: remain accessible."),
      p6q("p6-3-q11", 11, ["terminate", "terminated", "terminating", "termination"], "D", "Noun: upon termination."),
      p6q("p6-3-q12", 12, ["require", "required", "requiring", "requirements"], "D", "Noun: operational requirements."),
    ],
  },
  {
    id: "p6-3-passage-4", title: "Annual Performance Review",
    paragraphs: [
      "Human Resources Announcement",
      "Annual performance reviews will take place throughout March. Managers should schedule one-on-one meetings with each direct report to discuss achievements, goals, and (13) ___ opportunities.",
      "Employees are encouraged to complete a self-assessment form before their review meeting. The form is (14) ___ on the HR portal under Performance Management.",
      "Review outcomes may affect salary adjustments and promotion (15) ___. Employees who have concerns about their review may request a follow-up discussion with HR.",
      "Please ensure all reviews are completed and documented by March 31. Late submissions may delay (16) ___ processing.",
    ],
    questions: [
      p6q("p6-3-q13", 13, ["develop", "developed", "development", "developing"], "C", "Noun: development opportunities."),
      p6q("p6-3-q14", 14, ["available", "availability", "availably", "avail"], "A", "Adjective: is available."),
      p6q("p6-3-q15", 15, ["eligible", "eligibility", "eligibly", "eligibleness"], "B", "Noun: promotion eligibility."),
      p6q("p6-3-q16", 16, ["compensate", "compensation", "compensated", "compensating"], "B", "Noun: compensation processing."),
    ],
  },
];

function formatP6Passages(passages) {
  return passages.map((p) => `    {
      id: "${p.id}",
      title: "${p.title}",
      paragraphs: [
${p.paragraphs.map((para) => `        "${para.replace(/"/g, '\\"')}",`).join("\n")}
      ],
      questions: [
${p.questions.map((item) => `        {
          id: "${item.id}",
          number: ${item.number},
          options: [${item.options.map((o) => `"${o}"`).join(", ")}],
          correctAnswer: "${item.correctAnswer}",
          explanation: "${item.explanation}",
        }`).join(",\n")}
      ],
    }`).join(",\n");
}

function genP6Set(exportName, meta, passages) {
  return `import type { Part6Set } from "@/types/toeic";

export const ${exportName}: Part6Set = {
  id: "${meta.setId}",
  part: 6,
  title: "${meta.title}",
  titleTh: "${meta.titleTh}",
  description: "${meta.description}",
  descriptionTh: "${meta.descriptionTh}",
  difficulty: "${meta.difficulty}",
  passages: [
${formatP6Passages(passages)}
  ],
};
`;
}

// Part 7 content - abbreviated but comprehensive
function p7q(id, num, prompt, options, correct, explanation) {
  return { id, number: num, prompt, options, correctAnswer: correct, explanation };
}

const p7Set1Groups = [
  {
    id: "p7-1-group-1", layout: "single",
    passages: [{ id: "p7-1-p1", title: "Email — Meeting Reschedule", type: "email", content: [
      "From: James Whitfield <j.whitfield@northline.com>", "To: Product Development Team <dev@northline.com>",
      "Subject: Rescheduled Strategy Meeting", "Date: April 2", "", "Hello Team,",
      "Due to a conflict with the quarterly board review, tomorrow's strategy meeting has been moved to Thursday, April 4, at 10:00 a.m. in Conference Room B.",
      "Please review the attached market analysis before the meeting. If you cannot attend, send your comments to me by Wednesday afternoon.", "", "Regards, James",
    ]}],
    questions: [
      p7q("p7-1-q01", 1, "Why was the meeting rescheduled?", ["The conference room was unavailable", "A board review was scheduled", "Team members requested more time", "Market data was incomplete"], "B", "Conflict with quarterly board review."),
      p7q("p7-1-q02", 2, "When will the meeting take place?", ["April 2 at 10:00 a.m.", "April 3 at 10:00 a.m.", "April 4 at 10:00 a.m.", "April 4 at 2:00 p.m."], "C", "Thursday, April 4, at 10:00 a.m."),
      p7q("p7-1-q03", 3, "What should team members do before the meeting?", ["Submit expense reports", "Review an attachment", "Reserve Conference Room B", "Contact the board"], "B", "Review the attached market analysis."),
      p7q("p7-1-q04", 4, "What should absent team members do?", ["Cancel their travel plans", "Send comments by Wednesday", "Join by video on April 2", "Update the market analysis"], "B", "Send comments by Wednesday afternoon."),
      p7q("p7-1-q05", 5, "Where will the meeting be held?", ["Conference Room A", "Conference Room B", "The board room", "Online only"], "B", "Conference Room B."),
    ],
  },
  {
    id: "p7-1-group-2", layout: "double",
    passages: [
      { id: "p7-1-p2a", title: "Article — Green Commute Week", type: "article", content: [
        "Riverside Tech will host its annual Green Commute Week from May 6 to May 10. The initiative encourages employees to use public transportation, carpool, or bicycle to work.",
        "Participants who log five green commutes will receive a reusable water bottle and a voucher for the cafeteria. Registration opens on the company wellness portal next Monday.",
      ]},
      { id: "p7-1-p2b", title: "Notice — Parking Changes", type: "notice", content: [
        "To support Green Commute Week, half of the east parking lot will be reserved for carpool vehicles displaying a special permit.",
        "Permits can be picked up at the security desk starting May 3. Employees who usually park in the east lot should arrive early or use alternative parking areas listed on the intranet.",
      ]},
    ],
    questions: [
      p7q("p7-1-q06", 6, "What is the purpose of Green Commute Week?", ["To repair office bicycles", "To promote environmentally friendly travel", "To reduce cafeteria prices", "To expand the parking lot"], "B", "Encourages greener commuting."),
      p7q("p7-1-q07", 7, "What reward do participants receive?", ["A parking permit", "A water bottle and cafeteria voucher", "A free bus pass", "An extra vacation day"], "B", "Water bottle and cafeteria voucher."),
      p7q("p7-1-q08", 8, "When can employees obtain carpool permits?", ["Starting May 3", "Starting May 6", "Starting May 10", "After the event ends"], "A", "Starting May 3."),
      p7q("p7-1-q09", 9, "What should east lot parkers do during the event?", ["Cancel their parking subscription", "Arrive early or use alternative parking", "Display a regular employee badge", "Contact the cafeteria"], "B", "Arrive early or use alternatives."),
    ],
  },
  {
    id: "p7-1-group-3", layout: "single",
    passages: [{ id: "p7-1-p3", title: "Advertisement — CloudSync Pro", type: "advertisement", content: [
      "CloudSync Pro — Enterprise File Management", "", "Store, share, and collaborate on documents securely from any device.",
      "Features: Real-time collaboration | 256-bit encryption | 1TB storage per user | 24/7 support",
      "Special Offer: Sign up before June 30 and receive 3 months free on annual plans.",
      "Visit www.cloudsyncpro.com/enterprise or call 1-800-555-0199 for a demo.",
    ]}],
    questions: [
      p7q("p7-1-q10", 10, "What type of product is being advertised?", ["A physical storage device", "A file management service", "A video conferencing tool", "An email platform"], "B", "Enterprise file management."),
      p7q("p7-1-q11", 11, "What is included in the special offer?", ["A free demo", "Three months free on annual plans", "Unlimited storage", "A hardware upgrade"], "B", "3 months free on annual plans."),
      p7q("p7-1-q12", 12, "How much storage does each user receive?", ["100 GB", "500 GB", "1 TB", "Unlimited"], "C", "1TB storage per user."),
      p7q("p7-1-q13", 13, "How can potential customers learn more?", ["By visiting a retail store", "By calling or visiting the website", "By attending a workshop", "By emailing support"], "B", "Website or phone number provided."),
    ],
  },
  {
    id: "p7-1-group-4", layout: "triple",
    passages: [
      { id: "p7-1-p4a", title: "Email — Conference Proposal", type: "email", content: [
        "From: Dr. Elena Vasquez <e.vasquez@university.edu>", "To: Conference Committee <committee@bizforum.org>",
        "Subject: Proposal for Panel Discussion", "", "Dear Committee, I would like to propose a panel on sustainable supply chain management for the October conference. Our research team has published extensively on this topic.",
        "The panel would feature three industry experts and include a Q&A session. Please let me know if you need additional materials.",
      ]},
      { id: "p7-1-p4b", title: "Article — Conference Schedule", type: "article", content: [
        "Business Forum 2026 — October 15-17, Grand Hotel", "Day 1: Keynote and networking reception. Day 2: Panel discussions and workshops. Day 3: Closing remarks and awards.",
        "Confirmed panels include Digital Transformation, Sustainable Supply Chains, and Future of Remote Work.",
      ]},
      { id: "p7-1-p4c", title: "Notice — Registration Deadline", type: "notice", content: [
        "Early bird registration for Business Forum 2026 closes on August 31. Standard registration rates apply after this date.",
        "Group discounts are available for organizations sending five or more attendees. Contact events@bizforum.org for details.",
      ]},
    ],
    questions: [
      p7q("p7-1-q14", 14, "What topic does Dr. Vasquez want to discuss?", ["Digital transformation", "Sustainable supply chains", "Remote work", "Networking strategies"], "B", "Sustainable supply chain management."),
      p7q("p7-1-q15", 15, "When does the conference take place?", ["August 31", "October 15-17", "November 1", "December 15"], "B", "October 15-17."),
      p7q("p7-1-q16", 16, "When does early bird registration end?", ["August 31", "October 15", "October 17", "December 31"], "A", "Closes on August 31."),
      p7q("p7-1-q17", 17, "Who qualifies for a group discount?", ["Students", "Organizations with 5+ attendees", "Early registrants only", "Panel speakers"], "B", "Five or more attendees."),
      p7q("p7-1-q18", 18, "What happens on Day 3 of the conference?", ["Keynote speech", "Panel discussions", "Closing remarks and awards", "Networking reception"], "C", "Closing remarks and awards."),
    ],
  },
  {
    id: "p7-1-group-5", layout: "single",
    passages: [{ id: "p7-1-p5", title: "Memo — Office Supply Order", type: "memo", content: [
      "MEMORANDUM", "To: Department Heads", "From: Administrative Services", "Date: March 10", "Subject: Quarterly Supply Order",
      "Please submit your department's office supply requests by March 20. Use the online ordering form available on the intranet.",
      "Standard delivery time is 5 business days. Rush orders (2-day delivery) are available for an additional fee.",
      "Contact admin-services@company.com with questions.",
    ]}],
    questions: [
      p7q("p7-1-q19", 19, "What are department heads asked to do?", ["Approve budgets", "Submit supply requests", "Attend a meeting", "Review delivery schedules"], "B", "Submit office supply requests."),
      p7q("p7-1-q20", 20, "What is the deadline for requests?", ["March 10", "March 15", "March 20", "March 25"], "C", "By March 20."),
    ],
  },
];

// Part 7 Set 2 - 20 questions
const p7Set2Groups = [
  {
    id: "p7-2-group-1", layout: "single",
    passages: [{ id: "p7-2-p1", title: "Email — Project Deadline Extension", type: "email", content: [
      "From: Sarah Kim <s.kim@innovatecorp.com>", "To: Development Team", "Subject: Extended Deadline for Project Atlas", "",
      "Team, due to unexpected vendor delays, the Project Atlas deadline has been extended from November 15 to November 30.",
      "This extension should allow us to complete integration testing properly. Please update your task schedules accordingly.",
      "Let me know if you foresee any additional issues. — Sarah",
    ]}],
    questions: [
      p7q("p7-2-q01", 1, "Why was the deadline extended?", ["Team members requested more time", "Vendor delays occurred", "Testing was cancelled", "The project was downsized"], "B", "Unexpected vendor delays."),
      p7q("p7-2-q02", 2, "What is the new deadline?", ["November 1", "November 15", "November 30", "December 15"], "C", "Extended to November 30."),
      p7q("p7-2-q03", 3, "What will the extra time be used for?", ["Vendor negotiations", "Integration testing", "Team training", "Budget planning"], "B", "Complete integration testing."),
    ],
  },
  {
    id: "p7-2-group-2", layout: "double",
    passages: [
      { id: "p7-2-p2a", title: "Article — New Branch Opening", type: "article", content: [
        "Pacific Retail Group will open its 50th store in downtown Portland on December 1. The 15,000-square-foot location will feature the company's full product line and a customer service center.",
        "Grand opening celebrations will include live music, product demonstrations, and special discounts of up to 30% on selected items.",
      ]},
      { id: "p7-2-p2b", title: "Job Listing — Store Manager", type: "advertisement", content: [
        "Pacific Retail Group — Now Hiring: Store Manager, Portland Downtown",
        "Requirements: 5+ years retail management experience, bachelor's degree preferred, strong leadership skills.",
        "Benefits: Competitive salary, health insurance, employee discount, career advancement opportunities.",
        "Apply at careers.pacificretail.com by November 15.",
      ]},
    ],
    questions: [
      p7q("p7-2-q04", 4, "When will the new store open?", ["November 15", "December 1", "December 15", "January 1"], "B", "December 1."),
      p7q("p7-2-q05", 5, "What is special about this store location?", ["It is the company's first store", "It is the 50th store", "It is the largest store", "It is an online-only store"], "B", "50th store."),
      p7q("p7-2-q06", 6, "What experience is required for the manager position?", ["2 years", "3 years", "5 years", "10 years"], "C", "5+ years retail management."),
      p7q("p7-2-q07", 7, "What is NOT listed as a benefit?", ["Health insurance", "Employee discount", "Free housing", "Career advancement"], "C", "Free housing not mentioned."),
    ],
  },
  {
    id: "p7-2-group-3", layout: "single",
    passages: [{ id: "p7-2-p3", title: "Notice — Building Maintenance", type: "notice", content: [
      "BUILDING MAINTENANCE NOTICE", "The elevator in the east wing will be out of service from June 10 to June 14 for scheduled maintenance.",
      "During this period, please use the west wing elevator or the stairs. Signs will be posted at all east wing entrances.",
      "We apologize for any inconvenience. For accessibility assistance, contact the front desk at extension 100.",
    ]}],
    questions: [
      p7q("p7-2-q08", 8, "Which elevator will be unavailable?", ["West wing", "East wing", "Both elevators", "The freight elevator"], "B", "East wing elevator."),
      p7q("p7-2-q09", 9, "How long will the maintenance last?", ["2 days", "3 days", "5 days", "7 days"], "C", "June 10 to June 14 = 5 days."),
      p7q("p7-2-q10", 10, "What should people needing accessibility help do?", ["Use the stairs", "Contact the front desk", "Wait until June 15", "Use the parking garage"], "B", "Contact front desk at ext. 100."),
    ],
  },
  {
    id: "p7-2-group-4", layout: "triple",
    passages: [
      { id: "p7-2-p4a", title: "Email — Travel Arrangements", type: "email", content: [
        "From: Travel Desk <travel@globalfirm.com>", "To: Mr. David Chen", "Subject: Your Trip to Singapore — Confirmed",
        "Your flights and hotel have been booked. Departure: July 8, Flight GF302 at 8:45 a.m. Return: July 12, Flight GF315 at 6:30 p.m.",
        "Hotel: Marina Bay Suites, check-in July 8. Your meeting with SingTech Ltd. is scheduled for July 10 at 2:00 p.m.",
      ]},
      { id: "p7-2-p4b", title: "Article — SingTech Partnership", type: "article", content: [
        "Global Firm announced a strategic partnership with SingTech Ltd. to develop AI-powered logistics solutions for the Asia-Pacific market.",
        "The collaboration will combine Global Firm's distribution network with SingTech's machine learning expertise.",
      ]},
      { id: "p7-2-p4c", title: "Itinerary — Singapore Trip", type: "memo", content: [
        "Singapore Business Trip Itinerary — David Chen", "July 8: Arrive, hotel check-in, dinner with local team.",
        "July 9: Office tour and product demo. July 10: Partnership signing ceremony and press conference.",
        "July 11: Free day. July 12: Depart for home.",
      ]},
    ],
    questions: [
      p7q("p7-2-q11", 11, "When does Mr. Chen depart for Singapore?", ["July 8", "July 10", "July 11", "July 12"], "A", "Departure July 8."),
      p7q("p7-2-q12", 12, "What is the purpose of the partnership?", ["Marketing campaigns", "AI-powered logistics", "Employee training", "Office relocation"], "B", "AI-powered logistics solutions."),
      p7q("p7-2-q13", 13, "What happens on July 10?", ["Office tour", "Partnership signing ceremony", "Free day", "Departure"], "B", "Signing ceremony and press conference."),
      p7q("p7-2-q14", 14, "Where will Mr. Chen stay?", ["Airport hotel", "Marina Bay Suites", "SingTech offices", "A conference center"], "B", "Marina Bay Suites."),
      p7q("p7-2-q15", 15, "What does SingTech contribute to the partnership?", ["Distribution network", "Machine learning expertise", "Financial investment", "Office space"], "B", "Machine learning expertise."),
    ],
  },
  {
    id: "p7-2-group-5", layout: "single",
    passages: [{ id: "p7-2-p5", title: "Advertisement — Professional Training", type: "advertisement", content: [
      "Elevate Your Career with ProLearn Academy", "", "Online courses in project management, data analysis, and leadership.",
      "Flexible scheduling — study at your own pace. Certificates recognized by major employers.",
      "Enroll by August 15 and save 20% on all courses. Visit www.prolearnacademy.com.",
    ]}],
    questions: [
      p7q("p7-2-q16", 16, "What type of organization is ProLearn Academy?", ["A recruitment agency", "An online training provider", "A university", "A consulting firm"], "B", "Online courses provider."),
      p7q("p7-2-q17", 17, "What discount is offered?", ["10%", "15%", "20%", "25%"], "C", "Save 20%."),
      p7q("p7-2-q18", 18, "What is a feature of the courses?", ["In-person only", "Flexible scheduling", "Free tuition", "Guaranteed employment"], "B", "Study at your own pace."),
      p7q("p7-2-q19", 19, "When must you enroll to get the discount?", ["July 15", "August 1", "August 15", "September 1"], "C", "By August 15."),
      p7q("p7-2-q20", 20, "What do graduates receive?", ["A job offer", "A certificate", "A laptop", "A travel voucher"], "B", "Certificates recognized by employers."),
    ],
  },
];

// Part 7 Set 3 - 22 questions
const p7Set3Groups = [
  {
    id: "p7-3-group-1", layout: "single",
    passages: [{ id: "p7-3-p1", title: "Email — Policy Update", type: "email", content: [
      "From: HR Department <hr@meridian.com>", "To: All Staff", "Subject: Updated Dress Code Policy", "",
      "Effective September 1, business casual attire is required Monday through Thursday. Casual dress is permitted on Fridays.",
      "Jeans are acceptable on Fridays only if they are neat and free of rips. Athletic wear and flip-flops are never permitted.",
      "Questions? Contact HR at extension 300.",
    ]}],
    questions: [
      p7q("p7-3-q01", 1, "When does the new policy take effect?", ["August 1", "September 1", "October 1", "January 1"], "B", "Effective September 1."),
      p7q("p7-3-q02", 2, "What attire is required Monday through Thursday?", ["Formal business", "Business casual", "Casual", "Uniforms"], "B", "Business casual."),
      p7q("p7-3-q03", 3, "When are jeans acceptable?", ["Every day", "Monday through Thursday", "Fridays only", "Never"], "C", "Fridays only."),
    ],
  },
  {
    id: "p7-3-group-2", layout: "double",
    passages: [
      { id: "p7-3-p2a", title: "Article — Company Milestone", type: "article", content: [
        "Meridian Technologies celebrated its 25th anniversary on October 5 with a gala event attended by over 500 employees, partners, and community leaders.",
        "CEO Maria Gonzalez highlighted the company's growth from a three-person startup to a global enterprise with offices in 12 countries.",
      ]},
      { id: "p7-3-p2b", title: "Press Release — New Product", type: "notice", content: [
        "Meridian Technologies Launches NexGen Platform",
        "The NexGen platform integrates cloud computing, AI analytics, and cybersecurity into a single enterprise solution.",
        "Early adopters report a 40% reduction in IT management costs. General availability begins January 2027.",
      ]},
    ],
    questions: [
      p7q("p7-3-q04", 4, "How long has Meridian Technologies been in business?", ["10 years", "15 years", "20 years", "25 years"], "D", "25th anniversary."),
      p7q("p7-3-q05", 5, "How many countries have Meridian offices?", ["5", "8", "12", "20"], "C", "Offices in 12 countries."),
      p7q("p7-3-q06", 6, "What does the NexGen platform integrate?", ["Only cloud computing", "Cloud, AI, and cybersecurity", "Only cybersecurity", "Hardware and software"], "B", "Cloud, AI analytics, cybersecurity."),
      p7q("p7-3-q07", 7, "What benefit do early adopters report?", ["Faster hiring", "40% reduction in IT costs", "Increased sales", "Better customer reviews"], "B", "40% reduction in IT management costs."),
    ],
  },
  {
    id: "p7-3-group-3", layout: "single",
    passages: [{ id: "p7-3-p3", title: "Memo — Security Protocol", type: "memo", content: [
      "SECURITY UPDATE — All Employees", "Recent phishing attempts targeting our organization have increased. Do not click links in unsolicited emails.",
      "If you receive a suspicious message, forward it to security@meridian.com and delete the original.",
      "Mandatory cybersecurity training must be completed by all staff by November 30. Access the training module on the intranet.",
    ]}],
    questions: [
      p7q("p7-3-q08", 8, "What recent threat is mentioned?", ["Physical break-ins", "Phishing attempts", "Power outages", "Software bugs"], "B", "Phishing attempts."),
      p7q("p7-3-q09", 9, "What should employees do with suspicious emails?", ["Reply to the sender", "Forward to security and delete", "Print and file them", "Ignore them completely"], "B", "Forward to security@meridian.com and delete."),
      p7q("p7-3-q10", 10, "By when must cybersecurity training be completed?", ["October 31", "November 15", "November 30", "December 31"], "C", "By November 30."),
    ],
  },
  {
    id: "p7-3-group-4", layout: "triple",
    passages: [
      { id: "p7-3-p4a", title: "Email — Internship Program", type: "email", content: [
        "From: Talent Acquisition <talent@meridian.com>", "To: Department Managers", "Subject: Summer Internship Program 2027",
        "We are accepting applications for our summer internship program. Each department may host up to 3 interns from June through August.",
        "Please submit your intern requirements and project descriptions by February 15.",
      ]},
      { id: "p7-3-p4b", title: "Article — Internship Benefits", type: "article", content: [
        "Meridian's internship program has been ranked among the top 10 in the technology sector for three consecutive years.",
        "Interns receive mentorship from senior staff, hands-on project experience, and a competitive stipend. Top performers are often offered full-time positions.",
      ]},
      { id: "p7-3-p4c", title: "Application Guidelines", type: "notice", content: [
        "Internship Application Guidelines", "Applicants must be enrolled in a bachelor's or master's program. GPA of 3.0 or higher required.",
        "Applications are accepted through the careers portal from January 1 to March 1. Interviews will be conducted in March and April.",
      ]},
    ],
    questions: [
      p7q("p7-3-q11", 11, "How many interns can each department host?", ["1", "2", "3", "5"], "C", "Up to 3 interns."),
      p7q("p7-3-q12", 12, "When is the deadline for managers to submit requirements?", ["January 15", "February 15", "March 1", "March 15"], "B", "By February 15."),
      p7q("p7-3-q13", 13, "What GPA is required for applicants?", ["2.5", "3.0", "3.5", "4.0"], "B", "GPA of 3.0 or higher."),
      p7q("p7-3-q14", 14, "What may top-performing interns receive?", ["A scholarship", "A full-time job offer", "Free tuition", "A company car"], "B", "Often offered full-time positions."),
      p7q("p7-3-q15", 15, "When are applications accepted?", ["December 1 – January 1", "January 1 – March 1", "March 1 – April 1", "Year-round"], "B", "January 1 to March 1."),
    ],
  },
  {
    id: "p7-3-group-5", layout: "single",
    passages: [{ id: "p7-3-p5", title: "Advertisement — Wellness Program", type: "advertisement", content: [
      "Meridian Wellness Program — Join Today!", "", "Free gym membership | Nutrition counseling | Mental health resources | Flu shots on-site",
      "Open enrollment: November 1–15. Visit the wellness portal or stop by the HR office on the 2nd floor.",
      "Questions? Email wellness@meridian.com.",
    ]}],
    questions: [
      p7q("p7-3-q16", 16, "Which benefit is NOT mentioned?", ["Gym membership", "Dental insurance", "Nutrition counseling", "Flu shots"], "B", "Dental insurance not mentioned."),
      p7q("p7-3-q17", 17, "When is open enrollment?", ["October 1–15", "November 1–15", "December 1–15", "January 1–15"], "B", "November 1–15."),
      p7q("p7-3-q18", 18, "Where can employees enroll?", ["The gym", "The wellness portal or HR office", "The cafeteria", "Online only"], "B", "Wellness portal or HR office."),
    ],
  },
  {
    id: "p7-3-group-6", layout: "double",
    passages: [
      { id: "p7-3-p6a", title: "Email — Client Visit", type: "email", content: [
        "From: Account Manager <accounts@meridian.com>", "To: Reception Team", "Subject: VIP Client Visit — November 20",
        "Our key client, Horizon Industries, will visit headquarters on November 20. CEO Robert Hayes and three executives will arrive at 10:00 a.m.",
        "Please prepare Conference Room A and arrange catering for lunch. Parking passes are needed for their vehicles.",
      ]},
      { id: "p7-3-p6b", title: "Client Profile — Horizon Industries", type: "article", content: [
        "Horizon Industries is Meridian's largest client, accounting for 18% of annual revenue. The partnership began in 2019.",
        "Horizon specializes in renewable energy solutions and has expanded into 8 international markets since 2020.",
      ]},
    ],
    questions: [
      p7q("p7-3-q19", 19, "When is the client visit?", ["November 10", "November 15", "November 20", "November 25"], "C", "November 20."),
      p7q("p7-3-q20", 20, "How many people from Horizon will visit?", ["2", "3", "4", "5"], "C", "CEO + 3 executives = 4."),
      p7q("p7-3-q21", 21, "What percentage of Meridian's revenue comes from Horizon?", ["8%", "12%", "18%", "25%"], "C", "18% of annual revenue."),
      p7q("p7-3-q22", 22, "What industry is Horizon in?", ["Technology", "Renewable energy", "Healthcare", "Finance"], "B", "Renewable energy solutions."),
    ],
  },
];

function formatP7Groups(groups) {
  return groups.map((g) => `    {
      id: "${g.id}",
      layout: "${g.layout}",
      passages: [
${g.passages.map((p) => `        {
          id: "${p.id}",
          title: "${p.title}",
          type: "${p.type}",
          content: [
${p.content.map((line) => `            "${line.replace(/"/g, '\\"')}",`).join("\n")}
          ],
        }`).join(",\n")}
      ],
      questions: [
${g.questions.map((item) => `        {
          id: "${item.id}",
          number: ${item.number},
          prompt: "${item.prompt}",
          options: [${item.options.map((o) => `"${o}"`).join(", ")}],
          correctAnswer: "${item.correctAnswer}",
          explanation: "${item.explanation}",
        }`).join(",\n")}
      ],
    }`).join(",\n");
}

function genP7Set(exportName, meta, groups) {
  return `import type { Part7Set } from "@/types/toeic";

export const ${exportName}: Part7Set = {
  id: "${meta.setId}",
  part: 7,
  title: "${meta.title}",
  titleTh: "${meta.titleTh}",
  description: "${meta.description}",
  descriptionTh: "${meta.descriptionTh}",
  difficulty: "${meta.difficulty}",
  groups: [
${formatP7Groups(groups)}
  ],
};
`;
}

// Generate all files
writeSet(join(ROOT, "part5"), "set-a.ts", genP5Set("part5SetA", {
  setId: "set-a", title: "Set A — Office & Workplace", titleTh: "ชุด A — สำนักงานและที่ทำงาน",
  description: "Grammar and vocabulary in everyday office contexts.", descriptionTh: "ไวยากรณ์และคำศัพท์ในบริบทสำนักงาน",
  difficulty: "beginner",
}, p5a));

writeSet(join(ROOT, "part5"), "set-b.ts", genP5Set("part5SetB", {
  setId: "set-b", title: "Set B — Business & Finance", titleTh: "ชุด B — ธุรกิจและการเงิน",
  description: "Business English grammar and financial vocabulary.", descriptionTh: "ไวยากรณ์ภาษาธุรกิจและคำศัพท์การเงิน",
  difficulty: "intermediate",
}, p5b));

writeSet(join(ROOT, "part5"), "set-c.ts", genP5Set("part5SetC", {
  setId: "set-c", title: "Set C — Advanced Grammar", titleTh: "ชุด C — ไวยากรณ์ขั้นสูง",
  description: "Advanced grammar structures and collocations.", descriptionTh: "โครงสร้างไวยากรณ์ขั้นสูงและคำที่ใช้คู่กัน",
  difficulty: "advanced",
}, p5c));

writeSet(join(ROOT, "part6"), "set-1.ts", genP6Set("part6Set1", {
  setId: "set-1", title: "Set 1 — Workplace Notices", titleTh: "ชุดที่ 1 — ประกาศในที่ทำงาน",
  description: "Emails, memos, and notices with text completion.", descriptionTh: "อีเมล เมโม และประกาศพร้อมเติมคำ",
  difficulty: "beginner",
}, p6Set1Passages));

writeSet(join(ROOT, "part6"), "set-2.ts", genP6Set("part6Set2", {
  setId: "set-2", title: "Set 2 — Corporate Communications", titleTh: "ชุดที่ 2 — การสื่อสารในองค์กร",
  description: "Corporate emails, announcements, and bulletins.", descriptionTh: "อีเมลองค์กร ประกาศ และจดหมายข่าว",
  difficulty: "intermediate",
}, p6Set2Passages));

writeSet(join(ROOT, "part6"), "set-3.ts", genP6Set("part6Set3", {
  setId: "set-3", title: "Set 3 — Policy & Reports", titleTh: "ชุดที่ 3 — นโยบายและรายงาน",
  description: "Policy updates, reports, and formal communications.", descriptionTh: "อัปเดตนโยบาย รายงาน และการสื่อสารทางการ",
  difficulty: "advanced",
}, p6Set3Passages));

writeSet(join(ROOT, "part7"), "set-1.ts", genP7Set("part7Set1", {
  setId: "set-1", title: "Set 1 — Office Communications", titleTh: "ชุดที่ 1 — การสื่อสารในสำนักงาน",
  description: "Emails, articles, and notices with comprehension questions.", descriptionTh: "อีเมล บทความ และประกาศพร้อมคำถามความเข้าใจ",
  difficulty: "beginner",
}, p7Set1Groups));

writeSet(join(ROOT, "part7"), "set-2.ts", genP7Set("part7Set2", {
  setId: "set-2", title: "Set 2 — Business & Travel", titleTh: "ชุดที่ 2 — ธุรกิจและการเดินทาง",
  description: "Business emails, advertisements, and multi-passage sets.", descriptionTh: "อีเมลธุรกิจ โฆษณา และชุดบทความหลายเรื่อง",
  difficulty: "intermediate",
}, p7Set2Groups));

writeSet(join(ROOT, "part7"), "set-3.ts", genP7Set("part7Set3", {
  setId: "set-3", title: "Set 3 — Corporate & Policy", titleTh: "ชุดที่ 3 — องค์กรและนโยบาย",
  description: "Complex passages including triple-passage sets.", descriptionTh: "บทความซับซ้อนรวมชุดสามเรื่อง",
  difficulty: "advanced",
}, p7Set3Groups));

// Index file
const indexContent = `import type { PartNumber, PartPracticeSet, Part5Set, Part6Set, Part7Set } from "@/types/toeic";
import { part5SetA } from "./part5/set-a";
import { part5SetB } from "./part5/set-b";
import { part5SetC } from "./part5/set-c";
import { part6Set1 } from "./part6/set-1";
import { part6Set2 } from "./part6/set-2";
import { part6Set3 } from "./part6/set-3";
import { part7Set1 } from "./part7/set-1";
import { part7Set2 } from "./part7/set-2";
import { part7Set3 } from "./part7/set-3";

export const part5Sets: Part5Set[] = [part5SetA, part5SetB, part5SetC];
export const part6Sets: Part6Set[] = [part6Set1, part6Set2, part6Set3];
export const part7Sets: Part7Set[] = [part7Set1, part7Set2, part7Set3];

export const PART_SETS: Record<PartNumber, PartPracticeSet[]> = {
  5: part5Sets,
  6: part6Sets,
  7: part7Sets,
};

export function getPartSets(part: PartNumber): PartPracticeSet[] {
  return PART_SETS[part];
}

export function getPartSet(part: PartNumber, setId: string): PartPracticeSet | undefined {
  return PART_SETS[part].find((s) => s.id === setId);
}

export function getAllPartSetIds(part: PartNumber): string[] {
  return PART_SETS[part].map((s) => s.id);
}
`;

writeSet(ROOT, "index.ts", indexContent);
console.log("Done! All part sets generated.");
