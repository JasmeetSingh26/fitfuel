// Summarizes recipe information for a quick overview of nutritional content.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecipeInfoInputSchema = z.object({
  recipeName: z.string().describe('The name of the recipe.'),
  ingredients: z.string().describe('A list of ingredients used in the recipe.'),
  instructions: z.string().describe('Cooking instructions for the recipe.'),
  calories: z.number().describe('The total calorie count of the recipe.'),
  protein: z.number().describe('The total protein content in grams.'),
  fat: z.number().describe('The total fat content in grams.'),
  carbohydrates: z.number().describe('The total carbohydrate content in grams.'),
});

export type RecipeInfoInput = z.infer<typeof RecipeInfoInputSchema>;

const RecipeSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the recipe, including key nutritional information.'),
});

export type RecipeSummaryOutput = z.infer<typeof RecipeSummaryOutputSchema>;

export async function summarizeRecipeInfo(input: RecipeInfoInput): Promise<RecipeSummaryOutput> {
  return summarizeRecipeInfoFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeRecipeInfoPrompt',
  input: {schema: RecipeInfoInputSchema},
  output: {schema: RecipeSummaryOutputSchema},
  prompt: `Summarize the nutritional information for the following recipe:

Recipe Name: {{{recipeName}}}
Ingredients: {{{ingredients}}}
Instructions: {{{instructions}}}
Calories: {{{calories}}} kcal
Protein: {{{protein}}} g
Fat: {{{fat}}} g
Carbohydrates: {{{carbohydrates}}} g

Provide a summary that highlights the key nutritional aspects of the recipe.
`,
});

const summarizeRecipeInfoFlow = ai.defineFlow(
  {
    name: 'summarizeRecipeInfoFlow',
    inputSchema: RecipeInfoInputSchema,
    outputSchema: RecipeSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
