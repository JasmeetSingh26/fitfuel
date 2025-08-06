
"use client";

import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { DsaSheet } from '@/components/sections/DsaSheet';
import type { DsaTopic } from '@/lib/dsaData';
import { dsaSheetData } from '@/lib/dsaData';

// Helper function to get initial state from localStorage
const getInitialCheckedState = (data: DsaTopic[]) => {
  if (typeof window === 'undefined') {
    return {};
  }
  const savedState = window.localStorage.getItem('dsaSheetCheckedState');
  if (savedState) {
    return JSON.parse(savedState);
  }
  // Initialize with all unchecked
  const initialState: { [key: string]: boolean } = {};
  data.forEach(topic => {
    topic.questions.forEach(q => {
      initialState[q.id] = false;
    });
  });
  return initialState;
};

export default function HomePage() {
  const [checkedState, setCheckedState] = useState<{ [key: string]: boolean }>(() => getInitialCheckedState(dsaSheetData));

  // Persist state to localStorage whenever it changes
  useEffect(() => {
    window.localStorage.setItem('dsaSheetCheckedState', JSON.stringify(checkedState));
  }, [checkedState]);

  const handleCheckChange = (id: string) => {
    setCheckedState(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <div className="container mx-auto px-4 py-12">
          <DsaSheet 
            dsaSheetData={dsaSheetData}
            checkedState={checkedState}
            onCheckChange={handleCheckChange}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
