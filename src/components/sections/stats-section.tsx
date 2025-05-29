import type { FC } from "react";
import { Users, Video, MessageSquare } from "lucide-react";

export const StatsSection: FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Join Over 2 Million Satisfied Creators
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our platform empowers creators worldwide to produce engaging,
            professional-quality videos without the complexity or cost.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-3xl font-bold mb-2">2M+</h3>
            <p className="text-xl font-medium mb-1">Active Users</p>
            <p className="text-muted-foreground">
              Creators trusting our platform
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-6">
              <Video size={32} />
            </div>
            <h3 className="text-3xl font-bold mb-2">15M+</h3>
            <p className="text-xl font-medium mb-1">Videos Created</p>
            <p className="text-muted-foreground">
              Professional videos generated
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-6">
              <MessageSquare size={32} />
            </div>
            <h3 className="text-3xl font-bold mb-2">80+</h3>
            <p className="text-xl font-medium mb-1">Languages</p>
            <p className="text-muted-foreground">Supported by our AI avatars</p>
          </div>
        </div>
      </div>
    </section>
  );
};
