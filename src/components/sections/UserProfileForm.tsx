"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { UserProfileFormValues } from "@/lib/schemas";
import { UserProfileSchema, workoutFrequencyOptions, genderOptions } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, ListChecks, Target, Dumbbell, Scale, Ruler, Cake, Users, Loader2 } from 'lucide-react';

interface UserProfileFormProps {
  onSubmit: (data: UserProfileFormValues) => Promise<void>;
  isLoading: boolean;
}

export function UserProfileForm({ onSubmit, isLoading }: UserProfileFormProps) {
  const form = useForm<UserProfileFormValues>({
    resolver: zodResolver(UserProfileSchema),
    defaultValues: {
      dietaryRestrictions: "",
      fitnessGoals: "",
      preferences: "",
      workoutFrequency: undefined,
      weight: undefined,
      height: undefined,
      age: undefined,
      gender: undefined,
    },
  });

  const handleSubmit = async (data: UserProfileFormValues) => {
    // Ensure numeric fields are numbers or undefined, not empty strings
    const processedData = {
        ...data,
        weight: data.weight ? Number(data.weight) : undefined,
        height: data.height ? Number(data.height) : undefined,
        age: data.age ? Number(data.age) : undefined,
    };
    await onSubmit(processedData);
  };

  return (
    <Card id="meal-plan-form" className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-primary flex items-center gap-2">
          <ListChecks className="h-8 w-8" />
          Tell Us About Yourself
        </CardTitle>
        <CardDescription>
          Provide your details so we can generate the perfect meal plan for you. The more details you provide, the better the plan!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="fitnessGoals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-lg"><Target className="h-5 w-5 text-primary"/>Fitness Goals</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Lose weight, gain muscle, improve endurance" {...field} />
                  </FormControl>
                  <FormDescription>
                    What are you aiming to achieve with your fitness?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-lg"><Scale className="h-5 w-5 text-primary"/>Weight (kg)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 70" {...field} onChange={e => field.onChange(e.target.value === '' ? undefined : parseFloat(e.target.value))} />
                    </FormControl>
                    <FormDescription>Your current weight in kilograms (optional).</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-lg"><Ruler className="h-5 w-5 text-primary"/>Height (cm)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 175" {...field} onChange={e => field.onChange(e.target.value === '' ? undefined : parseFloat(e.target.value))} />
                    </FormControl>
                    <FormDescription>Your current height in centimeters (optional).</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-lg"><Cake className="h-5 w-5 text-primary"/>Age</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 30" {...field} onChange={e => field.onChange(e.target.value === '' ? undefined : parseInt(e.target.value, 10))} />
                    </FormControl>
                    <FormDescription>Your current age in years (optional).</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-lg"><Users className="h-5 w-5 text-primary"/>Gender</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {genderOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>Your gender (optional, but helps tailor advice).</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="workoutFrequency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-lg"><Dumbbell className="h-5 w-5 text-primary"/>Workout Frequency</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your weekly workout frequency" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {workoutFrequencyOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>How often do you typically work out?</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dietaryRestrictions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-lg"><ListChecks className="h-5 w-5 text-primary"/>Dietary Restrictions</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Vegetarian, gluten-free, no dairy, specific allergies, or 'none'"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Any foods you avoid or specific diets you follow?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="preferences"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-lg"><Flame className="h-5 w-5 text-primary"/>Food Preferences & Cuisines</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Love spicy food, prefer Italian cuisine, dislike mushrooms, favorite fruits/vegetables"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    What types of food or cuisines do you enjoy? Any dislikes?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isLoading} size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Generating Your Plan...
                </>
              ) : (
                "Create My Meal Plan"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
