
'use client';

import type { FC } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, Play } from 'lucide-react';

interface VideoPreviewData {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  aiHint: string;
  videoSrc: string; // Added videoSrc
}

const videoPreviews: VideoPreviewData[] = [
  {
    id: 'sales-enablement',
    title: 'Sales Enablement',
    imageSrc: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&h=338&auto=format&fit=crop',
    imageAlt: 'Sales enablement video preview',
    aiHint: 'sales presentation',
    videoSrc: 'https://player.vimeo.com/external/438396341.sd.mp4?s=2511c10a6afa8a22c90b078d9f6ded7cbd80c5be&profile_id=164&oauth2_token_id=57447761',
  },
  {
    id: 'academic-lectures',
    title: 'Academic Lectures',
    imageSrc: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&h=338&auto=format&fit=crop',
    imageAlt: 'Academic lectures video preview',
    aiHint: 'lecture presentation',
    videoSrc: 'https://player.vimeo.com/external/391206838.sd.mp4?s=5cd21259c78b44c25bb850c184b30efb88f0a276&profile_id=164&oauth2_token_id=57447761',
  },
  {
    id: 'internal-training',
    title: 'Internal Training',
    imageSrc: 'https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=600&h=338&auto=format&fit=crop',
    imageAlt: 'Internal training video preview',
    aiHint: 'office training',
    videoSrc: 'https://player.vimeo.com/external/422787651.sd.mp4?s=ec39ce0cfcdae7b09dbaa5ee6c084f8b225e7f79&profile_id=164&oauth2_token_id=57447761',
  },
  {
    id: 'marketing-video',
    title: 'Marketing Video',
    imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&h=338&auto=format&fit=crop',
    imageAlt: 'Marketing video preview showing productivity chart',
    aiHint: 'business chart',
    videoSrc: 'https://player.vimeo.com/external/450895404.sd.mp4?s=82f8d334cb8a319e10319cc22a9fa3dc6a0c53b2&profile_id=164&oauth2_token_id=57447761',
  },
];

export const InspirationSection: FC = () => {
  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Left Column: Text Content */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <p className="text-sm font-semibold text-primary mb-2">
              Get Inspired
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Discover Creations from <span className="text-primary">AI Avatar Agent</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              See what our users are making with AI Avatar Agent Studios. From engaging educational content
              to unique personalized messages, these creations showcase the versatile power of our platform.
            </p>
            <Button size="lg" className="active:scale-95 transition-transform">
              <Sparkles className="mr-2 h-5 w-5" />
              Create a Free Video
            </Button>
          </div>

          {/* Right Column: Video Grid */}
          <div className="lg:w-2/3 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {videoPreviews.map((video) => (
                <a key={video.id} href={video.videoSrc} target="_blank" rel="noopener noreferrer" className="block group">
                  <Card
                    className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                    <div className="aspect-video relative">
                      <Image
                        src={video.imageSrc}
                        alt={video.imageAlt}
                        fill
                        className="object-cover"
                        data-ai-hint={video.aiHint}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Play className="h-16 w-16 text-white/80 drop-shadow-lg" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                        <div className="flex items-center gap-2">
                          <Play className="h-5 w-5 text-white" />
                          <h3 className="text-sm font-semibold text-white truncate">
                            {video.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
