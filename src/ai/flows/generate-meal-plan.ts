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

const GenerateMealPlanInputSchema = z.object({
  dietaryRestrictions: z
    .string()
    .describe('Any dietary restrictions the user has (e.g., vegetarian, vegan, gluten-free).'),
  fitnessGoals: z.string().describe('The fitness goals of the user (e.g., lose weight, gain muscle).'),
  preferences: z.string().describe('The food preferences of the user (e.g., cuisine, favorite foods).'),
  workoutFrequency: z
    .string()
    .describe('How many times per week the user works out (e.g. 3-5 times a week).'),
});
export type GenerateMealPlanInput = z.infer<typeof GenerateMealPlanInputSchema>;

const GenerateMealPlanOutputSchema = z.object({
  weeklyMealPlan: z.string().describe('A detailed weekly meal plan.'),
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

You will generate a highly customized weekly meal plan for the user based on their specific dietary restrictions, fitness goals and food preferences. Take into account their workout frequency when creating the meal plan. 

Dietary Restrictions: {{{dietaryRestrictions}}}
Fitness Goals: {{{fitnessGoals}}}
Preferences: {{{preferences}}}
WorkoutFrequency: {{{workoutFrequency}}}

Provide the meal plan in a well-formatted and easy-to-read manner, including recipes and nutritional information.`,
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
