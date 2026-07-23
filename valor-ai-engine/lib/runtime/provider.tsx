'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { runtime } from './runtime-engine';
import { CommandCenterSnapshot } from './snapshot-store';

const RuntimeContext = createContext<{
  snapshot: CommandCenterSnapshot;
  dispatch: {
    setActiveLayer: (layer: string) => void;
    executeSeparation: () => void;
  }
} | null>(null);

export function RuntimeProvider({ children }: { children: React.ReactNode }) {
  const [snapshot, setSnapshot] = useState<CommandCenterSnapshot>(runtime.getSnapshot());

  useEffect(() => {
    runtime.startBoot();
    return runtime.subscribe(setSnapshot);
  }, []);

  const dispatch = {
    setActiveLayer: (l: string) => runtime.setActiveLayer(l),
    executeSeparation: () => runtime.executeSeparation()
  };

  return (
    <RuntimeContext.Provider value={{ snapshot, dispatch }}>
      {children}
    </RuntimeContext.Provider>
  );
}

export function useRuntime() {
  const ctx = useContext(RuntimeContext);
  if (!ctx) throw new Error("useRuntime must be used within RuntimeProvider");
  return ctx;
}
