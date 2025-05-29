// src/components/layout/footer.tsx
"use client";

import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export const Footer: FC = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Logo & Info */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.svg"
                alt="LumoraAI Logo"
                width={160}
                height={40}
              />
            </Link>
            <p className="text-muted-foreground mb-6">
              Transform your content creation with AI-powered video generation.
              Create professional videos in minutes with lifelike AI avatars.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook size={18} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter size={18} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram size={18} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin size={18} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-primary"
              >
                <Youtube size={18} />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <details className="md:hidden mb-4" open>
              <summary className="list-none flex justify-between cursor-pointer">
                <span className="font-bold text-lg">Products</span>
                <ChevronDown size={20} className="text-muted-foreground" />
              </summary>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/products/ai-avatars"
                    className="text-muted-foreground hover:text-primary"
                  >
                    AI Avatars
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/video-editor"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Video Editor
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/script-assistant"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Script Assistant
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/voice-synthesis"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Voice Synthesis
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/integrations"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Integrations
                  </Link>
                </li>
              </ul>
            </details>
            <ul className="hidden md:block space-y-3">
              <li>
                <Link
                  href="/products/ai-avatars"
                  className="text-muted-foreground hover:text-primary"
                >
                  AI Avatars
                </Link>
              </li>
              <li>
                <Link
                  href="/products/video-editor"
                  className="text-muted-foreground hover:text-primary"
                >
                  Video Editor
                </Link>
              </li>
              <li>
                <Link
                  href="/products/script-assistant"
                  className="text-muted-foreground hover:text-primary"
                >
                  Script Assistant
                </Link>
              </li>
              <li>
                <Link
                  href="/products/voice-synthesis"
                  className="text-muted-foreground hover:text-primary"
                >
                  Voice Synthesis
                </Link>
              </li>
              <li>
                <Link
                  href="/products/integrations"
                  className="text-muted-foreground hover:text-primary"
                >
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <details className="md:hidden mb-4" open>
              <summary className="list-none flex justify-between cursor-pointer">
                <span className="font-bold text-lg">Resources</span>
                <ChevronDown size={20} className="text-muted-foreground" />
              </summary>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/resources/blog"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/case-studies"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/help-center"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/webinars"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Webinars
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/api-docs"
                    className="text-muted-foreground hover:text-primary"
                  >
                    API Documentation
                  </Link>
                </li>
              </ul>
            </details>
            <ul className="hidden md:block space-y-3">
              <li>
                <Link
                  href="/resources/blog"
                  className="text-muted-foreground hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/case-studies"
                  className="text-muted-foreground hover:text-primary"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/help-center"
                  className="text-muted-foreground hover:text-primary"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/webinars"
                  className="text-muted-foreground hover:text-primary"
                >
                  Webinars
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/api-docs"
                  className="text-muted-foreground hover:text-primary"
                >
                  API Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <details className="md:hidden mb-4" open>
              <summary className="list-none flex justify-between cursor-pointer">
                <span className="font-bold text-lg">Company</span>
                <ChevronDown size={20} className="text-muted-foreground" />
              </summary>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/company/about-us"
                    className="text-muted-foreground hover:text-primary"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company/careers"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company/press"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Press
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company/contact"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company/partners"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Partners
                  </Link>
                </li>
              </ul>
            </details>
            <ul className="hidden md:block space-y-3">
              <li>
                <Link
                  href="/company/about-us"
                  className="text-muted-foreground hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/company/careers"
                  className="text-muted-foreground hover:text-primary"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/company/press"
                  className="text-muted-foreground hover:text-primary"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  href="/company/contact"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/company/partners"
                  className="text-muted-foreground hover:text-primary"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  size={16}
                  className="mr-3 text-muted-foreground mt-1 flex-shrink-0"
                />
                <span className="text-muted-foreground">
                  123 Innovation Drive, Suite 400, San Francisco, CA 94103, USA
                </span>
              </li>
              <li className="flex items-center">
                <Mail
                  size={16}
                  className="mr-3 text-muted-foreground flex-shrink-0"
                />
                <Link
                  href="mailto:info@lumoraai.com"
                  className="text-muted-foreground hover:text-primary"
                >
                  info@lumoraai.com
                </Link>
              </li>
              <li className="flex items-center">
                <Phone
                  size={16}
                  className="mr-3 text-muted-foreground flex-shrink-0"
                />
                <Link
                  href="tel:+14155552671"
                  className="text-muted-foreground hover:text-primary"
                >
                  +1 (415) 555-2671
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} LumoraAI. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/legal/terms"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Terms of Service
            </Link>
            <Link
              href="/legal/privacy"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/cookies"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Cookie Policy
            </Link>
            <Link
              href="/legal/gdpr"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              GDPR
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
