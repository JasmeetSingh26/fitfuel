import { UtensilsCrossed } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="py-6 bg-background shadow-md">
      <div className="container mx-auto flex items-center justify-center px-4">
        <Link href="/" className="flex items-center gap-2 text-2xl font-headline font-bold text-primary hover:opacity-80 transition-opacity" aria-label="FitFuel AI Home">
          <UtensilsCrossed className="h-8 w-8" />
          <span>FitFuel AI</span>
        </Link>
        {/* Navigation can be added here if needed in future */}
      </div>
    </header>
  );
}
