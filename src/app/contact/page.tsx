import type { Metadata } from "next";
import { PageScope } from "@/components/layout/PageScope";
import { ModalProvider } from "@/components/Modal";
import { Contact } from "@/components/sections/contact/Contact";
import { RequestSent } from "@/components/sections/request/RequestSent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Linwerk about your project or book a consultation. We reply within two business days.",
};

export default function ContactPage() {
  return (
    <>
      <PageScope page="request" />
      <ModalProvider>
        <main>
          <Contact />
        </main>
        <RequestSent title="Message sent" />
      </ModalProvider>
    </>
  );
}
