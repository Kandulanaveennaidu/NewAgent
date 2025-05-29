import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star, ChevronRight } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonialData: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStream",
    content: `AI Avatar Agent has revolutionized our content strategy. We're creating professional training videos in minutes that used to take days. The ROI has been incredible.`,
    avatar: "/images/testimonials/avatar1.jpg",
    rating: 5,
  },
  {
    id: "testimonial-2",
    name: "David Kim",
    role: "E-Learning Specialist",
    company: "EduSmart",
    content: `As an educator, I've found AI Avatar Agent invaluable. Creating engaging multilingual educational content is now simple and affordable, and my students love the interactive format.`,
    avatar: "/images/testimonials/avatar2.jpg",
    rating: 5,
  },
  {
    id: "testimonial-3",
    name: "Maya Patel",
    role: "Social Media Manager",
    company: "ViralVision",
    content: `Our social engagement skyrocketed since using AI Avatar Agent. We produce consistent, high-quality video content across platforms with minimal resource investment.`,
    avatar: "/images/testimonials/avatar3.jpg",
    rating: 4,
  },
];

export const TestimonialsSection: FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            AI Avatar Agent Makes Video Creation Better for Everyone
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            But don't just take our word for it—check out what our customers
            have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-border"
            >
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < testimonial.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted"
                    }
                  />
                ))}
              </div>

              <p className="text-foreground mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/customer-stories">
              Explore Customer Stories{" "}
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
