"use client";

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { UserProfileForm } from '@/components/sections/UserProfileForm';
import { MealPlanDisplay } from '@/components/sections/MealPlanDisplay';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { generateMealPlan, type GenerateMealPlanInput } from '@/ai/flows/generate-meal-plan';
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [mealPlan, setMealPlan] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFormSubmit = async (data: GenerateMealPlanInput) => {
    setIsLoading(true);
    setError(null);
    setMealPlan(null);

    try {
      const result = await generateMealPlan(data);
      if (result && result.weeklyMealPlan) {
        setMealPlan(result.weeklyMealPlan);
        toast({
          title: "Meal Plan Generated!",
          description: "Your personalized meal plan is ready.",
          variant: "default",
        });
      } else {
        throw new Error("Failed to generate meal plan: No content received.");
      }
    } catch (e: any) {
      console.error("Error generating meal plan:", e);
      const errorMessage = e.message || "An unexpected error occurred. Please try again.";
      setError(errorMessage);
      toast({
        title: "Error Generating Plan",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <div className="container mx-auto px-4 py-12">
          <UserProfileForm onSubmit={handleFormSubmit} isLoading={isLoading} />
          {isLoading && (
            <div className="mt-12">
              <LoadingSpinner />
              <p className="text-center text-muted-foreground mt-4">Generating your personalized plan... This might take a moment.</p>
            </div>
          )}
          {error && !isLoading && (
             <Alert variant="destructive" className="mt-12 max-w-2xl mx-auto">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {mealPlan && !isLoading && (
            <MealPlanDisplay mealPlan={mealPlan} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
