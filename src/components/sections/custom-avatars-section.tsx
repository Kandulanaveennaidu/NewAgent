"use client";

import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Fingerprint, Palette, Award } from "lucide-react";

export const CustomAvatarsSection: FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Custom Avatars
              <span className="block mt-2">Develop Your Unique AI Persona</span>
            </h2>

            <p className="text-muted-foreground text-lg">
              Tailor a bespoke AI avatar to perfectly match your brand and video
              requirements. Stand out with a digital representative that's
              uniquely yours.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Fingerprint size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Personal Identity
                  </h3>
                  <p className="text-muted-foreground">
                    Create an avatar that looks and sounds like you or your
                    brand ambassador, maintaining consistent representation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Palette size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Brand Alignment
                  </h3>
                  <p className="text-muted-foreground">
                    Customize appearance, voice, and style to perfectly match
                    your brand guidelines and visual identity.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Award size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Competitive Edge
                  </h3>
                  <p className="text-muted-foreground">
                    Stand out from competitors with a unique digital
                    spokesperson that audiences can recognize and connect with.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button size="lg" className="mr-4" asChild>
                <Link href="/custom-avatars">Create Custom Avatar</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">View Examples</Link>
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://img.freepik.com/premium-photo/3d-rendering-people-avatars-zoom-call_744422-7716.jpg"
                alt="Custom Avatar Creation Process"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <span className="bg-primary rounded-full px-3 py-1 text-sm font-medium">
                    PREMIUM FEATURE
                  </span>
                  <h3 className="text-2xl font-bold mt-2">
                    Enterprise-Grade Custom Avatars
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
