"use client";

import React, { createContext, useContext, useState } from "react";

type CursorState = "default" | "hover" | "magnetic" | "hidden";

interface InteractionContextType {
  cursorState: CursorState;
  setCursorState: (state: CursorState) => void;
}

const InteractionContext = createContext<InteractionContextType>({
  cursorState: "default",
  setCursorState: () => {},
});

export const useInteraction = () => useContext(InteractionContext);

export function InteractionProvider({ children }: { children: React.ReactNode }) {
  const [cursorState, setCursorState] = useState<CursorState>("default");

  return (
    <InteractionContext.Provider value={{ cursorState, setCursorState }}>
      {children}
    </InteractionContext.Provider>
  );
}