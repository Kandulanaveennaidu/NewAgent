
'use client';

import type { FC } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface AiCapability {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  aiHint: string;
}

const capabilities: AiCapability[] = [
  {
    title: 'AI Text Crafter',
    description: 'Let our AI assist you in drafting or refining scripts. It helps with grammar, style, and generating fresh content to streamline your writing process.',
    imageSrc: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
    imageAlt: 'Person writing on a laptop with a notebook and coffee',
    aiHint: 'writing script laptop',
  },
  {
    title: 'AI Image Synthesizer',
    description: 'Transform concepts into stunning visuals. Our AI image tool creates diverse styles, from clean vector graphics to rich photorealistic scenes, from a simple text prompt.',
    imageSrc: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3',
    imageAlt: 'Abstract colorful geometric shapes and waves',
    aiHint: 'abstract colorful design',
  },
  {
    title: 'AI Video Weaver',
    description: 'Input a brief idea, and our AI video tool will weave it into a compelling, high-quality video tailored to your vision.',
    imageSrc: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3',
    imageAlt: 'Cinema clapperboard and film reel on a dark background',
    aiHint: 'film reel clapperboard',
  },
];

export const GenerativeAiCapabilitiesSection: FC = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-sm font-semibold text-primary mb-2">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Generative AI Power Tools
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Unlock creative potential with LumoraAI's suite of generative tools. Craft scripts, design visuals, and produce videos effortlessly, saving time on asset sourcing.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {capabilities.map((capability) => (
            <Card
              key={capability.title}
              className="rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out bg-card overflow-hidden flex flex-col"
            >
              <div className="aspect-video relative w-full">
                <Image
                  src={capability.imageSrc}
                  alt={capability.imageAlt}
                  fill
                  className="object-cover" 
                  data-ai-hint={capability.aiHint}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardContent className="p-5 md:p-6 flex-grow flex flex-col text-center md:text-left">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {capability.title}
                </h3>
                <p className="text-sm text-muted-foreground flex-grow">
                  {capability.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
