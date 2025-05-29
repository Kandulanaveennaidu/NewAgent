"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TrustedBySection } from "@/components/sections/trusted-by-section";
import { AdvancedAiToolsSection } from "@/components/sections/advanced-ai-tools-section";
import { AiAvatarsSection } from "@/components/sections/ai-avatars-section";
import { CustomAvatarsSection } from "@/components/sections/custom-avatars-section";
import { IntelligentVideoCreationSection } from "@/components/sections/intelligent-video-creation-section";
import { GenerativeAiCapabilitiesSection } from "@/components/sections/generative-ai-capabilities-section";
import { HowToUseSection } from "@/components/sections/how-to-use-section";
import { CustomerStoriesSection } from "@/components/sections/customer-stories-section";
import { AdvancedCapabilitiesSection } from "@/components/sections/advanced-capabilities-section";
import { EnterpriseSection } from "@/components/sections/enterprise-section";
import { TeamsWorkspacesSection } from "@/components/sections/teams-workspaces-section";
import { InspirationSection } from "@/components/sections/inspiration-section";
import { AiPromptToolsSection } from "@/components/sections/ai-prompt-tools-section";

export default function TVNewsPage() {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [activeTab, setActiveTab] = useState("templates");
  const [activeAvatar, setActiveAvatar] = useState("Mike");
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [avatarModalOpen, setAvatarModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [newsContent, setNewsContent] = useState({
    headline: "Breaking: AI Technology Revolutionizes Video Creation",
    content:
      "In a groundbreaking development, new AI-powered tools are enabling content creators to produce professional-quality news videos in minutes rather than hours. This technology promises to democratize video production and transform how breaking news is delivered to audiences worldwide.",
  });

  const avatars = [
    { name: "John", emoji: "👨" },
    { name: "Sarah", emoji: "👩" },
    { name: "Mike", emoji: "👨‍💼" },
    { name: "Lisa", emoji: "👩‍💼" },
    { name: "David", emoji: "👨‍🏫" },
    { name: "Emma", emoji: "👩‍🏫" },
  ];

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = soundOn;
      setSoundOn(!soundOn);
    }
  };

  const createVideo = () => {
    // Implementation would go here
    setTimeout(() => {
      setCreateModalOpen(false);
      showSuccessMessage("Video generated successfully!");
    }, 2000);
  };

  const bookDemo = () => {
    // Implementation would go here
    setTimeout(() => {
      setDemoModalOpen(false);
      showSuccessMessage(
        "Demo scheduled successfully! Check your email for confirmation."
      );
    }, 2000);
  };

  const createCustomAvatar = () => {
    // Implementation would go here
    setTimeout(() => {
      setAvatarModalOpen(false);
      showSuccessMessage("Custom avatar created successfully!");
    }, 2000);
  };

  const showSuccessMessage = (message: string) => {
    const successDiv = document.createElement("div");
    successDiv.className =
      "fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 font-semibold";
    successDiv.textContent = message;
    document.body.appendChild(successDiv);

    setTimeout(() => {
      successDiv.classList.add(
        "opacity-0",
        "transition-opacity",
        "duration-300"
      );
      setTimeout(() => {
        document.body.removeChild(successDiv);
      }, 300);
    }, 3000);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 overflow-x-hidden">
        <div className="flex flex-col md:flex-row min-h-[calc(100vh-64px)]">
          {/* Left panel */}
          <div className="flex-1 p-6 md:p-10 lg:p-16 flex flex-col justify-center animate-[fadeInUp_0.6s_ease-out]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-5">
              Create, Edit, and Share
              <br />
              <span className="text-blue-500">Breaking News Videos</span>
              <br />
              95% Faster
            </h1>

            <ul className="list-none mb-10 space-y-3">
              <li className="text-gray-700 relative pl-5 before:content-['•'] before:text-blue-500 before:font-bold before:absolute before:left-0">
                Turn <strong>text</strong> into engaging{" "}
                <strong>news videos</strong> in minutes
              </li>
              <li className="text-gray-700 relative pl-5 before:content-['•'] before:text-blue-500 before:font-bold before:absolute before:left-0">
                Create an <strong>AI Avatar</strong> to deliver your news
                updates in 110+ languages
              </li>
              <li className="text-gray-700 relative pl-5 before:content-['•'] before:text-blue-500 before:font-bold before:absolute before:left-0">
                No experience needed to create{" "}
                <strong>studio-quality videos</strong>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                onClick={() => setCreateModalOpen(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white py-6 px-8 rounded-lg text-lg font-semibold transition hover:-translate-y-1 hover:shadow-xl"
              >
                Get Started - it's free
              </Button>
              <Button
                variant="outline"
                onClick={() => setDemoModalOpen(true)}
                className="bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-500 hover:text-blue-500 py-6 px-8 rounded-lg text-lg font-semibold transition hover:-translate-y-1"
              >
                Book a demo
              </Button>
            </div>
          </div>

          {/* Right panel - Editor interface */}
          <div className="flex-1 bg-gray-900 flex flex-col">
            <div className="flex flex-1 h-full">
              {/* Sidebar */}
              <div className="w-[80px] bg-gray-800 hidden md:flex flex-col items-center py-6 gap-5">
                {["📱", "🖼️", "📝", "🎵", "✨", "📤"].map((icon, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-12 h-12 rounded-lg flex items-center justify-center text-xl transition hover:bg-blue-500 hover:text-white",
                      index === 0
                        ? "bg-blue-500 text-white"
                        : "bg-gray-700 text-gray-200"
                    )}
                  >
                    {icon}
                  </button>
                ))}
              </div>

              {/* Avatar panel */}
              <div className="hidden lg:block bg-gray-800 w-80 p-5 border-r border-gray-700">
                <h3 className="text-lg font-semibold text-gray-200 mb-5">
                  AI Avatar
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {avatars.map((avatar) => (
                    <button
                      key={avatar.name}
                      onClick={() => setActiveAvatar(avatar.name)}
                      className={cn(
                        "bg-gray-700 rounded-lg p-4 text-center cursor-pointer transition hover:border-blue-500 hover:bg-gray-600 border-2 border-transparent",
                        activeAvatar === avatar.name &&
                          "border-blue-500 bg-blue-500"
                      )}
                    >
                      <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-2xl mx-auto mb-2">
                        {avatar.emoji}
                      </div>
                      <div className="text-gray-200 text-sm">{avatar.name}</div>
                    </button>
                  ))}
                </div>

                <Button
                  onClick={() => setAvatarModalOpen(true)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Create Avatar
                </Button>
              </div>

              {/* Main editor */}
              <div className="flex-1 flex flex-col">
                {/* Editor header */}
                <div className="bg-gray-800 p-4 border-b border-gray-700 flex justify-between items-center">
                  <div className="text-gray-200 font-medium">
                    Breaking News Studio
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-gray-700 text-gray-200"
                    >
                      Preview
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-gray-700 text-gray-200"
                    >
                      Export
                    </Button>
                  </div>
                </div>

                {/* Video preview */}
                <div className="flex-1 bg-gray-900 flex items-center justify-center relative p-4">
                  <div className="relative w-full max-w-2xl aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl overflow-hidden shadow-2xl">
                    {/* Use the provided video */}
                    <video
                      ref={videoRef}
                      className="absolute inset-0 w-full h-full object-cover z-10"
                      src="https://renew.deepbrainai.io/renewal_resources/videos/Solutions/02_Change.mp4"
                      playsInline
                      loop
                      muted={!soundOn}
                      autoPlay
                      preload="auto"
                      onContextMenu={(e) => e.preventDefault()}
                    />

                    <div className="absolute inset-0 z-20 pointer-events-none">
                      {/* News content overlay - positioned over the video */}
                      <div className="absolute left-10 top-10 right-[260px] bottom-10 bg-white/90 rounded-lg p-6 backdrop-blur shadow-lg">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 leading-snug">
                          {newsContent.headline}
                        </h2>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                          {newsContent.content}
                        </p>
                      </div>
                    </div>

                    {/* Sound control */}
                    <button
                      onClick={toggleSound}
                      className="absolute bottom-5 right-5 z-30 bg-white/20 backdrop-blur rounded-full px-5 py-3 text-white flex items-center gap-2 hover:bg-white/30 transition-all"
                    >
                      {soundOn ? "🔊 Sound" : "🔇 Muted"}
                    </button>
                  </div>

                  {/* Floating panels */}
                  <div className="absolute top-5 right-5 flex flex-col gap-2">
                    <div className="bg-gray-800/95 backdrop-blur rounded-lg p-4 text-gray-200 min-w-[150px]">
                      <strong>Duration:</strong> 0:45
                    </div>
                    <div className="bg-gray-800/95 backdrop-blur rounded-lg p-4 text-gray-200 min-w-[150px]">
                      <strong>Language:</strong> English
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="bg-gray-800 p-4">
                  <div className="bg-gray-700 h-[60px] rounded-lg relative overflow-hidden">
                    <div className="flex h-full">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full m-1 rounded flex items-center justify-center text-white text-sm font-medium w-[30%]">
                        Intro
                      </div>
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full m-1 rounded flex items-center justify-center text-white text-sm font-medium w-[50%]">
                        Main Content
                      </div>
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full m-1 rounded flex items-center justify-center text-white text-sm font-medium w-[20%]">
                        Outro
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Create Video Modal */}
      <Dialog open={createModalOpen} onOpenChange={setCreateModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">
              Create Your Breaking News Video
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-6 py-4">
            <div className="grid gap-2">
              <Label htmlFor="newsHeadline">News Headline</Label>
              <Input
                id="newsHeadline"
                placeholder="Enter your breaking news headline..."
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="newsContent">News Content</Label>
              <Textarea
                id="newsContent"
                placeholder="Enter the full news story content..."
                className="min-h-[120px]"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="videoDuration">Video Duration</Label>
              <Select defaultValue="60">
                <SelectTrigger id="videoDuration">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30">30 seconds</SelectItem>
                  <SelectItem value="60">1 minute</SelectItem>
                  <SelectItem value="120">2 minutes</SelectItem>
                  <SelectItem value="300">5 minutes</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="videoLanguage">Language</Label>
              <Select defaultValue="en">
                <SelectTrigger id="videoLanguage">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                  <SelectItem value="it">Italian</SelectItem>
                  <SelectItem value="pt">Portuguese</SelectItem>
                  <SelectItem value="ru">Russian</SelectItem>
                  <SelectItem value="zh">Chinese</SelectItem>
                  <SelectItem value="ja">Japanese</SelectItem>
                  <SelectItem value="ko">Korean</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="button" onClick={createVideo}>
              Generate Video
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Book Demo Modal */}
      <Dialog open={demoModalOpen} onOpenChange={setDemoModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">
              Book a Demo
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-6 py-4">
            <div className="grid gap-2">
              <Label htmlFor="demoName">Full Name</Label>
              <Input id="demoName" placeholder="Enter your full name" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="demoEmail">Email Address</Label>
              <Input
                id="demoEmail"
                type="email"
                placeholder="Enter your email address"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="demoCompany">Company</Label>
              <Input id="demoCompany" placeholder="Enter your company name" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="demoTime">Preferred Demo Time</Label>
              <Select>
                <SelectTrigger id="demoTime">
                  <SelectValue placeholder="Select preferred time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                  <SelectItem value="afternoon">
                    Afternoon (1PM - 5PM)
                  </SelectItem>
                  <SelectItem value="evening">Evening (6PM - 8PM)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="demoMessage">Message (Optional)</Label>
              <Textarea
                id="demoMessage"
                placeholder="Tell us about your needs..."
                className="min-h-[100px]"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="button" onClick={bookDemo}>
              Schedule Demo
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Create Avatar Modal */}
      <Dialog open={avatarModalOpen} onOpenChange={setAvatarModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">
              Create Custom Avatar
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-6 py-4">
            <div className="grid gap-2">
              <Label htmlFor="avatarName">Avatar Name</Label>
              <Input id="avatarName" placeholder="Enter avatar name" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="avatarGender">Gender</Label>
              <Select defaultValue="male">
                <SelectTrigger id="avatarGender">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="neutral">Neutral</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="avatarAge">Age Range</Label>
              <Select defaultValue="middle">
                <SelectTrigger id="avatarAge">
                  <SelectValue placeholder="Select age range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="young">Young (20-30)</SelectItem>
                  <SelectItem value="middle">Middle-aged (30-50)</SelectItem>
                  <SelectItem value="mature">Mature (50+)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="avatarStyle">Professional Style</Label>
              <Select defaultValue="news">
                <SelectTrigger id="avatarStyle">
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="news">News Anchor</SelectItem>
                  <SelectItem value="business">
                    Business Professional
                  </SelectItem>
                  <SelectItem value="casual">Casual Presenter</SelectItem>
                  <SelectItem value="academic">Academic</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="button" onClick={createCustomAvatar}>
              Generate Avatar
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
       <TrustedBySection/>
            <AdvancedAiToolsSection/>
            <AiAvatarsSection/>
            <CustomAvatarsSection/>
            <IntelligentVideoCreationSection/>
            <GenerativeAiCapabilitiesSection/>
            <HowToUseSection/>
            <AiPromptToolsSection/>
            <InspirationSection/>
            <TeamsWorkspacesSection/>
            <EnterpriseSection/>
            <AdvancedCapabilitiesSection/>
            <CustomerStoriesSection/>
    </>
  );
}
