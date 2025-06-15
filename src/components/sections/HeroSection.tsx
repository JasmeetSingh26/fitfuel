import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const scrollToForm = () => {
    const formElement = document.getElementById('meal-plan-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background to-blue-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary mb-6">
          Welcome to <span className="text-accent">FitFuel AI</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-3xl mx-auto">
          Unlock your peak performance with personalized meal plans designed by AI. Tell us your fitness goals, dietary needs, and preferences, and let FitFuel AI craft your perfect weekly menu!
        </p>
        {/* Image section removed */}
        <Button size="lg" className="font-semibold text-lg bg-accent hover:bg-accent/90 text-accent-foreground mt-10" onClick={scrollToForm}
        aria-label="Get started with your meal plan for free"
        >
 Get Your Personalized Meal Plan For <br></br> FREE
 <ChevronDown className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
