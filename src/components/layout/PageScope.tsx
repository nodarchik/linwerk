import { PAGE_SCOPE, type PageName } from "@/styles/page-scope";

/**
 * Marks which page is on screen for the stylesheet. Rules in globals.css that belong to some pages only are
 * written as `:where(html:has(.sN)) …`; this hidden element carries the page's `sN` classes.
 */
export function PageScope({ page }: { page: PageName }) {
  return <i className={PAGE_SCOPE[page]} hidden aria-hidden="true" />;
}
