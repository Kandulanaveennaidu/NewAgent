
'use client';

import type { FC } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Sparkles } from 'lucide-react';

export const AdvancedCapabilitiesSection: FC = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            More Than Just an <span className="text-primary">AI Video Generator</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            AI Avatar Agent offers more than just video creation. With real-time conversational avatars and deepfake detection, it&apos;s a full suite of AI tools designed to meet all your needs.
          </p>
        </div>

        {/* Real-Time Conversational AI Avatar */}
        <Card className="mb-12 md:mb-16 rounded-xl shadow-xl overflow-hidden bg-card">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-6 md:p-10 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Real-Time Conversational AI Avatar
              </h3>
              <p className="text-muted-foreground mb-3">
                Create realistic, interactive AI experiences that feel like genuine conversations. Our AI Humans are designed to listen, respond, and deliver an authentic conversational experience.
              </p>
              <p className="text-muted-foreground mb-6">
                Chat naturally in over 80 languages and easily connect with your existing systems, including AI agent systems and large language models like ChatGPT.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button variant="outline" size="lg" className="active:scale-95 transition-transform">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
                <Button size="lg" className="active:scale-95 transition-transform">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Request a Demo
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 p-6 md:p-0 flex justify-center md:justify-end">
              <div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=350&h=450&auto=format&fit=crop"
                  alt="Real-time conversational AI avatar"
                  fill
                  className="object-cover"
                  data-ai-hint="avatar chat interface"
                  priority
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Detect Deepfake Media */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md md:max-w-lg aspect-[5/3.5] rounded-lg overflow-hidden shadow-lg">
               <Image
                src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=500&h=350&auto=format&fit=crop"
                alt="Deepfake detection interface"
                fill
                className="object-cover"
                data-ai-hint="deepfake detection faces ui"
                priority
              />
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Detect Deepfake Media Across the Web in Real-Time
            </h3>
            <p className="text-muted-foreground mb-6">
              Be the first to know when deepfakes surface, with instant, round-the-clock alerts.
            </p>
            <div className="space-y-4 mb-8">
              <div className="p-4 border border-border rounded-lg bg-background hover:shadow-md transition-shadow">
                <p className="text-sm text-foreground">
                  Select an individual for round-the-clock monitoring against deepfake appearances across the web.
                </p>
              </div>
              <div className="p-4 border border-border rounded-lg bg-background hover:shadow-md transition-shadow">
                <p className="text-sm text-foreground">
                  Receive immediate notifications when deepfakes of protected individuals are detected, along with regular data reports to track impact & trends.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button variant="outline" size="lg" className="active:scale-95 transition-transform">
                <BookOpen className="mr-2 h-5 w-5" />
                Learn More
              </Button>
              <Button size="lg" className="active:scale-95 transition-transform">
                <Sparkles className="mr-2 h-5 w-5" />
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
