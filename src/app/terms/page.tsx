import { LegalPage, legalMetadata } from "@/components/legal/LegalPage";

export const metadata = legalMetadata("terms");

export default function TermsPage() {
  return <LegalPage slug="terms" />;
}
