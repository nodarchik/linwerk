/** The contact form's topics, keyed by the ?type= value the site's links carry. */
export const TOPICS = {
  project: "A project",
  consultation: "A consultation or audit",
  other: "Something else",
} as const;

export type Topic = keyof typeof TOPICS;

export const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
