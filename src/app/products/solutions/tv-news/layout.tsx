import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TV News - AI Avatar Solution",
  description:
    "Create, edit, and share breaking news videos 95% faster with AI avatars",
};

export default function TVNewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
