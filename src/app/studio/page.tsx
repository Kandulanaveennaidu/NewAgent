import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function StudioPage() {
  return (
    <div className="container mx-auto py-20 text-center">
      <h1 className="text-4xl font-bold mb-8">AI Studios</h1>
      <p className="mb-8 text-xl text-muted-foreground max-w-2xl mx-auto">
        Create professional videos with AI avatars and voices in minutes.
      </p>
      <Button asChild>
        <Link href="/products/ai-avatars" className="flex items-center gap-2">
          <ArrowLeft size={16} />
          Back to AI Avatars
        </Link>
      </Button>
    </div>
  );
}
