
'use client';

import type { FC } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

interface StepData {
  stepNumber: string;
  title: string;
  description: string;
}

const stepsData: StepData[] = [
  {
    stepNumber: '1',
    title: 'Create a Script',
    description:
      'Begin by generating your script by uploading a URL or document, providing a prompt, or simply typing it in yourself.',
  },
  {
    stepNumber: '2',
    title: 'Customize & Edit',
    description:
      'Bring your video to life by choosing an avatar and voice that match your message. Add text, images, animations, and more.',
  },
  {
    stepNumber: '3',
    title: 'Collaborate with Team',
    description:
      'Share your video project with your team through the synchronized workspace or with a link, and work together to finalize it.',
  },
  {
    stepNumber: '4',
    title: 'Generate & Share',
    description:
      'Generate the video and even translate it into multiple languages if needed. Then, share the link or embed it anywhere.',
  },
];

interface BadgeInfo {
  src: string;
  alt: string;
  width: number;
  height: number;
  aiHint: string;
  className?: string;
}

const badgesData: BadgeInfo[] = [
  {
    src: 'https://cdn.prod.website-files.com/63da3362f67ed6f71c9489c1/6790b295452094823eec1574_awards_img_2025-p-500.png',
    alt: 'Leader Winter 2025 AI Video Generator Award',
    width: 500, // Original width for aspect ratio hint
    height: 420, // Original height for aspect ratio hint
    aiHint: 'G2 award leader',
    className: 'h-24 w-auto', // Standardized height for display
  },
];

export const HowToUseSection: FC = () => {
  return (
    <section className="bg-background pt-6 md:pt-8 pb-8 md:pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8 mb-10 md:mb-16 items-center md:items-start">
          {/* Left Column: Text Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm font-semibold text-primary mb-2">How To</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Crafting Videos with Our <span className="text-primary">AI Video Creator</span>
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto md:mx-0">
              Learn the straightforward process to create impressive videos quickly with AI Avatar Agent top-tier video generation platform.
            </p>
            <Button size="lg" className="active:scale-95 transition-transform">
              <Sparkles className="mr-2 h-5 w-5" />
              Create a Free Video
            </Button>
          </div>

          {/* Right Column: Badges */}
          <div className="flex-none flex items-center justify-center md:justify-end space-x-2 md:space-x-3 mt-6 md:mt-0 shrink-0">
            {badgesData.map((badge, index) => (
              <div key={index} className={`relative ${badge.className}`}>
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  width={badge.width}
                  height={badge.height}
                  data-ai-hint={badge.aiHint}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stepsData.map((step) => (
            <Card
              key={step.stepNumber}
              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-card h-full flex flex-col"
            >
              <div className="absolute top-2 right-3 md:top-3 md:right-4 text-[6rem] md:text-[7rem] lg:text-[8rem] font-bold text-primary/10 leading-none -z-0 select-none">
                {step.stepNumber}
              </div>
              <CardHeader className="pt-6 pb-3 z-10">
                <CardTitle className="text-xl font-semibold text-foreground">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground z-10 flex-grow">
                <p>{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
