
// src/components/layout/footer.tsx
'use client';

import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AppLogoIcon } from '@/components/icons/app-logo-icon';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Globe, ChevronDown } from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinkColumn {
  title: string;
  links: FooterLink[];
}

interface FooterLinkGroup {
  mainTitle?: string; // For titles like "Al Avatar"
  columns: FooterLinkColumn[]; // For sub-columns like "AI Tools" under "Al Avatar"
}


const footerLinksData: FooterLinkGroup[] = [
  {
    columns: [
      {
        title: 'AI Avatar',
        links: [
          { label: 'AI Avatars', href: '#' },
          { label: 'Voices & Languages', href: '#' },
          { label: 'Gesture Control', href: '#' },
          { label: 'Multi-Avatar Scenes', href: '#' },
          { label: 'Studio Avatar', href: '#' },
          { label: '3D Avatars', href: '#' },
          { label: 'Custom Dictionary', href: '#' },
          { label: 'Custom Avatar', href: '#' },
          { label: 'Photo Avatar', href: '#' },
          { label: 'Instant Custom Avatar', href: '#' },
          { label: 'Talking Avatar', href: '#' },
        ],
      },
      {
        title: 'AI Tools',
        links: [
          { label: 'Text to Video', href: '#' },
          { label: 'Topic to Video', href: '#' },
          { label: 'URL to Video', href: '#' },
          { label: 'Docs to Video', href: '#' },
          { label: 'Article to Video', href: '#' },
          { label: 'AI Script Assistant', href: '#' },
          { label: 'AI Media Generator', href: '#' },
          { label: 'PowerPoint to Video', href: '#' },
          { label: 'PDF to Video', href: '#' },
          { label: 'Online Video Maker', href: '#' },
        ],
      },
    ],
  },
  {
    columns: [
      {
        title: 'Video Editor',
        links: [
          { label: 'AI Video Generator', href: '#' },
          { label: 'Auto Captions', href: '#' },
          { label: 'Screen Recording', href: '#' },
          { label: 'Brand Assets', href: '#' },
          { label: 'Text to Speech', href: '#' },
          { label: 'AI Video Editor', href: '#' },
          { label: 'Video Messages', href: '#' },
          { label: 'AI Video Translator', href: '#' },
        ],
      },
      {
        title: 'Compare',
        links: [
          { label: 'Synthesia', href: '#' },
          { label: 'Sora by OpenAI', href: '#' },
          { label: 'Invideo VS AI Avatar Agent', href: '#' }, 
          { label: 'Synthesia VS AI Avatar Agent', href: '#' }, 
          { label: 'Loom VS AI Avatar Agent', href: '#' }, 
          { label: 'Sora VS AI Avatar Agent', href: '#' }, 
          { label: 'HeyGen VS AI Avatar Agent Video Dubbing', href: '#' }, 
          { label: 'HeyGen VS AI Avatar Agent Video Generator', href: '#' }, 
          { label: 'Colossyan VS AI Avatar Agent Avatars', href: '#' }, 
          { label: 'Colossyan VS AI Avatar Agent Video Generator', href: '#' }, 
          { label: 'Pipio VS AI Avatar Agent', href: '#' }, 
        ],
      },
    ],
  },
  {
    columns: [
      {
        title: 'Templates',
        links: [
          { label: 'All Templates', href: '#' },
          { label: 'YouTube / TikTok / Reels', href: '#' },
          { label: 'Business', href: '#' },
          { label: 'News', href: '#' },
          { label: 'Commerce', href: '#' },
          { label: 'Holiday & Events', href: '#' },
        ],
      },
      {
        title: 'Insight',
        links: [
          { label: 'Best AI Video Maker 2025', href: '#' },
          { label: 'AI Video Generator Best Practices', href: '#' },
          { label: 'How to Make AI Avatars using Sora x AI Avatar Agent', href: '#' }, 
          { label: 'How to Create Interactive E-Learning Videos', href: '#' },
          { label: 'Best 6 AI Dubbing Software for Localization', href: '#' },
          { label: 'Best AI Screen Recorders', href: '#' },
          { label: 'Best AI Avatar Makers', href: '#' },
          { label: 'Best TikTok Generators', href: '#' },
          { label: 'Best AI Presentation Makers', href: '#' },
          { label: 'Best Free YouTube Downloaders', href: '#' },
        ],
      },
    ],
  },
  {
    columns: [
      {
        title: 'Technology',
        links: [
          { label: 'AI Avatar Agent', href: '#' }, 
          { label: 'AI Human', href: '#' },
          { label: 'AI Interview', href: '#' },
          { label: 're;memory', href: '#' },
          { label: 'Deepfake Detector', href: '#' },
          { label: 'Face Swap', href: '#' },
          { label: 'ChatGPT', href: '#' },
          { label: 'Custom LLMs', href: '#' },
        ],
      },
      {
        title: 'By Industry',
        links: [
          { label: 'Social Media', href: '#' },
          { label: 'E-commerce', href: '#' },
          { label: 'Training & Edu', href: '#' },
          { label: 'News Media', href: '#' },
          { label: 'Finance', href: '#' },
          { label: 'Customer Support', href: '#' },
          { label: 'Brand Ambassador', href: '#' },
        ],
      },
    ],
  },
  {
    columns: [
      {
        title: 'Resources',
        links: [
          { label: 'Pricing', href: '#' },
          { label: 'Help Center', href: '#' },
          { label: 'Developer Docs', href: '#' },
          { label: 'Blog', href: '#' },
          { label: 'Forum', href: '#' },
          { label: 'Integrations', href: '#' },
          { label: 'Customer Stories', href: '#' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '#' },
          { label: 'Careers', href: '#' },
          { label: 'Partners', href: '#' },
          { label: 'Amazon Web Services', href: '#' },
          { label: 'Microsoft Pegasus Program', href: '#' },
          { label: 'Contact', href: '#' },
          { label: 'Affiliates', href: '#' },
        ],
      },
    ],
  },
  {
    columns: [
      {
        title: 'Discover',
        links: [
          { label: 'Local News Generator', href: '#' },
          { label: 'Free Stock Footage', href: '#' },
          { label: 'Social Media Ads', href: '#' },
          { label: 'Video Invitation Maker', href: '#' },
          { label: 'MetaHuman Creator', href: '#' },
          { label: 'AI Voice Generator', href: '#' },
          { label: 'Online Learning Videos', href: '#' },
          { label: 'AI News Videos', href: '#' },
          { label: 'Text-to-Voice AI Generator', href: '#' },
          { label: 'Real Estate Marketing', href: '#' },
          { label: 'Video Slideshow Maker', href: '#' },
          { label: 'Script to Video', href: '#' },
          { label: 'Avatar Maker Full Body', href: '#' },
          { label: 'Blog Post to Video', href: '#' },
          { label: 'Add Music to Video', href: '#' },
          { label: 'Best Video Editing', href: '#' },
          { label: 'YouTube Video Editor', href: '#' },
          { label: 'AI Video Presentation', href: '#' },
        ],
      },
    ],
  },
];


