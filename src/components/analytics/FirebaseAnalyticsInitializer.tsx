
"use client";

import { useEffect } from 'react';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { app } from '@/lib/firebase'; // Your initialized Firebase app

export function FirebaseAnalyticsInitializer() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if all necessary Firebase config values are present (excluding measurementId as it's optional for basic analytics)
      const config = app.options;
      if (config.apiKey && config.apiKey !== "YOUR_API_KEY" && 
          config.authDomain && config.authDomain !== "YOUR_AUTH_DOMAIN" &&
          config.projectId && config.projectId !== "YOUR_PROJECT_ID") {
        isSupported().then(supported => {
          if (supported) {
            getAnalytics(app);
            console.log("Firebase Analytics initialized successfully.");
          } else {
            console.log("Firebase Analytics is not supported in this browser environment.");
          }
        }).catch(error => {
          console.error("Error checking Firebase Analytics support:", error);
        });
      } else {
        console.warn("Firebase configuration is incomplete or using placeholder values. Analytics will not be initialized. Please update src/lib/firebase.ts");
      }
    }
  }, []);

  return null; // This component does not render any UI
}
