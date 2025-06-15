"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { UserProfileFormValues } from "@/lib/schemas";
import { UserProfileSchema, workoutFrequencyOptions } from "@/lib/schemas";
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
import { Flame, ListChecks, Target, Dumbbell } from 'lucide-react';

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
    },
  });

  const handleSubmit = async (data: UserProfileFormValues) => {
    await onSubmit(data);
  };

  return (
    <Card id="meal-plan-form" className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-primary flex items-center gap-2">
          <ListChecks className="h-8 w-8" />
          Tell Us About Yourself
        </CardTitle>
        <CardDescription>
          Provide your details so we can generate the perfect meal plan for you.
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
                      placeholder="e.g., Vegetarian, gluten-free, no dairy, none"
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
                      placeholder="e.g., Love spicy food, prefer Italian cuisine, dislike mushrooms"
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

// Add Loader2 to imports if not already there, or use existing LoadingSpinner
import { Loader2 } from 'lucide-react';
