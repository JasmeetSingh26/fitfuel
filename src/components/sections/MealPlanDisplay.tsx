
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Printer, FileText, Zap, BookOpenText, ChevronsDown } from "lucide-react";
import type { GenerateMealPlanOutput, DailyMealPlan, Meal } from '@/ai/flows/generate-meal-plan';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface MealPlanDisplayProps {
  mealPlanOutput: GenerateMealPlanOutput | null;
}

export function MealPlanDisplay({ mealPlanOutput }: MealPlanDisplayProps) {
  if (!mealPlanOutput || !mealPlanOutput.weeklyMealPlan) {
    return null;
  }

  const { mealPlanTitle, introduction, weeklyMealPlan, closingNotes } = mealPlanOutput;

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      const mealPlanContentElement = document.getElementById('mealPlanPrintContent');
      if (mealPlanContentElement) {
        printWindow.document.write('<html><head><title>FitFuel AI - Meal Plan</title>');
        // Basic print styling - can be significantly expanded
        printWindow.document.write(`
          <style>
            body { font-family: 'PT Sans', sans-serif; line-height: 1.6; color: #333; padding: 20px; margin: 0 auto; max-width: 800px; }
            h1, h2, h3, h4, h5 { font-family: 'Poppins', sans-serif; color: #1a73e8; margin-bottom: 0.5em; margin-top: 1em; }
            h1 { font-size: 26px; text-align: center; border-bottom: 2px solid #eee; padding-bottom: 10px; color: #29ABE2; }
            h2 { font-size: 22px; margin-top: 1.5em; } /* Meal Plan Title */
            h3 { font-size: 20px; color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top:1.5em; } /* Day Titles */
            h4 { font-size: 16px; color: #555; margin-top:1em; } /* Meal Names */
            p { margin-bottom: 0.75em; }
            table { width: 100%; border-collapse: collapse; margin-top: 1em; margin-bottom: 2em; font-size: 0.9em; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; font-weight: bold; }
            .meal-description { font-style: italic; color: #444; }
            .totals-row td { font-weight: bold; background-color: #e9f5ff; }
            .print-header { text-align: center; margin-bottom: 20px; }
            .introduction, .closing-notes { margin-top: 20px; margin-bottom: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #29ABE2; }
            @media print {
              body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
              .no-print { display: none; }
            }
          </style>
        `);
        printWindow.document.write('</head><body>');
        printWindow.document.write('<div class="print-header"><h1>FitFuel AI - Your Weekly Meal Plan</h1></div>');
        printWindow.document.write('<div id="mealPlanPrintContentInternal">');
        if (mealPlanTitle) printWindow.document.write(`<h2>${mealPlanTitle}</h2>`);
        if (introduction) printWindow.document.write(`<div class="introduction"><p>${introduction.replace(/\n/g, '<br>')}</p></div>`);
        
        weeklyMealPlan.forEach(dayPlan => {
          printWindow.document.write(`<h3>${dayPlan.day}</h3>`);
          printWindow.document.write('<table><thead><tr><th>Meal</th><th>Description</th><th>Calories</th><th>Protein</th><th>Fat</th><th>Carbs</th></tr></thead><tbody>');
          dayPlan.meals.forEach(meal => {
            printWindow.document.write(`<tr>
              <td>${meal.name}</td>
              <td class="meal-description">${meal.description}</td>
              <td>${meal.calories ? `${meal.calories} kcal` : '-'}</td>
              <td>${meal.protein || '-'}</td>
              <td>${meal.fat || '-'}</td>
              <td>${meal.carbs || '-'}</td>
            </tr>`);
          });
          if (dayPlan.dailyTotals) {
            printWindow.document.write(`<tr class="totals-row">
              <td><strong>Daily Totals</strong></td>
              <td></td>
              <td>${dayPlan.dailyTotals.calories ? `${dayPlan.dailyTotals.calories} kcal` : '-'}</td>
              <td>${dayPlan.dailyTotals.protein || '-'}</td>
              <td>${dayPlan.dailyTotals.fat || '-'}</td>
              <td>${dayPlan.dailyTotals.carbs || '-'}</td>
            </tr>`);
          }
          printWindow.document.write('</tbody></table>');
        });

        if (closingNotes) printWindow.document.write(`<div class="closing-notes"><p>${closingNotes.replace(/\n/g, '<br>')}</p></div>`);
        printWindow.document.write('</div></body></html>');
        printWindow.document.close();
        setTimeout(() => {
            printWindow.print();
        }, 500); // Give browser time to render content
      }
    }
  };

  return (
    <Card className="w-full max-w-5xl mx-auto mt-12 shadow-xl animate-fade-in">
      <CardHeader className="flex flex-row justify-between items-start">
        <div>
          <CardTitle className="font-headline text-3xl text-primary flex items-center gap-2">
            <Zap className="h-8 w-8" />
            {mealPlanTitle || "Your Personalized Meal Plan"}
          </CardTitle>
          {introduction && <CardDescription className="mt-2 text-base">{introduction}</CardDescription>}
        </div>
        <Button variant="outline" size="icon" onClick={handlePrint} aria-label="Print meal plan" className="no-print">
          <Printer className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent>
        <div id="mealPlanPrintContent"> {/* Wrapper for print content */}
          <Accordion type="single" collapsible className="w-full" defaultValue={`item-${weeklyMealPlan[0]?.day || '0'}`}>
            {weeklyMealPlan.map((dayPlan: DailyMealPlan, index: number) => (
              <AccordionItem value={`item-${dayPlan.day || index}`} key={dayPlan.day || index} className="border-b border-border/50 last:border-b-0">
                <AccordionTrigger className="py-4 px-2 hover:bg-muted/50 rounded-md group">
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-xl md:text-2xl font-headline text-primary group-hover:text-accent transition-colors">
                      {dayPlan.day}
                    </h3>
                    {dayPlan.dailyTotals?.calories && (
                      <span className="text-sm font-medium text-muted-foreground pr-4">
                        {dayPlan.dailyTotals.calories} kcal
                      </span>
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 px-1">
                  <Table className="border rounded-lg shadow-sm">
                    <TableHeader>
                      <TableRow className="bg-muted/30">
                        <TableHead className="w-[120px] font-semibold text-foreground/80">Meal</TableHead>
                        <TableHead className="font-semibold text-foreground/80">Description</TableHead>
                        <TableHead className="w-[100px] text-right font-semibold text-foreground/80">Calories</TableHead>
                        <TableHead className="w-[90px] text-right font-semibold text-foreground/80">Protein</TableHead>
                        <TableHead className="w-[90px] text-right font-semibold text-foreground/80">Fat</TableHead>
                        <TableHead className="w-[90px] text-right font-semibold text-foreground/80">Carbs</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {dayPlan.meals.map((meal: Meal, mealIndex: number) => (
                        <TableRow key={mealIndex} className="hover:bg-muted/20">
                          <TableCell className="font-medium py-3">{meal.name}</TableCell>
                          <TableCell className="py-3 text-sm text-foreground/90">{meal.description}</TableCell>
                          <TableCell className="text-right py-3">{meal.calories ? `${meal.calories} kcal` : '-'}</TableCell>
                          <TableCell className="text-right py-3">{meal.protein || '-'}</TableCell>
                          <TableCell className="text-right py-3">{meal.fat || '-'}</TableCell>
                          <TableCell className="text-right py-3">{meal.carbs || '-'}</TableCell>
                        </TableRow>
                      ))}
                      {dayPlan.dailyTotals && (
                        <TableRow className="bg-primary/10 hover:bg-primary/20">
                          <TableCell colSpan={2} className="font-bold text-primary py-3">Daily Totals</TableCell>
                          <TableCell className="text-right font-bold text-primary py-3">{dayPlan.dailyTotals.calories ? `${dayPlan.dailyTotals.calories} kcal` : '-'}</TableCell>
                          <TableCell className="text-right font-bold text-primary py-3">{dayPlan.dailyTotals.protein || '-'}</TableCell>
                          <TableCell className="text-right font-bold text-primary py-3">{dayPlan.dailyTotals.fat || '-'}</TableCell>
                          <TableCell className="text-right font-bold text-primary py-3">{dayPlan.dailyTotals.carbs || '-'}</TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        {closingNotes && (
          <div className="mt-8 p-6 bg-card border rounded-lg shadow">
            <CardTitle className="font-headline text-2xl text-primary flex items-center gap-2 mb-3">
              <BookOpenText className="h-7 w-7" />
              A Few Final Tips
            </CardTitle>
            <p className="text-foreground/80 whitespace-pre-line">{closingNotes}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

