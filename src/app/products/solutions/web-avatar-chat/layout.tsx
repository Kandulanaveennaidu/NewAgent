import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Avatar Chat Agent - AI Customer Service",
  description:
    "AI-powered digital avatars for personalized customer service with 24/7 availability",
};

export default function WebAvatarChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
