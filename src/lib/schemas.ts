import { z } from 'zod';

export const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
  { value: 'prefer_not_to_say', label: 'Prefer not to say' },
] as const;

export const UserProfileSchema = z.object({
  dietaryRestrictions: z.string().min(3, { message: "Please describe your dietary restrictions (e.g., vegetarian, none)."}).max(200),
  fitnessGoals: z.string().min(3, { message: "Please describe your fitness goals (e.g., weight loss, muscle gain)."}).max(200),
  preferences: z.string().min(3, { message: "Please list your food preferences (e.g., Italian cuisine, loves chicken)."}).max(200),
  workoutFrequency: z.string({ required_error: 'Workout frequency is required.'}).min(1, {message: 'Workout frequency is required.'}),
  weight: z.preprocess(
    (val) => (val === "" ? undefined : Number(val)),
    z.number({invalid_type_error: "Weight must be a number."}).positive({ message: "Weight must be a positive number." }).optional()
  ).describe("User's current weight in kilograms."),
  height: z.preprocess(
    (val) => (val === "" ? undefined : Number(val)),
    z.number({invalid_type_error: "Height must be a number."}).positive({ message: "Height must be a positive number." }).optional()
  ).describe("User's current height in centimeters."),
  age: z.preprocess(
    (val) => (val === "" ? undefined : Number(val)),
    z.number({invalid_type_error: "Age must be a number."}).int({ message: "Age must be a whole number."}).positive({ message: "Age must be a positive number." }).optional()
  ).describe("User's age in years."),
  gender: z.enum(genderOptions.map(opt => opt.value) as [string, ...string[]], {
    required_error: "Gender is required.",
    invalid_type_error: "Please select a valid gender option.",
  }).describe("User's gender."),
});

export type UserProfileFormValues = z.infer<typeof UserProfileSchema>;

export const workoutFrequencyOptions = [
  "Sedentary (little to no exercise)",
  "Lightly active (light exercise/sports 1-3 days/week)",
  "Moderately active (moderate exercise/sports 3-5 days/week)",
  "Very active (hard exercise/sports 6-7 days a week)",
  "Extra active (very hard exercise/sports & physical job)"
];
