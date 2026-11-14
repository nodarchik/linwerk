import { InfoPage, infoMetadata } from "@/components/sections/info/InfoPage";

export const metadata = infoMetadata("security-compliance");

export default function SecurityPage() {
  return <InfoPage slug="security-compliance" />;
}
