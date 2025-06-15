import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Printer, FileText } from "lucide-react";

interface MealPlanDisplayProps {
  mealPlan: string | null;
}

// Basic Markdown-to-HTML-like parser
const parseMealPlanContent = (content: string): JSX.Element[] => {
  // Split by newline characters (both \n and \\n from AI)
  const lines = content.split(/\r?\n|\\n/);
  
  let inList = false;
  const elements: JSX.Element[] = [];

  lines.forEach((line, index) => {
    const originalLine = line;
    line = line.trim();

    // Handle headings (Markdown #, ##, ###)
    if (line.startsWith('#')) {
      if (inList) {
        elements.push(<ul key={`ul-end-${index-1}`} className="ml-6 list-disc space-y-1 mb-3"></ul>); // Close previous list
        inList = false;
      }
      let level = 0;
      while(line[level] === '#') level++;
      const text = line.substring(level).trim();
      if (level === 1) elements.push(<h2 key={index} className="text-2xl font-headline mt-6 mb-3 text-primary border-b pb-1">{text}</h2>);
      else if (level === 2) elements.push(<h3 key={index} className="text-xl font-headline mt-4 mb-2 text-gray-700 dark:text-gray-300">{text}</h3>);
      else if (level === 3) elements.push(<h4 key={index} className="text-lg font-semibold mt-3 mb-1 text-gray-600 dark:text-gray-400">{text}</h4>);
      else elements.push(<h5 key={index} className="text-md font-semibold mt-2 mb-1">{text}</h5>);
      return;
    }
    
    // Handle list items (Markdown *, -, +)
    if (line.startsWith('* ') || line.startsWith('- ') || line.startsWith('+ ')) {
      if (!inList) {
        // This is a bit tricky: React needs a key for the ul.
        // We can't just open <ul> here and close later easily across iterations.
        // Instead, we'll collect list items and wrap them later, or render <li> directly.
        // For simplicity now, let's make each a separate <li> under a conceptual list.
        // A more robust parser would group them.
        // For now, let's assume each list item is rendered independently for styling.
      }
      // inList = true; // This simple parser won't create a single <ul> tag currently.
      // For better structure, one would buffer <li> items and wrap them in <ul>.
      // Simplified:
      elements.push(<li key={index} className="ml-6 list-disc my-0.5">{line.substring(2).trim()}</li>);
      return;
    } else {
      if (inList) {
         // elements.push(<ul key={`ul-end-${index-1}`} className="ml-6 list-disc space-y-1 mb-3"></ul>); // Close previous list
        inList = false; // Not strictly necessary with current li handling but good for logic
      }
    }

    // Handle bold text (Markdown **text** or __text__)
    // Handle italic text (Markdown *text* or _text_)
    // This regex can be a bit greedy, careful with complex nesting.
    let processedLine = originalLine; // Use original line for spacing if needed, trim for logic
    processedLine = processedLine.replace(/\*\*(.*?)\*\*|__(.*?)__/g, '<strong>$1$2</strong>');
    processedLine = processedLine.replace(/\*(.*?)\*|_(.*?)_/g, '<em>$1$2</em>');

    if (line === '') { // Handle empty lines as paragraph breaks or spacers
      elements.push(<div key={index} className="h-3"></div>); // Spacer div
    } else {
      elements.push(<p key={index} className="my-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: processedLine }} />);
    }
  });
  
  // If the last item was part of a list (in a more complex parser)
  if (inList) {
     // elements.push(<ul key={`ul-end-final`} className="ml-6 list-disc space-y-1 mb-3"></ul>);
  }

  return elements;
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
        printWindow.document.write('<style>');
        printWindow.document.write(`
          body { font-family: 'PT Sans', sans-serif; line-height: 1.6; color: #333; padding: 20px; }
          h1, h2, h3, h4, h5 { font-family: 'Poppins', sans-serif; color: #1a73e8; margin-bottom: 0.5em; margin-top: 1em; }
          h1 { font-size: 28px; text-align: center; border-bottom: 2px solid #eee; padding-bottom: 10px; } 
          h2 { font-size: 22px; border-bottom: 1px solid #eee; padding-bottom: 5px;} 
          h3 { font-size: 18px; }
          h4 { font-size: 16px; }
          ul { padding-left: 20px; margin-bottom: 1em; }
          li { margin-bottom: 0.25em; }
          p { margin-bottom: 0.75em; }
          strong { font-weight: bold; }
          em { font-style: italic; }
          .print-header { text-align: center; margin-bottom: 20px; }
          .print-header h1 { font-size: 32px; color: #29ABE2;}
        `);
        printWindow.document.write('</style></head><body>');
        printWindow.document.write('<div class="print-header"><h1>FitFuel AI - Your Weekly Meal Plan</h1></div>');
        printWindow.document.write(mealPlanContentElement.innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        // Timeout to ensure content is loaded before printing
        setTimeout(() => {
            printWindow.print();
            printWindow.close(); // Optionally close after printing
        }, 500);
      }
    }
  };

  const parsedContent = parseMealPlanContent(mealPlan);

  return (
    <Card className="w-full max-w-4xl mx-auto mt-12 shadow-xl">
      <CardHeader className="flex flex-row justify-between items-start">
        <div>
          <CardTitle className="font-headline text-3xl text-primary flex items-center gap-2">
             <FileText className="h-8 w-8" />
            Your Personalized Meal Plan
          </CardTitle>
          <CardDescription>Here is your AI-generated weekly meal plan. Scroll down to see all days and meals. Enjoy!</CardDescription>
        </div>
        <Button variant="outline" size="icon" onClick={handlePrint} aria-label="Print meal plan">
          <Printer className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent>
        <div id="mealPlanContent" className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none space-y-1 text-foreground/90">
          {parsedContent.map((element, i) => 
            React.isValidElement(element) ? React.cloneElement(element, { key: `mp-${i}` }) : element
          )}
        </div>
      </CardContent>
    </Card>
  );
}
