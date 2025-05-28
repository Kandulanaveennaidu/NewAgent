// src/components/sections/news-and-updates-section.tsx
'use client';

import type { FC } from 'react';
import { useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NewsArticle {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  aiHint: string;
  href: string;
}

const newsData: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'Why You Should Turn Blogs and Articles into Videos Using AI',
    description: 'Learn how using AI to convert blogs and articles to video will speed up your content creation process and engage a wider audience.',
    imageSrc: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'AI converting blog to video',
    aiHint: 'blog video conversion',
    href: '#news-blog-to-video',
  },
  {
    id: 'news-2',
    title: 'Is AI Avatar Agent the Best YouTube Video Downloader?',
    description: 'Discover why you should consider AI Avatar Agent for downloading videos - a top choice for efficient media management.',
    imageSrc: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop',
    imageAlt: 'YouTube video downloader interface',
    aiHint: 'youtube downloader interface',
    href: '#news-youtube-downloader',
  },
  {
    id: 'news-3',
    title: '5 Smart Ways Creators Use AI to Repurpose YouTube Videos',
    description: 'Learn how creators leverage AI to repurpose existing YouTube videos, expand their reach, and grow their channels effectively.',
    imageSrc: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Creator repurposing YouTube video with AI',
    aiHint: 'video repurposing creator',
    href: '#news-repurpose-videos',
  },
  {
    id: 'news-4',
    title: "AI Agents in 2025: How They're Revolutionizing Technology",
    description: 'The AI agent market is poised for rapid growth by 2025. Explore how AI Avatar Agent is at the forefront of this technological shift.',
    imageSrc: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Futuristic AI agent interface',
    aiHint: 'ai agent technology',
    href: '#news-ai-agents',
  },
  {
    id: 'news-5',
    title: 'Best Affiliate Program: How to Make Reliable Revenue in 2025',
    description: "AI Avatar Agent Affiliate Program provides you with the opportunity to earn reliable revenue by promoting cutting-edge AI video tools.",
    imageSrc: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Affiliate program dashboard',
    aiHint: 'affiliate program desk',
    href: '#news-affiliate-program',
  },
  {
    id: 'news-6',
    title: 'Best AI Dubbing Video Translator to Expand Your Reach',
    description: 'Discover the best AI dubbing tools, like those integrated into AI Avatar Agent, to effortlessly localize your video content for a global audience.',
    imageSrc: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'AI dubbing and video translation interface',
    aiHint: 'ai dubbing translation',
    href: '#news-ai-dubbing',
  },
  {
    id: 'news-7',
    title: 'Transforming News Broadcasts with AI',
    description: 'See how AI Avatar Agent is helping transform the landscape of news broadcasting with advanced AI-powered video solutions.',
    imageSrc: 'https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?q=80&w=2187&auto=format&fit=crop',
    imageAlt: 'AI news anchor in a studio',
    aiHint: 'news broadcast studio',
    href: '#news-ai-broadcasting',
  },
];

export const NewsAndUpdatesSection: FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 324; // Card width (300) + gap (24)
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-10">
          <div className="flex-grow text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Discover <span className="text-primary">AI Avatar Agent</span> News and Updates
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="rounded-full active:scale-95 transition-transform"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="rounded-full active:scale-95 transition-transform"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory"
        >
          {newsData.map((article) => (
            <Card
              key={article.id}
              className="w-[300px] flex-shrink-0 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out bg-card overflow-hidden snap-start"
            >
              <a href={article.href} className="block">
                <div className="relative w-full aspect-[300/180]">
                  <Image
                    src={article.imageSrc}
                    alt={article.imageAlt}
                    fill
                    className="object-cover"
                    data-ai-hint={article.aiHint}
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <CardContent className="p-5">
                  <CardTitle className="text-md font-semibold text-foreground mb-2 leading-tight h-12 overflow-hidden">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-xs text-muted-foreground h-16 overflow-hidden">
                    {article.description}
                  </CardDescription>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
         <div className="md:hidden flex justify-center items-center gap-2 mt-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="rounded-full active:scale-95 transition-transform"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="rounded-full active:scale-95 transition-transform"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
      </div>
    </section>
  );
};
