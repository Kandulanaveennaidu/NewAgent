
'use client';

import type { FC } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Zap, Users2 } from 'lucide-react'; 

// Placeholder for OrgChart diagram icons
const OrgChartIcon: FC<{ className?: string }> = ({ className }) => (
  <div className={`flex items-center justify-center h-8 w-8 rounded-full bg-muted text-muted-foreground ${className}`}>
    <Users2 size={16} />
  </div>
);

// Placeholder SVGs for blue cards
const UnlimitedVideoIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="8" fill="currentColor" fillOpacity="0.1"/>
    <path d="M16 18V30L27 24L16 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 18H30C31.1046 18 32 18.8954 32 20V28C32 29.1046 31.1046 30 30 30H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22.6108 13.2627C21.9869 12.4788 21.0092 12 20 12C17.7909 12 16 13.7909 16 16C16 18.2091 17.7909 20 20 20C21.0092 20 21.9869 19.5212 22.6108 18.7373L25.401 15.947C26.1882 15.1598 26.1882 13.8402 25.401 13.053L22.6108 13.2627Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
     <path d="M25.3892 34.7373C26.0131 35.5212 26.9908 36 28 36C30.2091 36 32 34.2091 32 32C32 29.7909 30.2091 28 28 28C26.9908 28 26.0131 28.4788 25.3892 29.2627L22.599 32.053C21.8118 32.8402 21.8118 34.1598 22.599 34.947L25.3892 34.7373Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DedicatedSupportIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="8" fill="currentColor" fillOpacity="0.1"/>
    <circle cx="24" cy="20" r="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M32 30C32 25.5817 28.4183 22 24 22C19.5817 22 16 25.5817 16 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 12V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 20H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 20H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M19 28L16 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M29 28L32 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
     <path d="M16 34H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ApiAccessIcon: FC<{ className?: string }> = ({ className }) => (
 <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="8" fill="currentColor" fillOpacity="0.1"/>
    <path d="M34 28V32C34 34.2091 32.2091 36 30 36H18C15.7909 36 14 34.2091 14 32V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 28V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 16L24 12L28 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 20H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M36 20H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
     <path d="M29.3301 23.3301C31.0403 23.6911 32.2151 24.2016 33 24.8101C33.7849 25.4187 34.2954 26.1239 34.6564 26.8342M18.6699 23.3301C16.9597 23.6911 15.7849 24.2016 15 24.8101C14.2151 25.4187 13.7046 26.1239 13.3436 26.8342" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);


export const EnterpriseSection: FC = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Heading and Subtitle */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            AI Avatar Agent <span className="text-primary">Enterprise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Tailored solutions for teams and organizations. Create a customized plan that fits your video production needs, whether you&apos;re a growing team or a large enterprise.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-16">
          <Button size="lg" className="active:scale-95 transition-transform">
            <Zap className="mr-2 h-5 w-5" />
            Contact Us
          </Button>
          <Button size="lg" variant="outline" className="active:scale-95 transition-transform">
            <Users className="mr-2 h-5 w-5" />
            Customer Stories
          </Button>
        </div>

        {/* Two-Column Feature Block */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          <Card className="rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-card">
            <CardContent className="p-6">
              <CardTitle className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                Unlimited Video Creation
              </CardTitle>
              <CardDescription className="text-muted-foreground mb-4">
                Remove instant custom avatar limitations and access the option to create a professional-grade studio avatar.
              </CardDescription>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="https://static-cse.canva.com/blob/1280051/feature_ai_video_generator_promo-showcase_02.jpg"
                  alt="AI video generator interface showing advanced features"
                  fill
                  className="object-cover"
                  data-ai-hint="AI video generator interface"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-card">
            <CardContent className="p-6">
              <CardTitle className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                Advanced Collaboration
              </CardTitle>
              <CardDescription className="text-muted-foreground mb-4">
                With the enterprise plan, you can bring everyone on board, boost productivity, and keep projects organized with ease.
              </CardDescription>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4 list-disc list-inside">
                <li>
                  <span className="font-medium text-foreground">Unlimited Seats:</span> Add as many team members as needed.
                </li>
                <li>
                  <span className="font-medium text-foreground">Unlimited Workspaces:</span> Create separate spaces for different projects or teams, keeping everything organized and efficient.
                </li>
              </ul>
              {/* Placeholder for Org Chart Diagram */}
              <div className="mt-4 p-4 border rounded-lg bg-muted/50">
                <div className="text-center mb-3">
                  <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium">Head of L&amp;D</div>
                </div>
                <div className="flex justify-around items-start">
                  <div className="text-center">
                    <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm mb-2">Marketing team</div>
                    <div className="flex gap-2 justify-center">
                      <OrgChartIcon /> <OrgChartIcon /> <OrgChartIcon />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm mb-2">Design team</div>
                    <div className="flex gap-2 justify-center">
                      <OrgChartIcon /> <OrgChartIcon />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Three-Column Blue Feature Block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              Icon: UnlimitedVideoIcon,
              title: 'Unlimited Video Creation',
              description: 'Create content freely, scale your projects, and keep up with your growing demands with unlimited video credits.',
              aiHint: 'video play infinite'
            },
            {
              Icon: DedicatedSupportIcon,
              title: 'Dedicated Support',
              description: 'Enjoy personalized support whenever you need it, plus a dedicated customer success manager to help you make the most of AI Avatar Agent.',
              aiHint: 'support team person'
            },
            {
              Icon: ApiAccessIcon,
              title: 'API Access',
              description: 'Integrate AI Avatar Agent via our API to enhance your workflow or services. Automate video production, optimize tasks, and expand your content capabilities.',
              aiHint: 'api cloud connection'
            },
          ].map((feature) => (
            <Card
              key={feature.title}
              className="rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out bg-primary text-primary-foreground p-6 flex flex-col items-center text-center"
            >
              <feature.Icon className="h-16 w-16 mb-4 text-primary-foreground" />
              <CardTitle className="text-xl font-semibold mb-2">{feature.title}</CardTitle>
              <CardDescription className="text-sm text-primary-foreground/90">
                {feature.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
