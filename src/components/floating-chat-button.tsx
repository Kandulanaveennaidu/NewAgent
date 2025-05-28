
import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

export const FloatingChatButton: FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:scale-110 active:scale-100 transition-transform duration-200"
        aria-label="Open chat"
      >
        <MessageSquare className="h-7 w-7" />
      </Button>
    </div>
  );
};
