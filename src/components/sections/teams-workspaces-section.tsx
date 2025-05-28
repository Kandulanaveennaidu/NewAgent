// src/components/sections/teams-workspaces-section.tsx
'use client';

import type { FC } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export const TeamsWorkspacesSection: FC = () => {
  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Left Column: Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-sm font-semibold text-primary mb-2">
              Feature Highlights
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Teams & Workspaces
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Collaborate seamlessly on video content from anywhere at any time,
              with everything your team needs centralized in one workspace.
            </p>
            <ul className="space-y-3 text-muted-foreground mb-8 text-left">
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">&#8226;</span>
                <span>
                  Projects in your workspace are synced, ensuring they are easily
                  accessible for everyone to edit and collaborate.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">&#8226;</span>
                <span>
                  Maintain consistency across your team&apos;s video content with shared
                  custom fonts, logos, and assets in your workspace&apos;s brand kit.
                </span>
              </li>
            </ul>
            <Button size="lg" className="active:scale-95 transition-transform">
              <Sparkles className="mr-2 h-5 w-5" />
              Explore if Teams is For You
            </Button>
          </div>

          {/* Right Column: Image */}
          <div className="md:w-1/2 w-full">
            <div className="relative aspect-[4/3] md:aspect-[600/450] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&h=450&auto=format&fit=crop"
                alt="Team collaborating in a modern workspace"
                fill
                className="object-cover"
                data-ai-hint="team collaboration office"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
