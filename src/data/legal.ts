/* The legal pages: /privacy, /terms, /terms-of-use and /cookies. Body blocks are the same as an article's. */
import type { ArticleBlock } from "@/data/articles";

export interface LegalDoc {
  title: string;
  summary: string;
  updated: string;
  body: ArticleBlock[];
}

export const LEGAL = {
  privacy: {
    title: "Privacy policy",
    summary: "How Linwerk collects, uses and protects personal data.",
    updated: "14 November 2026",
    body: [
      "This policy explains what personal data Linwerk collects through this website, why we collect it and what you can do about it. Linwerk is based in Tbilisi, Georgia, and is the controller of the data described here.",
      {
        h: "What we collect",
      },
      {
        list: [
          "Requests and messages: the company name, industry, company size, name, email address and message you enter in our request and contact forms.",
          "Job applications: your name, email address, phone number, links and CV, and anything else you choose to tell us.",
          "Email: whatever you send to info@linwerk.com.",
        ],
      },
      "This website does not use advertising or analytics trackers, and it sets no cookies. See our cookie policy for details.",
      {
        h: "Why we use it",
      },
      {
        list: [
          "To answer your request, match engineers or prepare a project plan, at your request before entering into a contract.",
          "To assess your application for a role, and to contact you about it.",
          "To keep records we are required to keep by law.",
        ],
      },
      "We do not sell personal data and we do not use it for automated decisions.",
      {
        h: "Who we share it with",
      },
      "We share personal data only with the service providers that host our website and email, under contracts that bind them to protect it, and with authorities where the law requires it. If your data is processed outside your country, we use the safeguards the law requires, such as standard contractual clauses.",
      {
        h: "How long we keep it",
      },
      {
        list: [
          "Requests and messages: for as long as we are in contact, and up to two years after the last message.",
          "Job applications: until the role is filled, or for 12 months if you ask us to keep your application on file for other roles.",
          "Contract and accounting records: for as long as the law requires.",
        ],
      },
      {
        h: "Your rights",
      },
      "You can ask us for a copy of your data, ask us to correct or delete it, object to how we use it or ask us to restrict it, and withdraw any consent you gave. You also have the right to complain to the data protection authority in your country.",
      {
        h: "Contact",
      },
      "To use any of these rights, or to ask a question about this policy, write to info@linwerk.com. We reply within 30 days.",
      {
        h: "Changes",
      },
      "If we change this policy, we publish the new version on this page and update the date above.",
    ],
  },
  terms: {
    title: "Terms and conditions",
    summary: "The general terms that apply when you work with Linwerk.",
    updated: "14 November 2026",
    body: [
      "These terms describe how Linwerk works with its clients. They apply together with the contract or statement of work we sign with you. Where the two differ, the signed contract comes first.",
      {
        h: "Our services",
      },
      "We provide software engineers who work in your team under your management, we deliver whole software projects, and we give technical advice. The scope, the people, the price and the dates of each engagement are set out in the contract or statement of work.",
      {
        h: "Engineers on your team",
      },
      {
        list: [
          "You interview every engineer and decide who joins.",
          "There is no recruitment fee.",
          "Each engineer starts with a risk-free trial, on the terms set out in the contract.",
          "You direct the engineer’s daily work; we remain their employer or contracting party.",
        ],
      },
      {
        h: "Projects",
      },
      "Projects are priced as a fixed price or as time and materials, as agreed in the statement of work. Changes to the agreed scope are agreed in writing before the work starts. Delivered work carries a 90-day warranty after launch, during which we fix defects at no charge.",
      {
        h: "Fees and payment",
      },
      "Fees, invoicing dates and payment terms are set out in the contract. Fees are stated without taxes, which are added where they apply.",
      {
        h: "Ownership",
      },
      "The code, the documentation and all other work product we create for you are yours from day one, together with the intellectual property rights in them, once the related fees are paid. Infrastructure accounts are opened in your name. Tools and know-how we had before the engagement remain ours, and you receive a licence to use whatever of them is built into your product.",
      {
        h: "Confidentiality",
      },
      "Each of us keeps the other’s confidential information secret and uses it only for the engagement. We sign a separate non-disclosure agreement on request, before we discuss details.",
      {
        h: "Ending an engagement",
      },
      "Either of us may end an engagement with the notice set out in the contract. When an engagement ends, you keep everything delivered and paid for, and we hand over the work in progress and the documentation.",
      {
        h: "Liability",
      },
      "Neither of us is liable to the other for indirect or consequential loss. Each party’s total liability under an engagement is limited to the amount set out in the contract. Nothing in these terms limits liability that cannot be limited by law.",
      {
        h: "Governing law",
      },
      "These terms are governed by the law of Georgia, unless the signed contract says otherwise.",
      {
        h: "Contact",
      },
      "Questions about these terms: info@linwerk.com.",
    ],
  },
  "terms-of-use": {
    title: "Terms of use",
    summary: "The rules for using the Linwerk website.",
    updated: "14 November 2026",
    body: [
      "These terms apply to your use of this website. By using the site you accept them. The terms for working with us as a client are in our terms and conditions.",
      {
        h: "Using the site",
      },
      "You may browse the site and share links to it. You may not try to disrupt it, gain access to parts of it that are not public, or collect its content by automated means for republication.",
      {
        h: "Content",
      },
      "The text, the design, the graphics and the code of this site belong to Linwerk or to those who licensed them to us. Client names and logos belong to their owners. You may quote short passages with a link to the source.",
      {
        h: "Information on the site",
      },
      "We keep the site accurate and up to date, but it is general information, not an offer or advice. An engagement with us begins only with a signed contract.",
      {
        h: "Forms",
      },
      "What you send us through the forms on this site must be accurate and must be yours to share. How we handle it is described in our privacy policy.",
      {
        h: "Links",
      },
      "The site links to other websites. We are not responsible for their content or for how they handle your data.",
      {
        h: "Liability",
      },
      "The site is provided as it is. To the extent the law allows, we are not liable for loss that results from using it or from being unable to use it.",
      {
        h: "Changes and governing law",
      },
      "We may change these terms by publishing a new version on this page. They are governed by the law of Georgia.",
      {
        h: "Contact",
      },
      "Questions about these terms: info@linwerk.com.",
    ],
  },
  cookies: {
    title: "Cookie policy",
    summary: "Which cookies the Linwerk website uses.",
    updated: "14 November 2026",
    body: [
      "This website sets no cookies. We do not use analytics, advertising or social media trackers, and we do not store anything in your browser to recognise you between visits.",
      {
        h: "What this means for you",
      },
      {
        list: [
          "There is no cookie banner, because there is nothing to consent to.",
          "The forms on this site send only what you type into them.",
          "Fonts and pictures are served from our own domain, not from third parties.",
        ],
      },
      {
        h: "Links to other sites",
      },
      "Pages we link to, such as our social media profiles, are run by others and may set their own cookies. Their policies apply there.",
      {
        h: "If this changes",
      },
      "If we add a tool that uses cookies, we will update this page first and ask for your consent where the law requires it.",
      {
        h: "Contact",
      },
      "Questions about this policy: info@linwerk.com.",
    ],
  },
} satisfies Record<string, LegalDoc>;

export type LegalSlug = keyof typeof LEGAL;
