
// src/components/sections/trusted-by-section.tsx
'use client';

import type { FC } from 'react';
import Image from 'next/image';

interface LogoInfo {
  name: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  aiHint: string;
}

const commonHeight = 32; // Corresponds to h-8 in Tailwind

const logos: LogoInfo[] = [
  {
    name: "Intel",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg",
    alt: "Intel Logo",
    width: 80,
    height: commonHeight,
    aiHint: "Intel company",
  },
  {
    name: "AWS",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    alt: "AWS Logo",
    width: 60,
    height: commonHeight,
    aiHint: "AWS amazon",
  },
  {
    name: "BMW",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    alt: "BMW Logo",
    width: 40,
    height: commonHeight,
    aiHint: "BMW car",
  },
  // {
  //   name: "Accenture",
  //   src: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
  //   alt: "Accenture Logo",
  //   width: 140,
  //   height: commonHeight,
  //   aiHint: "Accenture consulting",
  // },
  {
    name: "Fox News",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/95/FOX_wordmark-red.svg",
    alt: "Fox News Logo",
    width: 100,
    height: commonHeight,
    aiHint: "Fox News media",
  },
  {
    name: "Toyota",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg",
    alt: "Toyota Logo",
    width: 100,
    height: commonHeight,
    aiHint: "Toyota car",
  },
  // Previous logos can be added here if needed or removed
];


export const TrustedBySection: FC = () => {
  const duplicatedLogos = [...logos, ...logos, ...logos]; // Duplicate for seamless scroll, increased for more logos

  return (
    <section className="pt-28 pb-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center text-sm font-medium text-muted-foreground mb-6">
          Join Over 2 Million Satisfied Creators
        </h2>
        <div className="overflow-hidden w-full group">
          <div className="flex animate-marquee-left group-hover:pause-animation whitespace-nowrap py-4">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`} // Ensure unique keys for duplicated items
                className="flex-shrink-0 mx-5 md:mx-7 lg:mx-8 transition-all duration-300 ease-in-out opacity-75 hover:opacity-100"
                title={logo.name}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain h-8 filter grayscale hover:filter-none dark:filter-none"
                  data-ai-hint={logo.aiHint}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
