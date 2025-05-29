import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight, ArrowUpRight } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug: string;
}

const newsData: NewsItem[] = [
  {
    id: "news-1",
    title: "New Custom Avatar Feature Launches for Enterprise Users",
    excerpt:
      "Create bespoke AI avatars tailored to your brand with our new enterprise-grade customization tools.",
    date: "2023-10-15",
    category: "Product Update",
    image: "/images/news/custom-avatars.jpg",
    slug: "custom-avatar-feature-launch",
  },
  {
    id: "news-2",
    title: "AI Avatar Agent Surpasses 2 Million Active Users",
    excerpt:
      "A milestone achievement as our platform continues to transform how creators approach video production.",
    date: "2023-09-28",
    category: "Company News",
    image: "/images/news/user-milestone.jpg",
    slug: "two-million-users-milestone",
  },
  {
    id: "news-3",
    title: "How Educational Institutions Are Leveraging AI Avatars",
    excerpt:
      "Case study on how universities and schools use our platform to enhance learning experiences.",
    date: "2023-09-12",
    category: "Case Study",
    image: "/images/news/education-case-study.jpg",
    slug: "education-ai-avatars-case-study",
  },
];

export const NewsUpdatesSection: FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Discover AI Avatar Agent News and Updates
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Stay informed about our latest features, success stories, and
              industry insights.
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="hidden md:flex items-center"
            asChild
          >
            <Link href="/blog">
              View all updates <ArrowUpRight size={14} className="ml-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsData.map((item) => (
            <Link
              key={item.id}
              href={`/blog/${item.slug}`}
              className="group block bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-border"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-white text-xs px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-muted-foreground text-sm mb-2">
                  <Calendar size={14} className="mr-1" />
                  <span>
                    {new Date(item.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.excerpt}</p>
                <div className="mt-4 flex items-center text-primary font-medium">
                  <span>Read more</span>
                  <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Button asChild>
            <Link href="/blog">View All Updates</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
