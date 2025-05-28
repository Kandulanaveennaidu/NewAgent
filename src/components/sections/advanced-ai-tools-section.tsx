
'use client';

import type { FC } from 'react';
import { useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FeatureCardData {
  imageSrc: string;
  imageAlt: string;
  aiHint: string;
  title: string;
  description: string;
}

const featureCardsData: FeatureCardData[] = [
  {
    imageSrc: 'https://images.yourstory.com/cs/2/ab6020f0259611ee840c6712417aa5cf/AI-Voice-Cloning-Tool-1703796231278.jpeg',
    imageAlt: 'AI Voice Cloning interface showing waveform and controls',
    aiHint: 'voice cloning interface',
    title: 'AI Voice Cloning',
    description: 'Develop a distinct AI voice for your text-to-speech projects.',
  },
  {
    imageSrc: 'https://www.datasciencecentral.com/wp-content/uploads/2022/08/AdobeStock_355358427.jpg',
    imageAlt: 'Abstract representation of AI Text-to-Speech engine with sound waves',
    aiHint: 'text to speech soundwaves',
    title: 'AI Text-to-Speech Engine',
    description: 'Transform your written material into remarkably natural speech.',
  },
  {
    imageSrc: 'https://cdn-docs.vizard.ai/0-web-static/image/www/video_translator_header.webp',
    imageAlt: 'AI Video Translation tool showing language options and video preview',
    aiHint: 'video translation interface',
    title: 'AI Video Translation',
    description: 'Translate and dub videos into 30+ languages with professional quality.',
  },
  {
    imageSrc: 'https://cdn-site-assets.veed.io/cdn-cgi/image/width=1536,quality=75,format=auto/Custom_Avatar_24263e8492/Custom_Avatar_24263e8492.png',
    imageAlt: 'Custom Avatar Creation tool displaying various avatar styles',
    aiHint: 'custom avatar styles',
    title: 'Custom Avatar Creation',
    description: 'Craft your unique avatar using a short video recording.',
  },
  {
    imageSrc: 'https://cdn.prod.website-files.com/63da3362f67ed649a19489ea/681e449df1b1a320a58851f5_Ai%20Studios%20vs%20SceenApp%20Screen%20Recorder%20AI%20ScreenApp%20Alternative.png',
    imageAlt: 'Integrated Screen Capture tool showing screen recording interface',
    aiHint: 'screen capture interface',
    title: 'Integrated Screen Capture',
    description: 'Record your screen, with options to include yourself or an AI avatar.',
  },
  {
    imageSrc: 'https://www.steve.ai/assets/slideshowvideo/hero_section_image.png',
    imageAlt: 'Slides to Video conversion tool displaying presentation slides turning into a video',
    aiHint: 'slides video conversion',
    title: 'Slides to Video',
    description: 'Effortlessly convert presentation slides into dynamic video scenes.',
  },
  {
    imageSrc: 'https://static-alter1.vidnoz.com/system/asset/202408/66beeabb5fa40.jpg',
    imageAlt: 'Image to Talking Avatar tool showing a photo animating into a speaking avatar',
    aiHint: 'photo talking avatar',
    title: 'Image to Talking Avatar',
    description: 'Animate any photograph and make it a speaking avatar.',
  },
];

export const AdvancedAiToolsSection: FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust as needed, e.g., card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="pt-6 md:pt-8 pb-12 md:pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm font-medium text-primary mb-3">
          Our Platform Strengths
        </p>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-foreground mb-12">
          Video Creation Hub Powered by <br />
          Cutting-Edge AI Innovations
        </h2>

        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-card shadow-md hover:bg-accent -ml-4 hidden md:flex active:scale-95 transition-transform"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto pb-6"
          >
            {featureCardsData.map((card) => (
              <Card
                key={card.title}
                className="w-[260px] flex-shrink-0 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <div className="w-full h-[140px] relative">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={card.aiHint}
                  />
                </div>
                <CardContent className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-card shadow-md hover:bg-accent -mr-4 hidden md:flex active:scale-95 transition-transform"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};
