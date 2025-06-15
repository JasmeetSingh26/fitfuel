'use server';

/**
 * @fileOverview A meal plan generation AI agent.
 *
 * - generateMealPlan - A function that handles the meal plan generation process.
 * - GenerateMealPlanInput - The input type for the generateMealPlan function.
 * - GenerateMealPlanOutput - The return type for the generateMealPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { UserProfileSchema } from '@/lib/schemas'; // Import the full schema

// Use the UserProfileSchema directly for input if it matches, or pick specific fields.
// For this case, let's extend it slightly for clarity in the AI prompt, or use it as is if it covers all needs.
const GenerateMealPlanInputSchema = UserProfileSchema.extend({
  // No new fields needed if UserProfileSchema already has weight, height, age, gender
}).describe("Input data for generating a personalized meal plan.");

export type GenerateMealPlanInput = z.infer<typeof GenerateMealPlanInputSchema>;

const GenerateMealPlanOutputSchema = z.object({
  weeklyMealPlan: z.string().describe('A detailed weekly meal plan in Markdown format.'),
});
export type GenerateMealPlanOutput = z.infer<typeof GenerateMealPlanOutputSchema>;

export async function generateMealPlan(input: GenerateMealPlanInput): Promise<GenerateMealPlanOutput> {
  return generateMealPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMealPlanPrompt',
  input: {schema: GenerateMealPlanInputSchema},
  output: {schema: GenerateMealPlanOutputSchema},
  prompt: `You are a personal fitness and diet coach.

You will generate a highly customized weekly meal plan for the user based on their specific details:
Dietary Restrictions: {{{dietaryRestrictions}}}
Fitness Goals: {{{fitnessGoals}}}
Preferences: {{{preferences}}}
Workout Frequency: {{{workoutFrequency}}}
{{#if weight}}Weight: {{{weight}}} kg{{/if}}
{{#if height}}Height: {{{height}}} cm{{/if}}
{{#if age}}Age: {{{age}}} years{{/if}}
{{#if gender}}Gender: {{{gender}}}{{/if}}

Take all this information into account when creating the meal plan.
Provide the meal plan in a well-formatted Markdown and easy-to-read manner.
The plan should include recipes and nutritional information where appropriate.
Use Markdown headings for days of the week (e.g., # Monday), subheadings for meals (e.g., ## Breakfast), and bullet points for ingredients or instructions.
Ensure the output is a single string containing the entire Markdown document.`,
});

const generateMealPlanFlow = ai.defineFlow(
  {
    name: 'generateMealPlanFlow',
    inputSchema: GenerateMealPlanInputSchema,
    outputSchema: GenerateMealPlanOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
