
// src/components/sections/ai-prompt-tools-section.tsx
'use client';

import type { FC } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PromptToolData {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  aiHint: string;
  layout: 'button-inline' | 'button-below';
}

const promptToolsData: PromptToolData[] = [
  {
    id: 'topic-to-video',
    title: 'Topic to Video',
    description: "Overcome the 'blank page' block by transforming ideas and prompts into instant videos, complete with scripts, footage, and voiceovers.",
    imageSrc: 'https://images.unsplash.com/photo-1551503766-ac63dfa6401c?q=80&w=500&h=280&auto=format&fit=crop',
    imageAlt: 'Topic to Video illustration',
    aiHint: 'topic video generation',
    layout: 'button-inline',
  },
  {
    id: 'docs-to-video',
    title: 'Docs to Video',
    description: 'Convert boring, static documents, presentations, and spreadsheets into videos that keep your audience engaged and informed.',
    imageSrc: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=500&h=280&auto=format&fit=crop',
    imageAlt: 'Docs to Video illustration',
    aiHint: 'document video conversion',
    layout: 'button-inline',
  },
  {
    id: 'article-to-video',
    title: 'Article to Video',
    description: 'Repurpose your articles, blogs, notes, or research into high-performing, studio-quality videos by just copy-pasting your text.',
    imageSrc: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=500&h=280&auto=format&fit=crop',
    imageAlt: 'Article to Video illustration',
    aiHint: 'article video maker',
    layout: 'button-below',
  },
  {
    id: 'url-to-video',
    title: 'URL to Video',
    description: 'Just copy-paste any URL from your blog, e-commerce store, or website to instantly transform it into a full-production video.',
    imageSrc: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=500&h=280&auto=format&fit=crop',
    imageAlt: 'URL to Video illustration',
    aiHint: 'url video creator',
    layout: 'button-below',
  },
];

export const AiPromptToolsSection: FC = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 md:mb-12">
          <p className="text-sm font-semibold text-primary mb-2">
            AI Prompt Tools
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Convert Text to Video in Minutes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Redefine video creation with our AI-powered convert-to-video tools. Create editable, stylized video drafts in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {promptToolsData.map((tool) => (
            <Card
              key={tool.id}
              className="flex flex-col rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out bg-card overflow-hidden"
            >
              <div className="relative w-full aspect-[500/280]"> {/* Maintain aspect ratio for image container */}
                <Image
                  src={tool.imageSrc}
                  alt={tool.imageAlt}
                  fill
                  className="object-cover"
                  data-ai-hint={tool.aiHint}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <CardContent className="p-5 md:p-6 flex-grow flex flex-col">
                {tool.layout === 'button-inline' ? (
                  <>
                    <div className="flex justify-between items-center mb-2">
                      <CardTitle className="text-xl font-semibold text-foreground">
                        {tool.title}
                      </CardTitle>
                      <Button size="sm" variant="default" className="active:scale-95 transition-transform whitespace-nowrap">
                        Learn More
                      </Button>
                    </div>
                    <CardDescription className="text-sm text-muted-foreground flex-grow">
                      {tool.description}
                    </CardDescription>
                  </>
                ) : (
                  <>
                    <CardTitle className="text-xl font-semibold text-foreground mb-2">
                      {tool.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground mb-4 flex-grow">
                      {tool.description}
                    </CardDescription>
                    <div className="mt-auto flex justify-end">
                      <Button size="sm" variant="default" className="active:scale-95 transition-transform">
                        Learn More
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
