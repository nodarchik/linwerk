/* Open roles: one list for the Careers board (/careers#open-roles) and the role pages (/careers/<slug>).
   Edit roles here only.

     slug, title, dept, location, mode, type, level — the card, the filters and the summary card
     summary — one line, used by the Careers search
     about   — paragraphs: the team, the work, who you report to
     work    — { intro, list } what you'll work on
     you     — { intro, list } the must-haves
     nice    — a short paragraph of extras
   JOB_COMMON holds what is the same for every role (how we hire, what we offer); a role may override either. */

/** A string is a paragraph, a list of strings is paragraphs, { intro, list } is a paragraph and a few bullets. */
export type JobBlock = string | string[] | { intro?: string; list: string[] };

export interface Job {
  slug: string;
  title: string;
  dept: string;
  location: string;
  mode: string;
  type: string;
  level: string;
  summary: string;
  about: JobBlock;
  work: JobBlock;
  you: JobBlock;
  nice: JobBlock;
  hire?: JobBlock;
  offer?: JobBlock;
}

export const JOB_COMMON: { hire: JobBlock; offer: JobBlock } = {
  hire: [
    "We keep it short and tell you where you stand at every step. It starts with a 30-minute call with someone from our people team about what you want next and what we can offer, including the salary range.",
    "Then comes one 60-minute conversation with two senior people from the team you would join. We talk through real problems you have solved and a scenario from a current project. There is no live coding, and you are welcome to use the tools you use every day, AI assistants included. If it is a match, you meet the delivery lead and we make an offer, usually within two weeks of your first call.",
    "We reply to every applicant within five business days, and if we say no after an interview, we tell you why.",
  ],
  offer: {
    intro:
      "A salary we share in the first call, reviewed every year, and the room to do careful work. Beyond that:",
    list: [
      "Private health insurance for you and your family",
      "A yearly learning budget for courses, books and conferences",
      "Remote set-up allowance, or a desk in our Tbilisi or Batumi office",
      "24 days of paid leave, plus Georgian public holidays",
      "Relocation and visa support for senior roles",
    ],
  },
};

