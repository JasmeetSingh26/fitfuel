
"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import type { DsaTopic } from '@/lib/dsaData';

interface DsaSheetProps {
  dsaSheetData: DsaTopic[];
  checkedState: { [key: string]: boolean };
  onCheckChange: (id: string) => void;
}

const difficultyVariant = {
  Easy: 'default',
  Medium: 'secondary',
  Hard: 'destructive',
} as const;

export function DsaSheet({ dsaSheetData, checkedState, onCheckChange }: DsaSheetProps) {
  return (
    <Card className="w-full max-w-5xl mx-auto shadow-xl animate-fade-in">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-primary">
          DSA Problem List
        </CardTitle>
        <CardDescription>
          A curated list of the most important DSA questions for interview preparation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple" collapsible className="w-full" defaultValue={dsaSheetData.map(topic => topic.title)}>
          {dsaSheetData.map((topic) => (
            <AccordionItem value={topic.title} key={topic.title} className="border-b border-border/50 last:border-b-0">
              <AccordionTrigger className="py-4 px-2 hover:bg-muted/50 rounded-md group">
                <h3 className="text-xl md:text-2xl font-headline text-primary group-hover:text-accent transition-colors">
                  {topic.title}
                </h3>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4 px-1">
                <div className="overflow-hidden border rounded-lg shadow-sm">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/30">
                        <TableHead className="font-semibold text-foreground/80">Problem</TableHead>
                        <TableHead className="w-[120px] text-center font-semibold text-foreground/80">Difficulty</TableHead>
                        <TableHead className="w-[80px] text-center font-semibold text-foreground/80">Link</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {topic.questions.map((question) => (
                        <TableRow key={question.id} className="hover:bg-muted/20">
                          <TableCell className="font-medium py-3">
                              {question.title}
                          </TableCell>
                          <TableCell className="text-center">
                            <Badge variant={difficultyVariant[question.difficulty] || 'default'}>
                                {question.difficulty}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-center">
                            <a href={question.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center text-primary hover:text-accent transition-colors">
                              <ExternalLink className="h-5 w-5" />
                              <span className="sr-only">Link to LeetCode problem</span>
                            </a>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
