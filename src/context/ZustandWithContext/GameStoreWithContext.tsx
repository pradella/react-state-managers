// Reference:
// https://docs.pmnd.rs/zustand/guides/initialize-state-with-props#wrapping-the-context-provider

import { createContext, useContext, useRef } from 'react';
import { createStore, useStore } from 'zustand';

import { defaultProps } from '../defaultState';
import { GameProps, GameState } from '../gameTypes';

type GameStore = ReturnType<typeof createGameStore>;

// Store creator with createStore
const createGameStore = (initProps?: Partial<GameProps>) => {
  return createStore<GameState>()((set) => ({
    ...defaultProps,
    ...initProps,
    incDogs: () =>
      set((state) => ({
        ...state,
        dogs: state.dogs + 1,
      })),
    incCats: () =>
      set((state) => ({
        ...state,
        cats: state.cats + 1,
      })),
    incBirds: () =>
      set((state) => ({
        ...state,
        birds: state.birds + 1,
      })),
  }));
};

// Creating a context with React.createContext
export const GameContext = createContext<GameStore | null>(null);

// Wrapping the context provider
export function GameProvider({
  children,
  ...props
}: { children: React.ReactNode } & Partial<GameProps>) {
  const storeRef = useRef<GameStore>();
  if (!storeRef.current) {
    storeRef.current = createGameStore(props);
  }
  return (
    <GameContext.Provider value={storeRef.current}>
      {children}
    </GameContext.Provider>
  );
}

// Extracting context logic into a custom hook
export function useGameContext<T>(selector: (state: GameState) => T): T {
  const store = useContext(GameContext);
  if (!store) throw new Error('Missing GameContext.Provider in the tree');
  return useStore(store, selector);
}
