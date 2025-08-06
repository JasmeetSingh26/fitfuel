
"use client";

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { DsaSheet } from '@/components/sections/DsaSheet';
import { dsaSheetData } from '@/lib/dsaData';

// For this version, we don't need to track checked state as per the new requirement.
// If progress tracking is added back, the logic can be reinstated.

export default function HomePage() {
  // The checked state and its related functions are removed as per the request to remove the status box.
  // This simplifies the component significantly.
  // If you want to re-add progress tracking, you would re-introduce the useState and useEffect here.
  const [checkedState, setCheckedState] = useState<{ [key: string]: boolean }>({});
  
  const handleCheckChange = (id: string) => {
    // This function is kept for prop-drilling but doesn't do anything visible.
    // To re-enable, you would bring back the localStorage logic.
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
