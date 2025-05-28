
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { VideoPreviewSection } from '@/components/sections/video-preview-section';
import { TrustedBySection } from '@/components/sections/trusted-by-section';
import { AdvancedAiToolsSection } from '@/components/sections/advanced-ai-tools-section';
import { AiAvatarsSection } from '@/components/sections/ai-avatars-section';
import { CustomAvatarsSection } from '@/components/sections/custom-avatars-section';
import { HowToUseSection } from '@/components/sections/how-to-use-section';
import { InspirationSection } from '@/components/sections/inspiration-section';
import { IntelligentVideoCreationSection } from '@/components/sections/intelligent-video-creation-section';
import { GenerativeAiCapabilitiesSection } from '@/components/sections/generative-ai-capabilities-section';
import { AiPromptToolsSection } from '@/components/sections/ai-prompt-tools-section';
import { TeamsWorkspacesSection } from '@/components/sections/teams-workspaces-section';
import { EnterpriseSection } from '@/components/sections/enterprise-section';
import { AdvancedCapabilitiesSection } from '@/components/sections/advanced-capabilities-section';
import { CustomerStoriesSection } from '@/components/sections/customer-stories-section';
import { FaqSection } from '@/components/sections/faq-section';
import { FloatingChatButton } from '@/components/floating-chat-button';
import { NewsAndUpdatesSection } from '@/components/sections/news-and-updates-section';
import { CallToActionSection } from '@/components/sections/call-to-action-section';
import { Rocket } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center px-4 pt-16 pb-4 text-center md:px-6 min-h-[90vh] overflow-hidden">
          
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover -z-20"
            src="https://videos.pexels.com/video-files/29718232/12778084_1920_1080_30fps.mp4"
          >
            Your browser does not support the video tag.
          </video>
          
          {/* Overlay for text readability over video */}
          <div className="absolute inset-0 bg-black/50 -z-10"></div>

          <div className="max-w-3xl z-10 animate-in fade-in-0 slide-in-from-bottom-12 duration-1000 ease-out relative">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl animate-in fade-in-0 slide-in-from-bottom-2 duration-700 delay-200 ease-out filter drop-shadow-lg">
              Produce Compelling Videos from Text with <span className="text-primary">AI Avatar Agent Studio</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-100/90 md:text-xl animate-in fade-in-0 slide-in-from-bottom-2 duration-700 delay-400 ease-out filter drop-shadow-md">
              Craft professional-grade videos effortlessly using AI avatars and voiceovers in over 80 languages, all from your script.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-in fade-in-0 slide-in-from-bottom-2 duration-700 delay-600 ease-out">
              <Button
                asChild
                size="lg"
                className="text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold
                           active:scale-95 transition-all duration-150 shadow-lg hover:shadow-primary/40
                           transform hover:-translate-y-0.5"
              >
                <Link href="/auth/login">
                  <Rocket className="mr-2 h-5 w-5" />
                  Begin Your Free Video Creation
                </Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-neutral-100/80 animate-in fade-in-0 slide-in-from-bottom-2 duration-700 delay-800 ease-out filter drop-shadow-sm">
              Unlimited Video Generation | No Credit Card Needed
            </p>
            <div className="mt-8 md:mt-10 w-full px-0 md:px-4">
              <VideoPreviewSection />
            </div>
          </div>
        </section>

        <TrustedBySection />
        <AdvancedAiToolsSection />
        <AiAvatarsSection />
        <CustomAvatarsSection />
        <IntelligentVideoCreationSection />
        <GenerativeAiCapabilitiesSection />
        <HowToUseSection />
        <AiPromptToolsSection />
        <InspirationSection />
        <TeamsWorkspacesSection />
        <EnterpriseSection />
        <AdvancedCapabilitiesSection />

        <section className="pt-10 md:pt-12 pb-0 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                We&apos;re Here to Answer All Your Questions
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                If you&apos;re new to AI Avatar Agent or looking to supercharge your video
                creation workflow, our resources below will help you learn more about
                our features and see what others have built.
              </p>
            </div>
          </div>
        </section>

        <CustomerStoriesSection />
        <FaqSection />
        <NewsAndUpdatesSection />
        <CallToActionSection />

      </main>
      <Footer />
      <FloatingChatButton />
    </div>
  );
}
