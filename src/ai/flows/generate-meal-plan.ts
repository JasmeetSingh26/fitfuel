
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
import { UserProfileSchema } from '@/lib/schemas';

const GenerateMealPlanInputSchema = UserProfileSchema.extend({
}).describe("Input data for generating a personalized meal plan.");

export type GenerateMealPlanInput = z.infer<typeof GenerateMealPlanInputSchema>;

const MealSchema = z.object({
  name: z.string().describe("Name of the meal (e.g., Breakfast, Lunch, Dinner, Snack)."),
  description: z.string().describe("Description of the meal, including food items and approximate quantities. Be specific and appealing."),
  calories: z.number().optional().describe("Estimated calorie count for this meal (e.g., 350)."),
  protein: z.string().optional().describe("Estimated protein content for this meal (e.g., '20g')."),
  fat: z.string().optional().describe("Estimated fat content for this meal (e.g., '15g')."),
  carbs: z.string().optional().describe("Estimated carbohydrate content for this meal (e.g., '40g')."),
}).describe("Detailed information for a single meal.");

const DailyMealPlanSchema = z.object({
  day: z.string().describe("Day of the week (e.g., Monday, Tuesday)."),
  meals: z.array(MealSchema).min(3,"Each day should have at least Breakfast, Lunch, and Dinner.").describe("List of meals for the day. Typically includes Breakfast, Lunch, Dinner, and optionally Snacks."),
  dailyTotals: z.object({
    calories: z.number().optional().describe("Total estimated calories for the day."),
    protein: z.string().optional().describe("Total estimated protein for the day (e.g., '100g')."),
    fat: z.string().optional().describe("Total estimated fat for the day (e.g., '60g')."),
    carbs: z.string().optional().describe("Total estimated carbohydrates for the day (e.g., '150g')."),
  }).optional().describe("Summary of daily nutritional totals for calories, protein, fat, and carbs."),
}).describe("A plan for all meals and nutritional totals for a single day.");

const GenerateMealPlanOutputSchema = z.object({
  mealPlanTitle: z.string().optional().describe("A catchy and personalized title for the generated meal plan (e.g., 'Your Energizing Week of Healthy Eating!')."),
  introduction: z.string().optional().describe("A brief introductory message or overview of the meal plan, perhaps highlighting how it aligns with user goals."),
  weeklyMealPlan: z.array(DailyMealPlanSchema).length(7, "The meal plan must cover all 7 days of the week.").describe("A list of daily meal plans for the entire week (7 days)."),
  closingNotes: z.string().optional().describe("Any concluding remarks, tips for success, hydration reminders, or general healthy eating advice."),
});
export type GenerateMealPlanOutput = z.infer<typeof GenerateMealPlanOutputSchema>;

export async function generateMealPlan(input: GenerateMealPlanInput): Promise<GenerateMealPlanOutput> {
  return generateMealPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMealPlanPrompt',
  input: {schema: GenerateMealPlanInputSchema},
  output: {schema: GenerateMealPlanOutputSchema},
  prompt: `You are an expert personal fitness and diet coach.

Your task is to generate a highly customized weekly meal plan based on the user's specific details.

User Profile:
- Dietary Restrictions: {{{dietaryRestrictions}}}
- Fitness Goals: {{{fitnessGoals}}}
- Food Preferences & Cuisines: {{{preferences}}}
- Workout Frequency: {{{workoutFrequency}}}
{{#if weight}}- Weight: {{{weight}}} kg{{/if}}
{{#if height}}- Height: {{{height}}} cm{{/if}}
{{#if age}}- Age: {{{age}}} years{{/if}}
{{#if gender}}- Gender: {{{gender}}}{{/if}}

Output Requirements:
Your output MUST be a JSON object conforming to the 'GenerateMealPlanOutputSchema'.
**Crucially, the 'weeklyMealPlan' array MUST contain exactly 7 'DailyMealPlan' objects, one for each day from Monday to Sunday.** Failure to provide 7 days will result in an error.
Strive to include estimates for calories, protein, fat, and carbs for each meal and for daily totals where possible, formatted as specified.

- mealPlanTitle: Create a catchy, personalized title for the plan.
- introduction: Write a brief, encouraging introduction.
- weeklyMealPlan: An array of EXACTLY 7 DailyMealPlan objects (Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday).
  - For each DailyMealPlan:
    - day: The name of the day (e.g., "Monday").
    - meals: An array of Meal objects. Include at least Breakfast, Lunch, and Dinner. Optionally add 1-2 Snacks.
      - For each Meal:
        - name: e.g., "Breakfast", "Lunch", "Dinner", "Morning Snack".
        - description: Provide a DETAILED description of the food items, including approximate quantities. Make it sound appealing.
        - calories: Estimated calories for the meal (e.g., 350). Provide if possible.
        - protein: Estimated protein in grams (e.g., "25g"). Provide if possible. **Format strictly as value and unit, e.g., "25g", not conversational text.**
        - fat: Estimated fat in grams (e.g., "15g"). Provide if possible. **Format strictly as value and unit, e.g., "15g", not conversational text.**
        - carbs: Estimated carbohydrates in grams (e.g., "50g"). Provide if possible. **Format strictly as value and unit, e.g., "50g", not conversational text.**
    - dailyTotals: An object summarizing total estimated calories, protein, fat, and carbs for that day. Provide these estimates if possible. Ensure these totals are reasonable sums of the meal values if meal-level nutrition is provided.
      - calories: Total estimated calories for the day. Provide if possible.
      - protein: Total estimated protein for the day (e.g., "100g"). Provide if possible.
      - fat: Total estimated fat for the day (e.g., "60g"). Provide if possible.
      - carbs: Total estimated carbohydrates for the day (e.g., "150g"). Provide if possible.
- closingNotes: Provide some encouraging closing remarks, general tips, or hydration reminders.

Example for a single meal within a day:
{
  "name": "Breakfast",
  "description": "Greek yogurt (200g) with mixed berries (1 cup) and a sprinkle of chia seeds (1 tbsp).",
  "calories": 350,
  "protein": "22g",
  "fat": "10g",
  "carbs": "45g"
}

Take all user information into account to make the meal plan as personalized and effective as possible.
Ensure the meal descriptions are enticing and practical.
Provide varied meals throughout the week.
**The JSON structure must be strictly followed, especially the requirement for a 7-day 'weeklyMealPlan' and the concise format for protein, fat, and carb strings (e.g., "25g").**
`,
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

