
'use client';

import type { FC } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card'; // Using CardContent for simple structure

interface FeatureCardData {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  aiHint: string;
}

interface FeatureGroupData {
  groupTitle: string;
  features: FeatureCardData[];
}

const intelligentFeaturesData: FeatureGroupData[] = [
  {
    groupTitle: 'AI Editor for Training Videos',
    features: [
      {
        title: 'Multi-Avatar Scenes',
        description: 'Simulate interactions between avatars—ideal for training videos and educational content.',
        imageSrc: 'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
        imageAlt: 'Multiple AI avatars collaborating in a virtual meeting space',
        aiHint: 'avatars presentation meeting',
      },
      {
        title: 'Annotations & Effects',
        description: "Add scroll markers to trigger highlight animations, drawing viewers' attention to key information.",
        imageSrc: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3',
        imageAlt: 'Abstract design with colorful shapes and annotation marks',
        aiHint: 'abstract design annotations',
      },
      {
        title: 'Direct Avatar Movements',
        description: 'Dictate avatar movements and gestures to draw focus to key messages in your content.',
        imageSrc: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3',
        imageAlt: 'Close-up of a hand gesturing with motion blur effects',
        aiHint: 'hand gesture motion',
      },
    ],
  },
  {
    groupTitle: 'Translate Videos to 80 Languages',
    features: [
      {
        title: 'Multilanguage Text to Speech',
        description: 'Create AI voiceovers in over 80 languages using our AI voices or your own voice clone.',
        imageSrc: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
        imageAlt: 'Team collaborating around a laptop with world map in background',
        aiHint: 'team collaboration language',
      },
      {
        title: 'Video Dubbing',
        description: 'Upload a video and have it translated with perfect lip-sync.',
        imageSrc: 'https://images.unsplash.com/photo-1520473378652-85d9c4aee6cf?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3',
        imageAlt: 'Vintage microphone in a recording studio, symbolizing voice dubbing',
        aiHint: 'microphone recording studio',
      },
      {
        title: 'Auto Video Translations',
        description: 'Automatically translate your video script and on-screen text as you create.',
        imageSrc: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
        imageAlt: 'Diverse group of people in a business meeting using technology',
        aiHint: 'business meeting translation',
      },
    ],
  },
  {
    groupTitle: 'AI Tools for Video Creators',
    features: [
      {
        title: 'Video Messages',
        description: "Maximize outreach with personalized videos at scale—create one video, and we'll auto-personalize it for each recipient.",
        imageSrc: 'https://images.unsplash.com/photo-1576267423048-15c0040fec78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
        imageAlt: 'Hands holding a smartphone displaying a personalized video message',
        aiHint: 'smartphone video message',
      },
      {
        title: 'Smart Video Highlights',
        description: 'Use AI to transform your lengthy videos into short, shareable clips—perfect for social media platforms.',
        imageSrc: 'https://images.unsplash.com/photo-1610374792793-f016b77ca51a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
        imageAlt: 'Abstract representation of video clips being highlighted and shared',
        aiHint: 'video clips social',
      },
      {
        title: 'Video Scheduler',
        description: 'Automatically generate and schedule videos for social media—set topics and grow your content hands-free.',
        imageSrc: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3',
        imageAlt: 'Social media icons on a smartphone screen with a calendar interface',
        aiHint: 'social media schedule',
      },
    ],
  },
];

export const IntelligentVideoCreationSection: FC = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-sm font-semibold text-primary mb-2">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Comprehensive AI Video Production Tools
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            LumoraAI integrates all essential AI video tools into a single, user-friendly platform, streamlining your creative process.
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {intelligentFeaturesData.map((group) => (
            <div key={group.groupTitle}>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8 text-center md:text-left">
                {group.groupTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {group.features.map((feature) => (
                  <Card 
                    key={feature.title} 
                    className="flex flex-col rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out bg-card overflow-hidden"
                  >
                    <div className="aspect-video relative w-full">
                      <Image
                        src={feature.imageSrc}
                        alt={feature.imageAlt}
                        fill
                        className="object-cover"
                        data-ai-hint={feature.aiHint}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <CardContent className="p-5 md:p-6 flex-grow flex flex-col">
                      <h4 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground flex-grow">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
