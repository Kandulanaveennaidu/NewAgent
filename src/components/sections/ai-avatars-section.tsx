
'use client';

import type { FC } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

interface AvatarData {
  id: string;
  name: string;
  imageSrc: string;
  aiHint: string;
}

const avatarsData: AvatarData[] = [
  {
    id: "melenie",
    name: "Melenie",
    imageSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    aiHint: "avatar person",
  },
  {
    id: "sara1",
    name: "Sara",
    imageSrc:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    aiHint: "avatar person",
  },
  {
    id: "melvin",
    name: "Melvin",
    imageSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    aiHint: "avatar person",
  },
  {
    id: "griffen",
    name: "Griffen",
    imageSrc:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    aiHint: "avatar person",
  },
  {
    id: "eva",
    name: "Eva",
    imageSrc:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3",
    aiHint: "avatar person",
  },
  {
    id: "paige",
    name: "Paige",
    imageSrc:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    aiHint: "avatar person",
  },
  {
    id: "sharon",
    name: "Sharon",
    imageSrc:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3",
    aiHint: "avatar person",
  },
  {
    id: "adriel",
    name: "Adriel",
    imageSrc:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3",
    aiHint: "avatar person",
  },
  {
    id: "reese",
    name: "Reese",
    imageSrc:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3",
    aiHint: "avatar person",
  },
  {
    id: "sara2",
    name: "Sara",
    imageSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3",
    aiHint: "avatar person",
  },
  {
    id: "samantha1",
    name: "Samantha",
    imageSrc:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3",
    aiHint: "avatar person",
  },
  {
    id: "will",
    name: "Will",
    imageSrc:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    aiHint: "avatar person",
  },
  {
    id: "phillip",
    name: "Phillip",
    imageSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    aiHint: "avatar person",
  },
  {
    id: "samantha2",
    name: "Samantha",
    imageSrc:
      "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3",
    aiHint: "avatar person",
  },
];


const row1Avatars = avatarsData.slice(0, 7);
const row2Avatars = avatarsData.slice(7, 14);

const duplicatedRow1Avatars = [...row1Avatars, ...row1Avatars];
const duplicatedRow2Avatars = [...row2Avatars, ...row2Avatars];


export const AiAvatarsSection: FC = () => {
  return (
    <section className="pt-2 md:pt-4 pb-8 md:pb-16 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="text-sm font-medium text-primary mb-2">
          Forge Deeper Connections with Your Audience
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Choose from Over 150 <span className="text-primary">Diverse AI Avatars</span>
        </h2>
        <Button size="lg" className="mb-12 active:scale-95 transition-transform">
          <Users className="mr-2 h-5 w-5" />
          Explore All Avatars
        </Button>

        {/* Row 1 - Scrolls Right */}
        <div className="overflow-hidden w-full group mb-4">
          <div className="flex animate-marquee-right group-hover:pause-animation whitespace-nowrap py-2">
            {duplicatedRow1Avatars.map((avatar, index) => (
              <div
                key={`${avatar.id}-row1-${index}`}
                className="relative aspect-[5/7] w-36 mx-2 flex-shrink-0 rounded-lg overflow-hidden group/avatar bg-muted/50 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={avatar.imageSrc}
                  alt={avatar.name}
                  fill
                  className="object-cover group-hover/avatar:scale-105 transition-transform duration-300"
                  data-ai-hint={avatar.aiHint}
                  sizes="(max-width: 768px) 144px, 144px"
                />
                <div className="absolute bottom-2.5 left-1/2 transform -translate-x-1/2 w-[calc(100%-1rem)]">
                  <div className="bg-card/80 backdrop-blur-sm text-card-foreground py-1.5 px-3 rounded-md shadow">
                    <p className="text-xs font-medium text-center truncate">
                      {avatar.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolls Left */}
        <div className="overflow-hidden w-full group">
          <div className="flex animate-marquee-left group-hover:pause-animation whitespace-nowrap py-2">
            {duplicatedRow2Avatars.map((avatar, index) => (
              <div
                key={`${avatar.id}-row2-${index}`}
                className="relative aspect-[5/7] w-36 mx-2 flex-shrink-0 rounded-lg overflow-hidden group/avatar bg-muted/50 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={avatar.imageSrc}
                  alt={avatar.name}
                  fill
                  className="object-cover group-hover/avatar:scale-105 transition-transform duration-300"
                  data-ai-hint={avatar.aiHint}
                  sizes="(max-width: 768px) 144px, 144px"
                />
                <div className="absolute bottom-2.5 left-1/2 transform -translate-x-1/2 w-[calc(100%-1rem)]">
                  <div className="bg-card/80 backdrop-blur-sm text-card-foreground py-1.5 px-3 rounded-md shadow">
                    <p className="text-xs font-medium text-center truncate">
                      {avatar.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
