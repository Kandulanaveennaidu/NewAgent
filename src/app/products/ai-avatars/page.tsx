"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import Link from "next/link";
import { TrustedBySection } from "@/components/sections/trusted-by-section";
import { AdvancedAiToolsSection } from "@/components/sections/advanced-ai-tools-section";
import { AiAvatarsSection } from "@/components/sections/ai-avatars-section";
import { CustomAvatarsSection } from "@/components/sections/custom-avatars-section";
import { IntelligentVideoCreationSection } from "@/components/sections/intelligent-video-creation-section";
import { GenerativeAiCapabilitiesSection } from "@/components/sections/generative-ai-capabilities-section";
import { HowToUseSection } from "@/components/sections/how-to-use-section";
import { AiPromptToolsSection } from "@/components/sections/ai-prompt-tools-section";
import { Inspiration } from "next/font/google";
import { InspirationSection } from "@/components/sections/inspiration-section";
import { TeamsWorkspacesSection } from "@/components/sections/teams-workspaces-section";
import { EnterpriseSection } from "@/components/sections/enterprise-section";
import { AdvancedCapabilitiesSection } from "@/components/sections/advanced-capabilities-section";
import { CustomerStoriesSection } from "@/components/sections/customer-stories-section";
import { Footer } from "@/components/layout/footer"; // Import Footer from your app components

export default function AIAvatarsPage() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoUrl =
    "https://moneybrain-homepage.s3.ap-northeast-2.amazonaws.com/renewal_resources/videos/common/avatar_main.mp4";

  // Updated video loading and continuous play logic
  useEffect(() => {
    // Remove async from loadVideo function
    const loadVideo = () => {
      try {
        const videoElement = videoRef.current;
        if (!videoElement) return () => {}; // Return empty function if no video element

        console.log("Attempting to load video...");

        // Add event listeners for different stages of loading
        const handleMetadataLoaded = () => {
          console.log("Video metadata loaded");
        };

        const handleDataLoaded = () => {
          console.log("Video data loaded");
          setVideoLoaded(true);

          // Always try to play the video when data is loaded
          playVideo(videoElement);
        };

        const handlePlaying = () => {
          console.log("Video is playing");
          setVideoLoaded(true);
        };

        const handleError = () => {
          console.error("Video error event");
          setVideoError(true);
        };

        // Ensure video keeps playing even if it ends (backup for loop attribute)
        const handleEnded = () => {
          console.log("Video ended - restarting");
          videoElement.currentTime = 0;
          playVideo(videoElement);
        };

        // Add listener for if playback is paused for any reason
        const handlePause = () => {
          console.log("Video paused - attempting to resume");
          // Small timeout to avoid conflicts with other operations
          setTimeout(() => playVideo(videoElement), 300);
        };

        videoElement.addEventListener("loadedmetadata", handleMetadataLoaded);
        videoElement.addEventListener("loadeddata", handleDataLoaded);
        videoElement.addEventListener("playing", handlePlaying);
        videoElement.addEventListener("error", handleError);
        videoElement.addEventListener("ended", handleEnded);
        videoElement.addEventListener("pause", handlePause);

        // Set source and trigger load
        videoElement.src = videoUrl;
        videoElement.load();

        // Function to attempt playing the video
        function playVideo(video: HTMLVideoElement) {
          video.play().catch((err) => {
            console.log("Autoplay prevented:", err);
            // Still consider the video as loaded even if autoplay fails
            setVideoLoaded(true);
          });
        }

        // Periodic check to ensure video is playing
        const playbackChecker = setInterval(() => {
          if (videoElement && !videoElement.paused && videoElement.readyState >= 3) {
            // Video is playing fine
          } else if (videoElement && videoElement.readyState >= 3) {
            console.log("Video not playing - attempting restart");
            playVideo(videoElement);
          }
        }, 5000);

        // Return a proper cleanup function directly
        return () => {
          clearInterval(playbackChecker);
          videoElement.removeEventListener("loadedmetadata", handleMetadataLoaded);
          videoElement.removeEventListener("loadeddata", handleDataLoaded);
          videoElement.removeEventListener("playing", handlePlaying);
          videoElement.removeEventListener("error", handleError);
          videoElement.removeEventListener("ended", handleEnded);
          videoElement.removeEventListener("pause", handlePause);
        };
      } catch (error) {
        console.error("Error loading video:", error);
        setVideoError(true);
        return () => {}; // Return empty cleanup function in case of error
      }
    };

    // Call loadVideo directly - it now returns a function
    const cleanup = loadVideo();

    // Return the cleanup function
    return () => {
      // Now cleanup is guaranteed to be a function
      if (cleanup) cleanup();

      const videoElement = videoRef.current;
      if (videoElement) {
        videoElement.pause();
        videoElement.removeAttribute("src");
        videoElement.load();
      }
    };
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !soundEnabled;
    }
    setSoundEnabled(!soundEnabled);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700">
      {/* Animated background pattern */}
      <div
        className="absolute inset-0 animate-[backgroundMove_20s_ease-in-out_infinite]"
        style={{
          background: `
               radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%),
               radial-gradient(circle at 80% 70%, rgba(255,255,255,0.05) 0%, transparent 50%),
               linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.03) 50%, transparent 60%)
             `,
        }}
      ></div>

      <div className="container relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-20 px-4 py-16 md:flex-row md:px-6 lg:px-10">
        <div className="flex-1 max-w-md">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl">
            AI Avatars
          </h1>
          <p className="mb-10 text-lg font-normal leading-relaxed text-white/90">
            Give your videos & AI projects a natural, human touch with
            customizable digital avatars that move and speak realistically.
          </p>
          <Link href="/auth/login">
            <Button className="group bg-white/15 border-2 border-white/30 text-white hover:bg-white/25 hover:border-white/50 backdrop-blur transition-all hover:translate-y-[-2px] hover:shadow-xl">
              Try AI Studios -- For Free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="flex-1 max-w-2xl w-full">
          <div className="relative overflow-hidden rounded-[20px] border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <div className="relative bg-black min-h-[350px] flex items-center justify-center overflow-hidden">
              {/* Video loading placeholder */}
              {!videoLoaded && !videoError && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-500">
                  <div className="text-white text-lg font-semibold">
                    Loading video...
                  </div>
                </div>
              )}

              {/* Video error state */}
              {videoError && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-br from-red-400 to-purple-500">
                  <div className="text-white text-lg font-semibold px-4 text-center">
                    Sorry, there was an error loading the video. Please try
                    refreshing the page.
                  </div>
                </div>
              )}

              {/* Video element with attributes to ensure continuous play */}
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                src={videoUrl}
                playsInline
                loop
                muted
                autoPlay
                preload="auto"
                onContextMenu={(e) => e.preventDefault()}
              />

              {/* Video overlay gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `
                    linear-gradient(
                      90deg,
                      rgba(0,0,0,0.3) 0%,
                      transparent 30%,
                      transparent 70%,
                      rgba(0,0,0,0.3) 100%
                    )
                  `,
                  zIndex: 2,
                }}
              />

              {/* Sound toggle button */}
              <button
                onClick={toggleSound}
                className="absolute bottom-5 right-5 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white/90 shadow-md transition-all hover:bg-white hover:scale-110"
              >
                {soundEnabled ? (
                  <Volume2 className="h-5 w-5 text-gray-600" />
                ) : (
                  <VolumeX className="h-5 w-5 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
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
      {/* <Footer/> */}
    </div>
  );
}
