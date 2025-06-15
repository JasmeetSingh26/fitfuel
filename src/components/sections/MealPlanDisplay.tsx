import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Printer, FileText } from "lucide-react";

interface MealPlanDisplayProps {
  mealPlan: string | null;
}

// Basic Markdown-to-HTML-like parser
// This is a very simplified parser. For robust markdown, a library would be better.
// But per guidelines, avoiding new libraries unless instructed.
const parseMealPlanContent = (content: string): JSX.Element[] => {
  const lines = content.split('\\n'); // AI often uses \n for newlines
  
  return lines.map((line, index) => {
    line = line.trim();

    if (line.startsWith('### ') || line.startsWith('## ') || line.startsWith('# ')) { // Headings
      const level = line.startsWith('### ') ? 3 : (line.startsWith('## ') ? 2 : 1);
      const text = line.substring(level + 1).trim();
      if (level === 1) return <h2 key={index} className="text-2xl font-headline mt-4 mb-2 text-primary">{text}</h2>;
      if (level === 2) return <h3 key={index} className="text-xl font-headline mt-3 mb-1 text-primary-dark">{text}</h3>;
      return <h4 key={index} className="text-lg font-headline mt-2 mb-1">{text}</h4>;
    }
    if (line.startsWith('* ') || line.startsWith('- ')) { // List items
      return <li key={index} className="ml-6 list-disc">{line.substring(2).trim()}</li>;
    }
    if (line.match(/\*\*(.*?)\*\*|__(.*?)__/)) { // Bold text
      return <p key={index} className="my-1" dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*|__(.*?)__/g, '<strong>$1$2</strong>') }} />;
    }
    if (line === '') {
      return <br key={index} />;
    }
    return <p key={index} className="my-1">{line}</p>;
  });
};


export function MealPlanDisplay({ mealPlan }: MealPlanDisplayProps) {
  if (!mealPlan) {
    return null;
  }

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      const mealPlanContentElement = document.getElementById('mealPlanContent');
      if (mealPlanContentElement) {
        printWindow.document.write('<html><head><title>FitFuel AI - Meal Plan</title>');
        // Basic styling for print
        printWindow.document.write('<style>');
        printWindow.document.write(`
          body { font-family: 'PT Sans', sans-serif; line-height: 1.6; color: #333; }
          h1, h2, h3, h4 { font-family: 'Poppins', sans-serif; color: #29ABE2; margin-bottom: 0.5em; }
          h1 { font-size: 24px; } h2 { font-size: 20px; } h3 { font-size: 18px; }
          ul { padding-left: 20px; }
          strong { font-weight: bold; }
          .print-header { text-align: center; margin-bottom: 20px; }
          .print-header h1 { font-size: 28px; }
        `);
        printWindow.document.write('</style></head><body>');
        printWindow.document.write('<div class="print-header"><h1>FitFuel AI - Your Weekly Meal Plan</h1></div>');
        printWindow.document.write(mealPlanContentElement.innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
      }
    }
  };


  const parsedContent = parseMealPlanContent(mealPlan);

  return (
    <Card className="w-full max-w-3xl mx-auto mt-12 shadow-xl">
      <CardHeader className="flex flex-row justify-between items-start">
        <div>
          <CardTitle className="font-headline text-3xl text-primary flex items-center gap-2">
             <FileText className="h-8 w-8" />
            Your Personalized Meal Plan
          </CardTitle>
          <CardDescription>Here is your AI-generated weekly meal plan. Enjoy!</CardDescription>
        </div>
        <Button variant="outline" size="icon" onClick={handlePrint} aria-label="Print meal plan">
          <Printer className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent>
        <div id="mealPlanContent" className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none space-y-4 text-foreground/90">
          {parsedContent.map((element, i) => 
            React.isValidElement(element) ? React.cloneElement(element, { key: i }) : element
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// Need React for JSX parsing
import React from 'react';
