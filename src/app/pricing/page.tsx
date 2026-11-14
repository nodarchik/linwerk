import { InfoPage, infoMetadata } from "@/components/sections/info/InfoPage";

export const metadata = infoMetadata("pricing");

export default function PricingPage() {
  return <InfoPage slug="pricing" />;
}
