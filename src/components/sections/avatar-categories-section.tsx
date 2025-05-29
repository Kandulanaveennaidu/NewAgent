"use client";

import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface AvatarCategory {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  avatarCount: number;
}

const avatarCategoriesData: AvatarCategory[] = [
  {
    id: "category-1",
    name: "Business Professionals",
    description:
      "Perfect for corporate videos, presentations, training materials, and professional communications. These avatars convey authority, expertise, and professionalism.",
    imageUrl: "/images/avatars/business.jpg",
    avatarCount: 42,
  },
  {
    id: "category-2",
    name: "Diverse Ethnicities",
    description:
      "Connect with global audiences using avatars representing various ethnicities and cultural backgrounds. Ideal for inclusive marketing and international communications.",
    imageUrl: "/images/avatars/diverse.jpg",
    avatarCount: 38,
  },
  {
    id: "category-3",
    name: "Educational & Academic",
    description:
      "Perfect for e-learning content, tutorials, academic presentations, and educational materials. These avatars present information clearly and engagingly.",
    imageUrl: "/images/avatars/education.jpg",
    avatarCount: 27,
  },
  {
    id: "category-4",
    name: "Entertainment & Creative",
    description:
      "Bring energy and creativity to your videos with these vibrant avatars. Great for entertainment content, creative storytelling, and engaging social media videos.",
    imageUrl: "/images/avatars/entertainment.jpg",
    avatarCount: 33,
  },
  {
    id: "category-5",
    name: "Healthcare Professionals",
    description:
      "Ideal for medical information, healthcare explainers, wellness content, and patient education. These avatars convey trust and medical authority.",
    imageUrl: "/images/avatars/healthcare.jpg",
    avatarCount: 18,
  },
];

export const AvatarCategoriesSection: FC = () => {
  return (
    <section className="pt-0 pb-12 md:pb-20 bg-background">
      <section className="pt-10 md:pt-12 pb-0 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
              Explore Our AI Avatar Categories
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose from over 150 lifelike AI avatars across multiple
              categories to find the perfect match for your video content.
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {avatarCategoriesData.map((category) => (
              <AccordionItem
                key={category.id}
                value={category.id}
                className="border border-border rounded-lg shadow-md hover:shadow-lg transition-shadow bg-card overflow-hidden"
              >
                <AccordionTrigger className="p-6 text-left font-medium text-lg hover:no-underline">
                  <div className="flex items-center justify-between w-full">
                    <span>{category.name}</span>
                    <span className="text-sm font-normal text-muted-foreground mr-4">
                      {category.avatarCount} Avatars
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative h-48 md:h-auto">
                      <Image
                        src={category.imageUrl}
                        alt={category.name}
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <p className="text-muted-foreground mb-4">
                        {category.description}
                      </p>
                      <Button asChild>
                        <Link href={`/products/ai-avatars/${category.id}`}>
                          Browse {category.name}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 text-center">
            <Button size="lg" variant="default" asChild>
              <Link href="/products/ai-avatars/all">
                View All 150+ AI Avatars
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
