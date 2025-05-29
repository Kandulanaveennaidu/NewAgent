import type { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CtaSection: FC = () => {
  return (
    <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-primary-foreground/10 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            What Will You Create?
          </h2>
          <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Sign up for a free LumoraAI demo & experience all the best of AI
            content creation in one platform.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="h-14 px-8 text-lg"
              asChild
            >
              <Link href="/signup">
                Start Free Trial <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <Link href="/demo">
                <Sparkles className="mr-2" size={18} />
                Watch Demo
              </Link>
            </Button>
          </div>

          <p className="mt-6 text-primary-foreground/70 text-sm">
            No credit card required. Free plan includes 5 video creations per
            month.
          </p>
        </div>
      </div>
    </section>
  );
};
