// src/components/sections/call-to-action-section.tsx
'use client';

import type { FC } from 'react';
import { Button } from '@/components/ui/button';

export const CallToActionSection: FC = () => {
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          What Will You Create?
        </h2>
        <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
          Sign up for a free LumoraAI demo & experience all the best of AI content creation in one platform.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="secondary" // This will use secondary colors from theme, typically lighter
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 active:scale-95 transition-transform"
          >
            Contact Sales
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary active:scale-95 transition-transform"
          >
            Explore LumoraAI
          </Button>
        </div>
      </div>
    </section>
  );
};