const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

const certificationBadges = [
  { 
    src: 'https://cdn.prod.website-files.com/63da3362f67ed6f71c9489c1/660d778525c025d355fc8bd8_CAI.svg', 
    alt: 'Content Authenticity Initiative', 
    aiHint: 'authenticity badge' 
  },
  { 
    src: 'https://cdn.prod.website-files.com/63da3362f67ed6f71c9489c1/6614cac6d0f237f4dfc7e513_ISO_logo.svg', 
    alt: 'ISO 27001 Certified', 
    aiHint: 'iso badge' 
  },
  { 
    src: 'https://cdn.prod.website-files.com/63da3362f67ed6f71c9489c1/67bfc4df5cbcd35898c8c9ec_21972-312_SOC_NonCPA_Blk_-p-500.jpg', 
    alt: 'AICPA SOC Certified', 
    aiHint: 'aicpa badge' 
  },
];

export const Footer: FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-10">
          {/* Left Column: Logo, Description, Social, Badges, Address, Language */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <AppLogoIcon className="h-10 w-10" />
              <span className="text-2xl font-bold text-white">AI Avatar Agent</span>
            </Link>
            <p className="text-sm">
              AI Avatar Agent&apos;s video generator and conversational AI technology aim to bridge the gap between the advantages of human interaction and digital convenience.
            </p>
            <p className="text-sm">
              Learn how our AI Avatars can help your projects and business scale more efficiently and reduce costs and time - all without compromising on quality.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="flex space-x-3 items-center">
              {certificationBadges.map((badge, index) => (
                <Image
                  key={index}
                  src={badge.src}
                  alt={badge.alt}
                  width={60}
                  height={35}
                  data-ai-hint={badge.aiHint}
                  className="object-contain filter grayscale"
                />
              ))}
            </div>
            <p className="text-xs text-neutral-400">
              AI Avatar Agent Inc.<br />
              540 University Ave., Suite 200, Palo Alto, CA 94301
            </p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between text-neutral-300 border-neutral-600 hover:bg-neutral-700 hover:text-white"
                >
                  <div className="flex items-center">
                    <Globe className="mr-2 h-4 w-4" />
                    Language
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-neutral-800 border-neutral-700 text-neutral-300 w-[--radix-dropdown-menu-trigger-width]">
                <DropdownMenuItem className="hover:bg-neutral-700 focus:bg-neutral-700">English</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-neutral-700 focus:bg-neutral-700">Español</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-neutral-700 focus:bg-neutral-700">Français</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right Column: Link Columns */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-8">
            {footerLinksData.map((group, groupIndex) => (
              <div key={groupIndex} className="space-y-6">
                {group.columns.map((col) => (
                  <div key={col.title}>
                    <h3 className="text-sm font-semibold text-white mb-3">{col.title}</h3>
                    <ul className="space-y-2">
                      {col.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="text-xs text-neutral-400 hover:text-white hover:underline transition-colors"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-neutral-700 my-8" />

        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
          <div className="flex space-x-4 mb-2 md:mb-0">
            <Link href="#" className="hover:text-neutral-300 hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:text-neutral-300 hover:underline">Terms of Use</Link>
            <Link href="#" className="hover:text-neutral-300 hover:underline">Security Portal</Link>
          </div>
          <p>Copyright © {new Date().getFullYear()} AI Avatar Agent. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
