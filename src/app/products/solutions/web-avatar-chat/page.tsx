"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { CheckCircle, Share2, MoreHorizontal } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { useTheme } from "next-themes";
import { TrustedBySection } from "@/components/sections/trusted-by-section";
import { AdvancedAiToolsSection } from "@/components/sections/advanced-ai-tools-section";
import { AiAvatarsSection } from "@/components/sections/ai-avatars-section";
import { CustomAvatarsSection } from "@/components/sections/custom-avatars-section";
import { IntelligentVideoCreationSection } from "@/components/sections/intelligent-video-creation-section";
import { GenerativeAiCapabilitiesSection } from "@/components/sections/generative-ai-capabilities-section";
import { HowToUseSection } from "@/components/sections/how-to-use-section";
import { AiPromptToolsSection } from "@/components/sections/ai-prompt-tools-section";
import { InspirationSection } from "@/components/sections/inspiration-section";
import { TeamsWorkspacesSection } from "@/components/sections/teams-workspaces-section";
import { EnterpriseSection } from "@/components/sections/enterprise-section";
import { AdvancedCapabilitiesSection } from "@/components/sections/advanced-capabilities-section";
import { CustomerStoriesSection } from "@/components/sections/customer-stories-section";

export default function WebAvatarChatPage() {
  const [showDemoAlert, setShowDemoAlert] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const { theme } = useTheme();

  const youtubeVideoId = "qMfDxsdVk3c";

  function playVideo() {
    setShowDemoAlert(true);
    setVideoPlaying(true);
  }

  const isDarkTheme = theme === "dark";

  return (
    <>
      <Header />

      {/* Main Content Section */}
      <main
        className={`min-h-screen py-16 px-4 relative ${
          isDarkTheme
            ? "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
            : "bg-gradient-to-br from-blue-50 to-blue-200"
        }`}
      >
        {/* Blue circle decoration */}
        <div className="absolute right-[-100px] top-[20%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-blue-400 to-blue-500 opacity-30 dark:opacity-20 hidden md:block"></div>

        <div
          className="container max-w-4xl mx-auto flex flex-col items-center justify-center z-10 relative pt-10"
          id="home"
        >
          <div className="text-center">
            <h1
              className={`text-4xl md:text-5xl font-bold mb-8 ${
                isDarkTheme ? "text-blue-300" : "text-blue-700"
              }`}
            >
              AI Customer Service
            </h1>

            <p
              className={`text-base md:text-lg max-w-xl mx-auto mb-12 ${
                isDarkTheme ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Elevate your retail customer experience with AI-powered digital
              avatars that offer personalized shopping assistance and provide
              24/7 customer support, bringing a human touch to online and
              in-store interactions.
            </p>

            <Button
              size="lg"
              onClick={() => {
                const demoSection = document.getElementById("demo");
                demoSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`mb-16 ${
                isDarkTheme
                  ? "bg-blue-600 hover:bg-blue-500"
                  : "bg-blue-600 hover:bg-blue-500"
              }`}
            >
              Book a Free Demo
            </Button>

            {/* Video container */}
            <div
              id="demo"
              className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-black"
            >
              <div className="relative aspect-video">
                {/* YouTube video embed */}
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0`}
                  title="AI Customer Service Virtual Human Kiosk"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                {/* Video overlay and play button that disappear when clicked */}
                {!videoPlaying && (
                  <>
                    {/* Video overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black/50">
                      <div className="text-3xl md:text-4xl text-white font-bold">
                        VIRTUAL HUMAN
                      </div>
                      <div className="text-4xl md:text-5xl text-white font-extrabold mt-1 tracking-wider">
                        KIOSK
                      </div>
                    </div>

                    {/* Video info */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                        ✓
                      </div>
                      <span className="text-white text-sm">
                        I ordered coffee from a virtual human.
                      </span>
                    </div>

                    {/* Share button */}
                    <div className="absolute top-4 right-4 text-white cursor-pointer z-10">
                      <MoreHorizontal className="h-5 w-5" />
                    </div>

                    {/* Play button */}
                    <button
                      onClick={playVideo}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] rounded-full bg-white/90 flex items-center justify-center z-20 hover:bg-white transition-colors"
                    >
                      <div className="w-0 h-0 border-l-[20px] border-l-gray-800 border-y-[12px] border-y-transparent ml-2"></div>
                    </button>

                    {/* YouTube logo */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 z-10">
                      <div className="w-6 h-4 bg-red-600 rounded flex items-center justify-center text-white text-[10px]">
                        ▶
                      </div>
                      <span className="text-white text-sm">Watch on YouTube</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Demo Alert Dialog - YouTube video embed */}
      <AlertDialog
        open={showDemoAlert}
        onOpenChange={(open) => {
          setShowDemoAlert(open);
          if (!open) setVideoPlaying(false);
        }}
      >
        <AlertDialogContent className="max-w-3xl">
          <AlertDialogTitle>AI Customer Service Demo</AlertDialogTitle>
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0&autoplay=1`}
              title="AI Customer Service Virtual Human Kiosk"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex justify-end mt-4">
            <AlertDialogAction>Close</AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
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
      <CustomerStoriesSection />
    </>
  );
}
