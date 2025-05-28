
'use client';

import type { FC } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

interface Testimonial {
  id: string;
  logoType: 'text' | 'image';
  logoContent: string;
  logoAlt?: string;
  aiHint?: string;
  quote: string;
  companyName: string;
  personName: string;
  personRole: string;
  logoBgClass?: string;
  logoTextClass?: string;
  logoWidth?: number;
  logoHeight?: number;
}

const testimonialsData: Testimonial[] = [
  {
    id: 'ainews',
    logoType: 'text',
    logoContent: 'AiNews.com',
    logoBgClass: 'bg-black',
    logoTextClass: 'text-white font-semibold text-sm',
    quote:
      'It used to take me four different programs and 2 to 3 hours to create one video, but now I can do it within half an hour with AI Avatar Agent. That has been a game changer for me - the time saving and ease of use are incredible.',
    companyName: 'AiNews.com',
    personName: 'Alicia Shapiro',
    personRole: 'CMO',
  },
  {
    id: 'microsoft',
    logoType: 'image',
    logoContent: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
    logoAlt: 'Microsoft Logo',
    aiHint: 'Microsoft logo',
    logoWidth: 120,
    logoHeight: 30,
    quote:
      "AI Avatar Agent's focus on creating realistic AI avatars enable businesses to automate and enhance customer interactions and increase operational efficiency.",
    companyName: 'Microsoft',
    personName: 'Digital Strategy Lead',
    personRole: '',
  },
  {
    id: 'lenovo',
    logoType: 'image',
    logoContent: 'https://cdn.prod.website-files.com/63da3362f67ed6f71c9489c1/64e5552163a54a2e3f51062c_Lenovo-Logo%201.png',
    logoAlt: 'Lenovo Logo',
    aiHint: 'Lenovo logo red',
    logoWidth: 100,
    logoHeight: 35,
    quote:
      'Lenovo is partnering with AI Avatar Agent to use their AI Human with powerful large language models (LLMs) to deliver a 24/7 automated concierge service in hospitality and retail settings.',
    companyName: 'Lenovo',
    personName: 'Global AI Business Leader',
    personRole: '',
  },
];

export const CustomerStoriesSection: FC = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            AI Avatar Agent Makes Video Creation <span className="text-primary">Better for Everyone</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            But don&apos;t just take our word for it—check out what our customers have to say.
          </p>
          <Button size="lg" className="active:scale-95 transition-transform">
            <Users className="mr-2 h-5 w-5" />
            Explore Customer Stories
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonialsData.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-card flex flex-col p-6"
            >
              <div className="mb-4 h-[35px] flex items-center"> {/* Added fixed height and flex align */}
                {testimonial.logoType === 'text' ? (
                  <div className={`inline-block px-3 py-1 rounded ${testimonial.logoBgClass}`}>
                    <span className={`${testimonial.logoTextClass}`}>{testimonial.logoContent}</span>
                  </div>
                ) : (
                  <Image
                    src={testimonial.logoContent}
                    alt={testimonial.logoAlt || `${testimonial.companyName} Logo`}
                    width={testimonial.logoWidth || 80}
                    height={testimonial.logoHeight || 30}
                    className="object-contain max-h-[30px]" // Added max-h
                    data-ai-hint={testimonial.aiHint}
                  />
                )}
              </div>
              <CardContent className="p-0 flex-grow">
                <p className="text-muted-foreground text-sm mb-4">
                  &quot;{testimonial.quote}&quot;
                </p>
              </CardContent>
              <div className="mt-auto pt-4 border-t border-border/50">
                <p className="text-sm font-semibold text-foreground">{testimonial.companyName}</p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.personName}{testimonial.personRole ? `, ${testimonial.personRole}` : ''}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
