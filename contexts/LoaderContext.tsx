"use client";

import { createContext, useContext, useState, useCallback } from "react";

type LoaderContextValue = {
  calendarLoaded: boolean;
  setCalendarLoaded: (loaded: boolean) => void;
};

export const LoaderContext = createContext<LoaderContextValue | null>(null);

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [calendarLoaded, setCalendarLoaded] = useState(false);
  const setter = useCallback((loaded: boolean) => setCalendarLoaded(loaded), []);
  return (
    <LoaderContext.Provider value={{ calendarLoaded, setCalendarLoaded: setter }}>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoaderContext(): LoaderContextValue | null {
  return useContext(LoaderContext);
}
