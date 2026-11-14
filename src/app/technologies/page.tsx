import { InfoPage, infoMetadata } from "@/components/sections/info/InfoPage";

export const metadata = infoMetadata("technologies");

export default function TechnologiesPage() {
  return <InfoPage slug="technologies" />;
}
