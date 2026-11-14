import type { Metadata } from "next";
import { PageScope } from "@/components/layout/PageScope";
import { ModalProvider } from "@/components/Modal";
import { Request } from "@/components/sections/request/Request";
import { RequestSent } from "@/components/sections/request/RequestSent";

export const metadata: Metadata = { title: "Request engineers" };

export default function RequestPage() {
  return (
    <>
      <PageScope page="request" />
      <ModalProvider>
        <main>
          <Request />
        </main>
        <RequestSent />
      </ModalProvider>
    </>
  );
}
