/** FAQ content. An answer is plain text, with links where the original copy has them. */
export type FaqPart = string | { href: string; label: string };

export interface FaqItem {
  question: string;
  answer: FaqPart[];
}

export const HOME_FAQ: FaqItem[] = [
  {
    question: "How quickly can your engineers start?",
    answer: [
      "Within weeks. Tell us your stack and the seniority you need, we match candidates, you interview them, and the engineers you choose join your team.",
    ],
  },
  {
    question: "Do I get to interview the engineers?",
    answer: [
      "Yes. You interview every candidate and decide who joins. Nobody starts on your project without your approval.",
    ],
  },
  {
    question: "What does it cost to get started?",
    answer: [
      "There’s no recruitment fee, and engineers start with a risk-free trial. Projects are priced as a fixed price or as time and materials.",
    ],
  },
  {
    question: "Who owns the code and the IP?",
    answer: [
      "You do. Code, IP, documentation and infrastructure accounts are yours from day one, and it’s written into the contract.",
    ],
  },
  {
    question: "Can you take on a whole project, not just engineers?",
    answer: [
      "Yes. Our architects, QA and delivery leads scope it, build it, ship it and support it after launch, with one named delivery lead accountable end to end and a committed delivery date.",
    ],
  },
  {
    question: "Can we change how we work together later?",
    answer: [
      "Yes. Most long-term clients combine models, and you can switch between them without renegotiating from scratch.",
    ],
  },
];

export const SERVICES_FAQ: FaqItem[] = [
  {
    question: "Is outstaffing your main business, or do you do full projects too?",
    answer: ["Both. Most start with engineers and grow."],
  },
  {
    question: "Can I start with one engineer and expand later?",
    answer: ["Yes. We recommend it."],
  },
  {
    question: "We’re not sure which services we need. Where do we start?",
    answer: ["A free discovery call."],
  },
  {
    question: "Do you subcontract any of this?",
    answer: ["No. Our own team delivers."],
  },
  {
    question: "What’s the smallest engagement you take on?",
    answer: ["One engineer, or a three-month project."],
  },
  {
    question: "How do you price work?",
    answer: [
      "Monthly, fixed or time and materials. See ",
      {
        href: "/pricing",
        label: "pricing",
      },
      ".",
    ],
  },
  {
    question: "Who owns the code and the intellectual property?",
    answer: ["You do, from the first commit."],
  },
  {
    question: "Can you work with our existing in-house team?",
    answer: ["Yes. That’s most of our work."],
  },
  {
    question: "What happens if we need to pause or stop?",
    answer: ["You keep everything. No lock-in."],
  },
  {
    question: "How quickly can you start?",
    answer: [
      "Engineers: matched CVs in two business days, working in two weeks. Project teams in 2–4 weeks.",
    ],
  },
];

export const INDUSTRIES_FAQ: FaqItem[] = [
  {
    question: "How much industry experience do you need before starting?",
    answer: ["One to two weeks of discovery."],
  },
  {
    question: "Can you sign industry-specific compliance agreements?",
    answer: [
      "Yes: NDAs, BAAs and GDPR agreements. See ",
      {
        href: "/security-compliance",
        label: "security and compliance",
      },
      ".",
    ],
  },
  {
    question: "Do you have engineers who’ve worked in my sector before?",
    answer: ["Often. Ask and we’ll say honestly."],
  },
  {
    question: "Will you work with our existing industry-specific systems?",
    answer: ["Yes. That’s routine for us."],
  },
];

export const CAREERS_FAQ: FaqItem[] = [
  {
    question: "Is remote work genuinely available, or is it hybrid in practice?",
    answer: [
      "Yes. Remote roles are fully remote; hybrid teams meet in our Tbilisi office two days a week.",
    ],
  },
  {
    question: "Do you publish salary ranges?",
    answer: ["Yes. We share the range in the first call, before any interview."],
  },
  {
    question: "What does the technical interview involve?",
    answer: [
      "A 60-minute talk with two senior engineers about real problems you have solved. No live coding, and AI tools are fine.",
    ],
  },
  {
    question: "Which technologies would I work with?",
    answer: [
      "See ",
      {
        href: "/technologies",
        label: "our stack",
      },
      ".",
    ],
  },
  {
    question: "Do engineers talk to clients directly?",
    answer: ["Yes, it’s part of the role."],
  },
  {
    question: "How often do people change projects?",
    answer: ["Every 12 to 18 months on average, and you can ask to move sooner."],
  },
  {
    question: "Do you sponsor relocation or visas?",
    answer: [
      "Yes, for Tbilisi: visa support and a relocation package for senior roles.",
    ],
  },
];
