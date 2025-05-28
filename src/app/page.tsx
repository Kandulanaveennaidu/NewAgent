"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { VideoPreviewSection } from "@/components/sections/video-preview-section";
import { TrustedBySection } from "@/components/sections/trusted-by-section";
import { AdvancedAiToolsSection } from "@/components/sections/advanced-ai-tools-section";
import { AiAvatarsSection } from "@/components/sections/ai-avatars-section";
import { CustomAvatarsSection } from "@/components/sections/custom-avatars-section";
import { HowToUseSection } from "@/components/sections/how-to-use-section";
import { InspirationSection } from "@/components/sections/inspiration-section";
import { IntelligentVideoCreationSection } from "@/components/sections/intelligent-video-creation-section";
import { GenerativeAiCapabilitiesSection } from "@/components/sections/generative-ai-capabilities-section";
import { AiPromptToolsSection } from "@/components/sections/ai-prompt-tools-section";
import { TeamsWorkspacesSection } from "@/components/sections/teams-workspaces-section";
import { EnterpriseSection } from "@/components/sections/enterprise-section";
import { AdvancedCapabilitiesSection } from "@/components/sections/advanced-capabilities-section";
import { CustomerStoriesSection } from "@/components/sections/customer-stories-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FloatingChatButton } from "@/components/floating-chat-button";
import { NewsAndUpdatesSection } from "@/components/sections/news-and-updates-section";
import { CallToActionSection } from "@/components/sections/call-to-action-section";
import { Rocket } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Track mouse position for interaction effects
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    // Animation parameters - initialize all objects upfront
    let time = 0;
    let sphere = {
      x: 0,
      y: 0,
      radius: 0,
      rotation: 0,
      rotationSpeed: 0.005,
      pulse: 0,
      pulseSpeed: 0.02,
    };
    let dataStreams = [];
    let particles = [];
    let nebulaLayers = [];

    // Color palette
    const colors = {
      darkNavy: "#0D0D1A",
      deeperNavy: "#05050F",
      skyBlue: "#00BFFF",
      indigo: "#4B0082",
      purple: "#8A2BE2",
      mediumPurple: "#9370DB",
    };

    // Set canvas dimensions to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Re-initialize elements that depend on canvas size
      initElements();
    };

    // Initialize elements based on canvas size
    function initElements() {
      // Create sphere
      const minDimension = Math.min(canvas.width, canvas.height);
      const sphereRadius = minDimension * 0.15; // 15% of smaller dimension

      sphere = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: sphereRadius,
        rotation: 0,
        rotationSpeed: 0.005,
        pulse: 0,
        pulseSpeed: 0.02,
      };

      // Create data streams
      dataStreams = [];
      const streamCount = 18; // Number of streams

      for (let i = 0; i < streamCount; i++) {
        const angle = (i / streamCount) * Math.PI * 2;
        const colorIndex = i % 4;
        const colorOptions = [
          colors.skyBlue,
          colors.indigo,
          colors.purple,
          colors.mediumPurple,
        ];

        dataStreams.push({
          angle,
          length: canvas.width * (0.5 + Math.random() * 0.3), // Length varies
          width: 2 + Math.random() * 3,
          color: colorOptions[colorIndex],
          opacity: 0.1 + Math.random() * 0.5,
          speed: 0.002 + Math.random() * 0.003,
          pulseSpeed: 0.01 + Math.random() * 0.01,
        });
      }

      // Create nebula layers
      nebulaLayers = [];
      const layerCount = 4;

      for (let i = 0; i < layerCount; i++) {
        const colorIndex = i % 3;
        const colorOptions = [
          `rgba(0, 191, 255, 0.1)`, // Sky blue
          `rgba(75, 0, 130, 0.1)`, // Indigo
          `rgba(138, 43, 226, 0.1)`, // Purple
        ];

        nebulaLayers.push({
          x: canvas.width / 2 + (Math.random() - 0.5) * canvas.width * 0.3,
          y: canvas.height / 2 + (Math.random() - 0.5) * canvas.height * 0.3,
          radius:
            Math.min(canvas.width, canvas.height) * (0.4 + Math.random() * 0.3),
          color: colorOptions[colorIndex],
          opacity: 0.05 + Math.random() * 0.1,
          pulseSpeed: 0.002 + Math.random() * 0.003,
        });
      }

      // Create particles
      particles = [];
      const particleCount = 110;

      for (let i = 0; i < particleCount; i++) {
        const colorIndex = i % 4;
        const colorOptions = [
          `rgba(0, 191, 255, 0.8)`, // Sky blue
          `rgba(75, 0, 130, 0.8)`, // Indigo
          `rgba(138, 43, 226, 0.8)`, // Purple
          `rgba(147, 112, 219, 0.8)`, // Medium purple
        ];

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 1 + Math.random() * 2,
          color: colorOptions[colorIndex],
          velocityX: (Math.random() - 0.5) * 0.3,
          velocityY: (Math.random() - 0.5) * 0.3,
          opacity: 0.3 + Math.random() * 0.7,
          glowIntensity: 2 + Math.random() * 3,
        });
      }
    }

    // Draw background
    function drawBackground() {
      // Create radial gradient for base background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width
      );

      // Add subtle pulse to gradient
      const pulse = Math.sin(time * 0.2) * 0.05;
      gradient.addColorStop(0, colors.darkNavy);
      gradient.addColorStop(1, colors.deeperNavy);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Draw nebula layers
    function drawNebulaLayers() {
      nebulaLayers.forEach((layer) => {
        // Update layer pulse
        const pulse = Math.sin(time * layer.pulseSpeed) * 0.3 + 0.7;
        const opacity = layer.opacity * pulse;

        // Draw nebula
        const gradient = ctx.createRadialGradient(
          layer.x,
          layer.y,
          0,
          layer.x,
          layer.y,
          layer.radius
        );

        gradient.addColorStop(
          0,
          layer.color.replace("0.1", opacity.toString())
        );
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(layer.x, layer.y, layer.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // Draw particles
    function drawParticles() {
      particles.forEach((particle) => {
        // Move particles
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;

        // Wrap around edges
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;

        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);

        // Create glow effect
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * particle.glowIntensity
        );

        const color = particle.color;
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      });
    }

    // Draw holographic sphere with safety check
    function drawSphere() {
      if (!sphere || !sphere.radius) return; // Safety check

      const x = sphere.x;
      const y = sphere.y;
      const radius = sphere.radius;

      // Update sphere pulse
      sphere.pulse += sphere.pulseSpeed;
      const pulseFactor = Math.sin(sphere.pulse) * 0.2 + 0.8;

      // Create sphere gradient
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);

      gradient.addColorStop(0, `rgba(0, 191, 255, ${0.2 * pulseFactor})`);
      gradient.addColorStop(0.8, `rgba(75, 0, 130, ${0.15 * pulseFactor})`);
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      // Draw base sphere
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Add glow effect
      ctx.shadowBlur = 20;
      ctx.shadowColor = `rgba(0, 191, 255, ${0.3 * pulseFactor})`;
      ctx.beginPath();
      ctx.arc(x, y, radius * 0.9, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 191, 255, ${0.05 * pulseFactor})`;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw wireframe
      drawSphereWireframe(x, y, radius, sphere.rotation);

      // Update sphere rotation
      sphere.rotation += sphere.rotationSpeed;
    }

    // Draw wireframe on the sphere
    function drawSphereWireframe(x, y, radius, rotation) {
      const lineCount = 9;

      ctx.strokeStyle = `rgba(255, 255, 255, 0.3)`;
      ctx.lineWidth = 1;

      // Draw latitude lines
      for (let i = 0; i < lineCount; i++) {
        const angle = (i / lineCount) * Math.PI + rotation;
        const perspectiveScale = Math.sin(angle);

        if (perspectiveScale > 0) {
          ctx.beginPath();
          ctx.ellipse(
            x,
            y,
            radius * Math.abs(perspectiveScale),
            radius,
            0,
            0,
            Math.PI * 2
          );
          ctx.stroke();
        }
      }

      // Draw longitude lines
      for (let i = 0; i < lineCount; i++) {
        const angle = (i / lineCount) * Math.PI + rotation;

        ctx.beginPath();
        ctx.ellipse(x, y, radius, radius, angle, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    // Draw data streams with safety check
    function drawDataStreams() {
      if (!sphere || !sphere.radius) return; // Safety check

      dataStreams.forEach((stream) => {
        const angle = stream.angle + time * stream.speed;

        // Calculate stream length with pulse effect
        const pulseFactor = Math.sin(time * stream.pulseSpeed) * 0.2 + 0.8;
        const length = stream.length * pulseFactor;

        // Starting point at sphere edge
        const startX = sphere.x + Math.cos(angle) * sphere.radius;
        const startY = sphere.y + Math.sin(angle) * sphere.radius;

        // End point
        const endX = sphere.x + Math.cos(angle) * length;
        const endY = sphere.y + Math.sin(angle) * length;

        // Create gradient for stream
        const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
        gradient.addColorStop(
          0,
          `rgba(255, 255, 255, ${stream.opacity * 0.8})`
        );
        gradient.addColorStop(
          0.1,
          stream.color
            .replace("rgb", "rgba")
            .replace(")", `, ${stream.opacity * 0.5})`)
        );
        gradient.addColorStop(1, `rgba(0, 0, 0, 0)`);

        // Draw stream
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.lineWidth = stream.width;
        ctx.strokeStyle = gradient;
        ctx.stroke();

        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = stream.color;
        ctx.lineWidth = stream.width * 0.6;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });
    }

    // Animation loop with safety checks
    function animate() {
      // Only start animating when initialization is complete
      if (!canvas || !ctx || !sphere || !sphere.radius) {
        requestAnimationFrame(animate);
        return;
      }

      drawBackground();
      drawNebulaLayers();
      drawParticles();

      // Only draw sphere and streams if sphere is initialized
      if (sphere && sphere.radius > 0) {
        drawDataStreams();
        drawSphere();
      }

      time += 0.01;
      requestAnimationFrame(animate);
    }

    // Set up event listeners first, then initialize and start animation
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    // Initialize everything before starting animation
    resizeCanvas();

    // Start animation loop only after initialization
    animate();

    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section with Holographic Sphere Animation */}
        <section className="relative flex flex-col items-center justify-center px-4 pt-16 pb-4 text-center md:px-6 min-h-[90vh] overflow-hidden">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full -z-20"
          />

          <div className="max-w-3xl z-10 animate-in fade-in-0 slide-in-from-bottom-12 duration-1000 ease-out relative">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl animate-in fade-in-0 slide-in-from-bottom-2 duration-700 delay-200 ease-out filter drop-shadow-lg">
              Produce Compelling Videos from Text with{" "}
              <span className="text-primary">AI Avatar Agent Studio</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-100/90 md:text-xl animate-in fade-in-0 slide-in-from-bottom-2 duration-700 delay-400 ease-out filter drop-shadow-md">
              Craft professional-grade videos effortlessly using AI avatars and
              voiceovers in over 80 languages, all from your script.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-in fade-in-0 slide-in-from-bottom-2 duration-700 delay-600 ease-out">
              <Button
                asChild
                size="lg"
                className="text-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold
                           active:scale-95 transition-all duration-150 shadow-lg hover:shadow-pink-500/40
                           transform hover:-translate-y-0.5 hover:scale-105"
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
                If you&apos;re new to AI Avatar Agent or looking to supercharge
                your video creation workflow, our resources below will help you
                learn more about our features and see what others have built.
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
