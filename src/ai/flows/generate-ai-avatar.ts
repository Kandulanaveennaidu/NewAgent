// src/ai/flows/generate-ai-avatar.ts
'use server';
/**
 * @fileOverview AI avatar generation flow.
 *
 * This file defines a Genkit flow for generating AI avatars based on user-specified criteria such as gender, age, clothing, emotion, and language.
 * It includes the necessary input and output schemas, as well as the flow definition itself.
 *
 * @exports generateAiAvatar - The main function to trigger the AI avatar generation flow.
 * @exports GenerateAiAvatarInput - The input type for the generateAiAvatar function.
 * @exports GenerateAiAvatarOutput - The output type for the generateAiAvatar function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAiAvatarInputSchema = z.object({
  gender: z.enum(['male', 'female', 'other']).describe('The gender of the avatar.'),
  age: z.number().int().min(1).max(120).describe('The age of the avatar.'),
  clothing: z.string().describe('The clothing style of the avatar.'),
  emotion: z.string().describe('The emotion the avatar should express.'),
  language: z.string().describe('The language for the avatar voiceover.'),
});

export type GenerateAiAvatarInput = z.infer<typeof GenerateAiAvatarInputSchema>;

const GenerateAiAvatarOutputSchema = z.object({
  avatarDataUri: z
    .string()
    .describe(
      'The data URI of the generated avatar image, including MIME type and Base64 encoding (data:<mimetype>;base64,<encoded_data>).'
    ),
  voiceoverDataUri: z
    .string()
    .describe(
      'The data URI of the generated voiceover audio, including MIME type and Base64 encoding (data:<mimetype>;base64,<encoded_data>).'
    ),
});

export type GenerateAiAvatarOutput = z.infer<typeof GenerateAiAvatarOutputSchema>;

export async function generateAiAvatar(input: GenerateAiAvatarInput): Promise<GenerateAiAvatarOutput> {
  return generateAiAvatarFlow(input);
}

const generateAvatarPrompt = ai.definePrompt({
  name: 'generateAvatarPrompt',
  input: {schema: GenerateAiAvatarInputSchema},
  output: {schema: GenerateAiAvatarOutputSchema},
  prompt: `You are an AI avatar generator. Generate a realistic-looking avatar image and voiceover based on the following criteria:

Gender: {{gender}}
Age: {{age}}
Clothing: {{clothing}}
Emotion: {{emotion}}
Language: {{language}}

Avatar Image: {{media url=avatarDataUri}}
Voiceover: {{media url=voiceoverDataUri}}`,
});

const generateAiAvatarFlow = ai.defineFlow(
  {
    name: 'generateAiAvatarFlow',
    inputSchema: GenerateAiAvatarInputSchema,
    outputSchema: GenerateAiAvatarOutputSchema,
  },
  async input => {
    // Generate avatar image.
    const avatarGenerationResult = await ai.generate({
      model: 'googleai/gemini-2.0-flash-exp',
      prompt: `Generate a realistic avatar image of a {{gender}} aged {{age}}, wearing {{clothing}}, and expressing {{emotion}}.`,config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    // Generate voiceover
    const voiceoverGenerationResult = await ai.generate({
      model: 'googleai/gemini-2.0-flash-exp',
      prompt: `Generate a voiceover in {{language}} for an avatar with the following characteristics: gender={{gender}}, age={{age}}, emotion={{emotion}}. The voiceover should be a generic greeting.`,config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    return {
      avatarDataUri: avatarGenerationResult.media!.url,
      voiceoverDataUri: voiceoverGenerationResult.media!.url,
    };
  }
);
