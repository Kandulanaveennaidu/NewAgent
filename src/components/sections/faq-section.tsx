
'use client';

import type { FC } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is the best way to convert text to video?',
    answer:
      'The best way to convert text to video using LumoraAI is to first prepare your script. Then, choose an AI avatar and voice that best suit your content. Customize scenes with text, images, and animations. Finally, generate your video and share it. Our platform guides you through each step for an intuitive experience.',
  },
  {
    id: 'faq-2',
    question: 'What are the benefits of using an AI video generator?',
    answer:
      'AI video generators like LumoraAI offer numerous benefits, including significant time and cost savings compared to traditional video production. They provide access to a wide range of AI avatars and voices, support for multiple languages, and easy customization, allowing you to create professional-quality videos efficiently without needing technical expertise.',
  },
  {
    id: 'faq-3',
    question: 'Do AI video generators support multi-language?',
    answer:
      'Yes, LumoraAI and many advanced AI video generators support multiple languages. Our platform allows you to generate voiceovers in over 80 languages and can also assist with translating your video script and on-screen text, making it easy to reach a global audience.',
  },
  {
    id: 'faq-4',
    question: 'How can AI be used to generate video scripts?',
    answer:
      "AI can be a powerful tool for generating video scripts. With LumoraAI, you can use AI to draft initial scripts from a prompt or topic, refine existing text, check grammar and style, and even get suggestions for scene descriptions or dialogue. This accelerates the scriptwriting process and helps overcome writer's block.",
  },
];

export const FaqSection: FC = () => {
  return (
    <section className="pt-0 pb-12 md:pb-20 bg-background"> {/* Adjusted padding */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border border-border rounded-lg shadow-md hover:shadow-lg transition-shadow bg-card"
              >
                <AccordionTrigger className="p-6 text-left font-medium text-base hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
