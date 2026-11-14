/* The pricing, security and technologies pages: a hero, sections of cards, a banner and an optional FAQ. */
import type { FaqItem } from "@/data/faqs";

export interface InfoCard {
  title: string;
  note?: string;
  text: string;
  list: string[];
}

export interface InfoPageData {
  title: string;
  description: string;
  heading: string;
  sub: string;
  sections: { id: string; title: string; cards: InfoCard[] }[];
  banner: { title: string; text: string; href: string; label: string };
  faq: FaqItem[];
}

export const INFO_PAGES = {
  pricing: {
    title: "Pricing",
    description:
      "Three ways to pay for Linwerk: a monthly rate per engineer, a fixed price, or time and materials. No recruitment fee, risk-free trial.",
    heading: "Pay for the work, not for the hiring",
    sub: "Three pricing models, no recruitment fee, and a risk-free trial for every engineer.",
    sections: [
      {
        id: "models",
        title: "Three ways to price the work",
        cards: [
          {
            title: "Monthly rate",
            note: "Engineers on your team",
            text: "One monthly rate per engineer, set by seniority and stack.",
            list: [
              "No recruitment fee",
              "Risk-free trial",
              "Start with one engineer",
              "Add or remove people as you grow",
            ],
          },
          {
            title: "Fixed price",
            note: "A product, built and shipped",
            text: "One price for an agreed scope, with a committed delivery date.",
            list: [
              "Scope signed before work starts",
              "One named delivery lead",
              "Changes agreed in writing",
              "90-day warranty after launch",
            ],
          },
          {
            title: "Time and materials",
            note: "Scope that will change",
            text: "You pay for the hours worked, reported every sprint.",
            list: [
              "Two-week sprints",
              "A working demo each sprint",
              "Reprioritise at any time",
              "A report of time spent",
            ],
          },
        ],
      },
      {
        id: "included",
        title: "Included in every engagement",
        cards: [
          {
            title: "You own everything",
            text: "Code, IP, documentation and infrastructure accounts are yours from day one, and in writing.",
            list: [],
          },
          {
            title: "No lock-in",
            text: "Pause or stop, and you keep everything delivered. You can switch between models without renegotiating from scratch.",
            list: [],
          },
          {
            title: "A quote in two business days",
            text: "Tell us what you need and you get matched engineers with their rates, or a project plan with its price.",
            list: [],
          },
        ],
      },
    ],
    banner: {
      title: "Need a number?",
      text: "Rates depend on seniority, stack and team size. Tell us what you need and we will quote within two business days.",
      href: "/request",
      label: "Request engineers",
    },
    faq: [
      {
        question: "Is there a recruitment fee?",
        answer: ["No. You pay for the engineers’ work, not for finding them."],
      },
      {
        question: "How does the risk-free trial work?",
        answer: [
          "Each engineer starts with a trial period. The exact terms are set out in your contract.",
        ],
      },
      {
        question: "What’s the smallest engagement you take on?",
        answer: ["One engineer, or a three-month project."],
      },
      {
        question: "Can we change the pricing model later?",
        answer: [
          "Yes. Most long-term clients combine models, and you can switch between them without renegotiating from scratch.",
        ],
      },
    ],
  },
  "security-compliance": {
    title: "Security and compliance",
    description:
      "The certifications Linwerk holds, the agreements we sign and how we protect your code and data.",
    heading: "Security your auditors can check",
    sub: "Certified processes, the agreements your sector needs, and code that stays yours.",
    sections: [
      {
        id: "certifications",
        title: "Certifications",
        cards: [
          {
            title: "ISO 27001",
            text: "Information security management.",
            list: [],
          },
          {
            title: "SOC 2 Type II",
            text: "Security controls, audited over time.",
            list: [],
          },
          {
            title: "ISO 9001",
            text: "Quality management.",
            list: [],
          },
          {
            title: "Cyber Essentials",
            text: "UK baseline for cyber security.",
            list: [],
          },
        ],
      },
      {
        id: "agreements",
        title: "Agreements and how we work",
        cards: [
          {
            title: "Agreements we sign",
            text: "The paperwork your legal and compliance teams ask for.",
            list: [
              "Non-disclosure agreements (NDA), on request before we talk details",
              "Business associate agreements (BAA) for HIPAA",
              "Data processing agreements under GDPR",
            ],
          },
          {
            title: "Your code and data",
            text: "What we build stays under your control.",
            list: [
              "Code lives in your repositories",
              "Infrastructure accounts are in your name",
              "Ownership is written into the contract",
              "Access is removed when an engagement ends",
            ],
          },
          {
            title: "Regulated sectors",
            text: "We build for sectors with their own rules.",
            list: [
              "Healthcare: HIPAA and GDPR",
              "Finance: KYC/AML workflows and open banking (PSD2)",
              "Audit trails from day one",
            ],
          },
        ],
      },
    ],
    banner: {
      title: "Need our documents?",
      text: "We share certificates, policies and completed security questionnaires under NDA.",
      href: "/contact?type=project",
      label: "Discuss a project",
    },
    faq: [
      {
        question: "Can you sign our NDA before we share details?",
        answer: ["Yes. We sign an NDA on request, before we talk details."],
      },
      {
        question: "Can you sign industry-specific compliance agreements?",
        answer: ["Yes: NDAs, BAAs and GDPR agreements."],
      },
      {
        question: "Who owns the code and the intellectual property?",
        answer: ["You do, from the first commit."],
      },
      {
        question: "Do you subcontract any of the work?",
        answer: ["No. Our own team delivers."],
      },
    ],
  },
  technologies: {
    title: "Technologies",
    description:
      "The languages, frameworks, platforms and tools Linwerk engineers work with every day.",
    heading: "The stack we build with",
    sub: "The languages, frameworks and platforms our engineers use every day. Yours isn’t here? We learn fast.",
    sections: [
      {
        id: "stack",
        title: "What our engineers work with",
        cards: [
          {
            title: "Frontend",
            text: "Fast, accessible web apps.",
            list: ["React", "Next.js", "TypeScript"],
          },
          {
            title: "Backend",
            text: "APIs, data models and integrations.",
            list: ["Node.js", "Go", "Java and Spring", "PostgreSQL", "Kafka"],
          },
          {
            title: "Mobile",
            text: "Native and cross-platform apps.",
            list: ["Swift", "Kotlin", "React Native"],
          },
          {
            title: "Cloud and DevOps",
            text: "Environments from code, releases at a button.",
            list: ["AWS", "Google Cloud", "Kubernetes", "Terraform", "CI/CD pipelines"],
          },
          {
            title: "AI and data",
            text: "Models, agents and the data behind them.",
            list: ["PyTorch", "LLMs and agents", "Spark", "dbt"],
          },
          {
            title: "Quality and design",
            text: "Tests the team trusts, designs people understand.",
            list: ["Playwright", "Cypress", "Figma"],
          },
        ],
      },
    ],
    banner: {
      title: "Want to work with this stack?",
      text: "We are hiring senior engineers, designers and delivery leads.",
      href: "/careers#open-roles",
      label: "See open roles",
    },
    faq: [],
  },
} satisfies Record<string, InfoPageData>;

export type InfoSlug = keyof typeof INFO_PAGES;
