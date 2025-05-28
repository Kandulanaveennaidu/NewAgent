// src/ai/flows/generate-video-script.ts
'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating video scripts and storyboards from a text prompt.
 *
 * - generateVideoScript - A function that takes a text prompt and returns a video script and storyboard.
 * - GenerateVideoScriptInput - The input type for the generateVideoScript function.
 * - GenerateVideoScriptOutput - The return type for the generateVideoScript function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateVideoScriptInputSchema = z.object({
  prompt: z.string().describe('A text prompt describing the desired video content.'),
});
export type GenerateVideoScriptInput = z.infer<typeof GenerateVideoScriptInputSchema>;

const GenerateVideoScriptOutputSchema = z.object({
  script: z.string().describe('The generated video script.'),
  storyboard: z.string().describe('The generated storyboard for the video.'),
});
export type GenerateVideoScriptOutput = z.infer<typeof GenerateVideoScriptOutputSchema>;

export async function generateVideoScript(input: GenerateVideoScriptInput): Promise<GenerateVideoScriptOutput> {
  return generateVideoScriptFlow(input);
}

const generateVideoScriptPrompt = ai.definePrompt({
  name: 'generateVideoScriptPrompt',
  input: {schema: GenerateVideoScriptInputSchema},
  output: {schema: GenerateVideoScriptOutputSchema},
  prompt: `You are an AI video script and storyboard generator. Your task is to generate a video script and storyboard based on the user's prompt.

Prompt: {{{prompt}}}

Generate a detailed video script with scene descriptions, character dialogues, and actions. Also, create a storyboard outlining the visual elements for each scene, including camera angles, transitions, and key visual components. Return both as a single JSON object with 'script' and 'storyboard' fields.`,
});

const generateVideoScriptFlow = ai.defineFlow(
  {
    name: 'generateVideoScriptFlow',
    inputSchema: GenerateVideoScriptInputSchema,
    outputSchema: GenerateVideoScriptOutputSchema,
  },
  async input => {
    const {output} = await generateVideoScriptPrompt(input);
    return output!;
  }
);
