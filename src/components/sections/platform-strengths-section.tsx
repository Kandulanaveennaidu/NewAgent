import type { FC } from "react";
import Image from "next/image";
import { Sparkles, Brain, Clock, Globe } from "lucide-react";

export const PlatformStrengthsSection: FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Video Creation Hub Powered by Cutting-Edge AI Innovations
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Our platform combines the latest advancements in artificial
            intelligence to streamline and enhance your video creation process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <div className="relative h-[400px] md:h-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/platform-dashboard.jpg"
              alt="AI Avatar Agent Platform"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Sparkles size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Advanced AI Avatars</h3>
                <p className="text-muted-foreground">
                  Ultra-realistic AI avatars with natural movements,
                  expressions, and voice synchronization for
                  professional-quality video content.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Brain size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Smart Script Assistant
                </h3>
                <p className="text-muted-foreground">
                  AI-powered writing tools to help craft compelling scripts,
                  suggest improvements, and ensure professional-quality content.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Clock size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Rapid Production</h3>
                <p className="text-muted-foreground">
                  Create professional videos in minutes instead of days, with
                  intuitive editing tools and automated processing.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Globe size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Multilingual Support</h3>
                <p className="text-muted-foreground">
                  Translate and localize your videos into over 80 languages with
                  AI avatars that speak naturally in each language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
