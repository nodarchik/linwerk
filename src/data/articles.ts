/* The blog articles. /blog/<slug> renders one; the home Blog cards link here.
   Body blocks: a string is a paragraph, { h } a heading, { list } bullets, { quote } a pull quote. */

export type ArticleBlock = string | { h: string } | { list: string[] } | { quote: string };

export interface Article {
  slug: string;
  tag: string;
  minutes: number;
  date: string;
  img: string;
  title: string;
  summary: string;
  body: ArticleBlock[];
}

export const ARTICLES: Article[] = [
  {
    slug: "agency-launch",
    tag: "Company news",
    minutes: 4,
    date: "3 November 2026",
    img: "/blog/agency-launch.webp",
    title: "We’re open: senior engineers, on your terms",
    summary:
      "Why we started Linwerk, how we work, and what you can expect from the first conversation.",
    body: [
      "Most teams we talk to are not short of ideas. They are short of people who have built the thing before: the engineer who has shipped a payments flow, the architect who has scaled a database past its first wall, the QA lead who knows where releases break. Hiring them takes months. Agencies often send whoever is free.",
      "We started Linwerk to close that gap. We are a team of senior engineers, designers and delivery leads, and we join your team as if we were hired by you.",
      {
        h: "Two ways to work with us",
      },
      "Some clients need one or two engineers inside their existing team. Others want a whole product built and handed over. Most start with the first and grow into the second.",
      {
        list: [
          "Engineers in your team: you tell us your stack and the seniority you need, we match people, you interview them.",
          "A product delivered: our architects, QA and delivery leads scope it, build it and support it after launch.",
          "Technical guidance: an architecture review or a code audit before you commit budget.",
        ],
      },
      {
        h: "What stays the same",
      },
      "Whichever way you work with us, a few things do not change. You interview every engineer and decide who joins. There is no recruitment fee, and every engagement starts with a risk-free trial. The code, the IP and the infrastructure accounts are yours from day one, and that is in the contract.",
      {
        quote: "We would rather earn the second month than lock you into the first year.",
      },
      {
        h: "The first conversation",
      },
      "It takes about thirty minutes. We ask what you are building, where the team is stretched and what a good first month would look like. Within two business days you get matched engineers to interview, or a short plan if you need a whole project.",
      "If we are not the right fit, we will say so in that call. That is the fastest way to earn your trust.",
    ],
  },
  {
    slug: "why-going-digital-is-hard",
    tag: "Digital transformation",
    minutes: 7,
    date: "10 November 2026",
    img: "/blog/going-digital.webp",
    title: "Why going digital is harder for smaller businesses",
    summary:
      "Paper files, legacy tools and no in-house tech team: the obstacles smaller companies hit, and how to get past them one step at a time.",
    body: [
      "Large companies talk about digital transformation as a programme with a budget and a steering committee. For a company of forty people, it usually starts with a spreadsheet that has grown too important to lose.",
      "The goal is the same at any size: fewer manual steps, data you can trust, and tools your customers expect. The path is different, because smaller businesses run into problems that big ones solve with headcount.",
      {
        h: "The obstacles we see most",
      },
      {
        list: [
          "Knowledge lives in people, not systems. One person knows how invoicing really works, and nobody has written it down.",
          "Tools were bought one at a time. Accounting, sales and stock each have their own app, and none of them talk to each other.",
          "There is no one to own it. Without an in-house tech team, every change waits for an outside vendor.",
          "The budget is real money. A failed project is not a line in a report; it is this year’s margin.",
        ],
      },
      {
        h: "Start with one process, not a platform",
      },
      "The most common mistake is trying to replace everything at once. A new all-in-one system promises to fix every problem, takes a year to configure, and lands on a team that never asked for it.",
      "We start smaller. Pick the one process that costs the most time or causes the most errors, often order handling or invoicing, and fix it end to end. Map how it works today, automate the repetitive steps, and connect the two or three tools it touches. A few weeks later the team feels the difference, and the next step is easier to agree on.",
      {
        quote: "The first project should pay for itself before the second one starts.",
      },
      {
        h: "Keep what works",
      },
      "Legacy does not mean useless. An old system that holds ten years of clean customer data is an asset. Often the right move is to put a modern layer on top of it, an API or a simple internal app, rather than migrate everything on day one.",
      {
        h: "Own the result",
      },
      "Whoever builds it, make sure you own the code, the data and the accounts, and that the work is documented well enough for someone else to pick up. Dependence on one vendor is how small companies end up stuck again in three years.",
      {
        h: "Where to begin",
      },
      "Write down the three tasks your team repeats most each week and how long they take. That list is usually enough to find the first project. If you would like a second opinion, a short technical review will tell you what to fix first and what can wait.",
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}