export const JOBS: Job[] = [
  {
    slug: "senior-backend-engineer",
    title: "Senior Backend Engineer",
    dept: "Engineering",
    location: "Tbilisi",
    mode: "Hybrid",
    type: "Full-time",
    level: "Senior",
    summary:
      "Design and build the services behind client products, from the data model to production.",
    about: [
      "Our backend engineers build the parts of a product nobody sees and everybody relies on: the APIs, the data models, the integrations with payment providers and ERPs, and the jobs that keep it all in sync. Most of our clients are mid-sized companies in Europe and the US who come to us for a new product or for a team that can take over one that has outgrown its first version.",
      "You will join a delivery team of five to eight people (engineers, a designer, QA and a delivery lead) working with one client at a time. Right now that team is rebuilding the order and inventory platform for a European retail group, moving it from a monolith to a set of services without stopping a business that ships thousands of orders a day.",
      "You will report to our Head of Engineering and work in our Tbilisi office two days a week.",
    ],
    work: {
      intro:
        "Day to day, you will own a slice of the system from the first design discussion to how it behaves in production.",
      list: [
        "Design APIs and data models together with the client’s product people, and write down the decisions",
        "Build services in Node.js or Go on PostgreSQL, with the tests and monitoring that let us change them safely",
        "Review code and pair with the two middle engineers on the team",
        "Take part in architecture reviews and in the on-call rotation, which is quiet by design",
      ],
    },
    you: {
      intro:
        "We care more about how you think about trade-offs than about a list of frameworks. You will probably fit if you have:",
      list: [
        "Built and run backend systems in production for several years, and been on the hook when they broke",
        "Strong SQL and data-modelling skills, ideally with PostgreSQL",
        "Shipped on AWS or GCP and are comfortable with containers and CI",
        "The ability to explain a technical choice to someone who is not an engineer",
      ],
    },
    nice: "It would help if you have worked with event-driven systems or message queues, migrated a live system without downtime, or worked directly with clients before. None of these are required.",
  },
  {
    slug: "senior-frontend-engineer",
    title: "Senior Frontend Engineer",
    dept: "Engineering",
    location: "Remote",
    mode: "Remote",
    type: "Full-time",
    level: "Senior",
    summary: "Build fast, accessible web apps with product teams who care about the details.",
    about: [
      "The front end is where our clients judge our work, so we treat it as engineering, not decoration. Our frontend engineers build web apps that are fast on a cheap phone, usable with a keyboard and a screen reader, and pleasant to maintain a year later.",
      "You will work in a product team with a designer and two to four other engineers. Current projects include a booking platform for a hospitality group with forty hotels and the customer portal of a US insurance company, both in React and TypeScript.",
      "This role is fully remote within two hours of Georgian time. You will report to the frontend practice lead and meet the team in person twice a year.",
    ],
    work: {
      intro: "You will build features end to end and help set how the team builds them.",
      list: [
        "Turn designs into product features, from the component to the data it needs",
        "Own performance and accessibility on your project, with numbers we track",
        "Shape the design system together with the designers",
        "Review code, pair, and write the short guides the next engineer will thank you for",
      ],
    },
    you: {
      intro:
        "You have been building for the web long enough to have opinions, and you hold them loosely. In particular:",
      list: [
        "Deep experience with React and TypeScript in production",
        "Strong CSS: layout, responsive design and the details of browsers",
        "Practical knowledge of accessibility (WCAG) and web performance",
        "Experience with Next.js or a similar framework",
      ],
    },
    nice: "Bonus points for work on a design system, for mobile web or React Native, or for any time you have measurably made a slow product fast.",
  },
  {
    slug: "lead-devops-engineer",
    title: "Lead DevOps Engineer",
    dept: "Engineering",
    location: "Batumi",
    mode: "Hybrid",
    type: "Full-time",
    level: "Lead",
    summary: "Lead the platform work that keeps client systems fast, safe and easy to ship.",
    about: [
      "Every project we deliver runs on infrastructure we set up, and many of our clients keep us on to run it afterwards. Our platform team of four makes sure that shipping is boring: environments appear from code, releases are a button, and alerts mean something.",
      "As the lead, you will set the standards that every delivery team follows, and you will still be hands-on in the projects that need it most. This year that includes moving a logistics client from hand-built servers to Kubernetes on AWS, and bringing a fintech client to the audit standard their bank partners now ask for.",
      "You will report to the CTO and work from our Batumi office two days a week.",
    ],
    work: {
      intro: "Your time will split roughly evenly between leading the team and building with it.",
      list: [
        "Design cloud infrastructure as code (Terraform) and keep our shared modules in shape",
        "Run CI/CD and release pipelines across client projects",
        "Set up monitoring, alerting and an on-call process people can live with",
        "Hire, coach and grow the platform team",
      ],
    },
    you: {
      intro:
        "You have run production systems at scale and led other engineers while doing it. That usually means:",
      list: [
        "Many years in DevOps, SRE or platform engineering, some of them as a lead",
        "Kubernetes and Terraform in production, on AWS",
        "A calm head during incidents, and the habit of writing the post-mortem",
        "Experience explaining cost and risk to people who sign the budget",
      ],
    },
    nice: "Security certifications, cloud cost work, or experience with ISO 27001 or SOC 2 audits would all be useful here.",
  },
  {
    slug: "qa-automation-engineer",
    title: "QA Automation Engineer",
    dept: "Quality",
    location: "Remote",
    mode: "Remote",
    type: "Full-time",
    level: "Middle",
    summary: "Make releases safe with test automation that the whole team trusts.",
    about: [
      "Our QA engineers sit inside delivery teams from the first sprint, not at the end of them. The goal is simple: a team that can release on a Friday afternoon and still enjoy the weekend.",
      "You will join a team building a patient app for a network of clinics, where a missed bug can mean a missed appointment. You will build the automated tests, plan what needs a human eye, and work with the engineers so that testing is part of how features are built.",
      "This role is fully remote within two hours of Georgian time, and you will report to our QA lead.",
    ],
    work: {
      intro: "Most of your week goes into the test suite and the people who depend on it.",
      list: [
        "Write and maintain end-to-end and API tests in Playwright and TypeScript",
        "Build the tests into CI so every pull request gets an answer in minutes",
        "Plan testing with engineers and the product owner before work starts",
        "Report defects clearly and follow them to the fix",
      ],
    },
    you: {
      intro:
        "You enjoy finding the case nobody thought of, and you like making that case run every night. You have:",
      list: [
        "A few years of test automation on web products",
        "Playwright or Cypress, and enough TypeScript to keep a test suite clean",
        "Experience testing APIs as well as interfaces",
        "Clear, kind written communication",
      ],
    },
    nice: "Experience with mobile testing, load testing or healthcare software would be a plus.",
  },
  {
    slug: "senior-product-designer",
    title: "Senior Product Designer",
    dept: "Design",
    location: "Tbilisi",
    mode: "On-site",
    type: "Contract",
    level: "Senior",
    summary: "Turn client problems into clear products, from research to the shipped screen.",
    about: [
      "Our designers work on products, not mock-ups. You will be part of the team from the first discovery workshop to the release, and you will see your work used by real people.",
      "This is a twelve-month contract for a new project: an operations platform for a group of logistics companies, replacing spreadsheets and phone calls with one tool for dispatchers, drivers and customers. You will lead the design work, with a second designer joining after the first quarter.",
      "You will work from our Tbilisi office with the delivery team and report to our Head of Design.",
    ],
    work: {
      intro: "You will lead the design of the product and keep it honest with research.",
      list: [
        "Run discovery: interviews, shadowing dispatchers, mapping the work as it really is",
        "Design flows, screens and prototypes, and test them with users",
        "Build the design system with the frontend engineers",
        "Present and defend design decisions with the client",
      ],
    },
    you: {
      intro:
        "Your portfolio should show how you got to a design, not only the final screens. We are looking for:",
      list: [
        "Several years of product design, with shipped products to show",
        "Expert Figma skills, including components and variables",
        "Experience with research and usability testing",
        "Comfort leading a room of stakeholders",
      ],
    },
    nice: "B2B or operations software experience, basic front-end skills, or work on a design system used by several teams would all help.",
    offer: {
      intro:
        "A contract rate we share in the first call, fixed for the twelve months, and the room to do careful work. Beyond that:",
      list: [
        "A desk in our Tbilisi office, next to the delivery team",
        "Georgian public holidays off",
        "Relocation and visa support",
      ],
    },
  },
  {
    slug: "delivery-lead",
    title: "Delivery Lead",
    dept: "Delivery",
    location: "Batumi",
    mode: "Hybrid",
    type: "Full-time",
    level: "Lead",
    summary:
      "Run client projects so that teams ship on time and clients always know where things stand.",
    about: [
      "Delivery leads are the reason our clients come back. You will run one or two client projects at a time, own the plan and the budget, and make sure the team spends its time building, not waiting.",
      "Your first project will be with a European fashion retailer moving its stores and online shop onto one commerce platform: a team of nine, three time zones, and a launch date that matters. You will work closely with the client’s product owner and with our engineering and design leads.",
      "You will report to our Head of Delivery and work from our Batumi office two days a week.",
    ],
    work: {
      intro: "You will own how the project runs, from the first plan to the final handover.",
      list: [
        "Plan the delivery with the client and keep the plan true",
        "Run sprints, demos and reviews that people find useful",
        "Manage scope, risks and budget, and raise problems early",
        "Keep the team unblocked and the client informed every week",
      ],
    },
    you: {
      intro: "You have led software projects through good weeks and bad ones. That means you have:",
      list: [
        "Several years leading software delivery for clients or in a product company",
        "Real Agile practice, not only the vocabulary",
        "Experience owning a budget and a client relationship",
        "Fluent English and a calm, clear way of writing",
      ],
    },
    nice: "A technical background, experience with distributed teams, or e-commerce projects would be helpful.",
  },
];

export function getJob(slug: string): Job | undefined {
  return JOBS.find((job) => job.slug === slug);
}
