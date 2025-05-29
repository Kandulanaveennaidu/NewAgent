import { Header } from "@/components/layout/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Avatars - AI Avatar Agent",
  description: "Over 150 Lifelike Digital Avatars for your AI projects",
};

export default function AIAvatarsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
