
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - AI Avatar Agent',
  description: 'Log in to your AI Avatar Agent account.',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background">
      {children}
    </main>
  );
}
