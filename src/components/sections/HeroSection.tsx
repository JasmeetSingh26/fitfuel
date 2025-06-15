import Image from 'next/image';
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
        <div className="relative aspect-[2/1] max-w-4xl mx-auto mb-10 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://placehold.co/1200x600.png"
            alt="Healthy food and fitness equipment"
            layout="fill"
            objectFit="cover"
            data-ai-hint="fitness healthy food"
            priority
          />
           <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
             <h2 className="text-3xl md:text-4xl font-headline font-semibold text-white p-4 bg-black/50 rounded">
               Your Journey to a Healthier You Starts Here
             </h2>
           </div>
        </div>
        <Button
          size="lg"
          className="font-semibold text-lg bg-accent hover:bg-accent/90 text-accent-foreground"
          onClick={scrollToForm}
          aria-label="Get started with your meal plan"
        >
          Get Your Personalized Meal Plan
          <ChevronDown className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
