import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { FirebaseAnalyticsInitializer } from '@/components/analytics/FirebaseAnalyticsInitializer';

export const metadata: Metadata = {
  title: 'Top DSA Questions',
  description: 'A curated list of the most important DSA questions for interview preparation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("min-h-screen bg-background font-body antialiased")}>
        <FirebaseAnalyticsInitializer />
        {children}
        <Toaster />
        <Script id="omnidimension-web-widget" async src="https://backend.omnidim.io/web_widget.js?secret_key=97728b196387e10bb4a5456e1bfc33ac" ></Script>
      </body>
    </html>
  );
}
