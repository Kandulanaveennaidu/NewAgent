
'use client';

import type { FC } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';

interface CustomAvatarFeature {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  imageSrc: string;
  imageAlt: string;
  aiHint: string;
  imageWidth: number;
  imageHeight: number;
}

const features: CustomAvatarFeature[] = [
  {
    title: "Photo Avatar",
    description:
      "Turn ordinary photos into engaging avatars. Upload a portrait, enter a script, and watch your image come to life.",
    buttonText: "Create Now",
    buttonHref: "#create-photo-avatar",
    imageSrc:
      "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3",
    imageAlt: "AI avatar generated from a photo, depicted as an astronaut.",
    aiHint: "astronaut futuristic",
    imageWidth: 360,
    imageHeight: 200,
  },
  {
    title: "Instant Avatar",
    description:
      "Create a digital twin in minutes: read a script in front of your webcam or upload footage from your smartphone.",
    buttonText: "Create Now",
    buttonHref: "#create-instant-avatar",
    imageSrc:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3",
    imageAlt: "Person creating an instant AI avatar using a webcam and laptop.",
    aiHint: "webcam office",
    imageWidth: 360,
    imageHeight: 200,
  },
  {
    title: "Studio Avatar",
    description:
      "Create a custom full-body avatar for production-grade videos and avatar projects.",
    buttonText: "Contact Us",
    buttonHref: "#contact-studio-avatar",
    imageSrc:
      "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    imageAlt:
      "Studio setup for creating a high-quality AI avatar with green screen.",
    aiHint: "greenscreen studio",
    imageWidth: 360,
    imageHeight: 200,
  },
];

export const CustomAvatarsSection: FC = () => {
  return (
    <section className="pt-6 md:pt-8 pb-8 md:pb-16 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="text-sm font-semibold text-primary mb-2">
          Custom Avatars
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Develop Your Unique AI Persona
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tailor a bespoke AI avatar to perfectly match your brand and video requirements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="flex flex-col overflow-hidden rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out bg-card"
            >
              <CardHeader className="p-6 text-left flex-grow">
                <CardTitle className="text-xl font-semibold text-foreground mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mb-4 min-h-[84px]">
                  {feature.description}
                </CardDescription>
                <Button variant="outline" asChild className="w-fit mt-auto active:scale-95 transition-transform">
                  <a href={feature.buttonHref}>
                    <span className="flex items-center">
                      {feature.buttonText}
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </span>
                  </a>
                </Button>
              </CardHeader>
              <div className="aspect-[360/200] w-full relative">
                <Image
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  fill
                  className="object-cover rounded-b-xl"
                  data-ai-hint={feature.aiHint}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
