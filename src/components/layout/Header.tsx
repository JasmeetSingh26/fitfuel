import { Code2 } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="py-6 bg-background shadow-md shadow-stone-900">
      <div className="container mx-auto flex items-center justify-center px-4">
        <Link href="/" className="flex items-center gap-3 text-2xl font-headline font-bold text-primary hover:opacity-80 transition-opacity" aria-label="DSA Sheet Home">
          <Code2 className="h-8 w-8" />
          <span>Top DSA Questions</span>
        </Link>
      </div>
    </header>
  );
}
