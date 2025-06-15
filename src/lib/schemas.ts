import { z } from 'zod';

export const UserProfileSchema = z.object({
  dietaryRestrictions: z.string().min(3, { message: "Please describe your dietary restrictions (e.g., vegetarian, none)."}).max(200),
  fitnessGoals: z.string().min(3, { message: "Please describe your fitness goals (e.g., weight loss, muscle gain)."}).max(200),
  preferences: z.string().min(3, { message: "Please list your food preferences (e.g., Italian cuisine, loves chicken)."}).max(200),
  workoutFrequency: z.string({ required_error: 'Workout frequency is required.'}).min(1, {message: 'Workout frequency is required.'}),
});

export type UserProfileFormValues = z.infer<typeof UserProfileSchema>;

export const workoutFrequencyOptions = [
  "Sedentary (little to no exercise)",
  "Lightly active (light exercise/sports 1-3 days/week)",
  "Moderately active (moderate exercise/sports 3-5 days/week)",
  "Very active (hard exercise/sports 6-7 days a week)",
  "Extra active (very hard exercise/sports & physical job)"
];
