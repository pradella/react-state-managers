// Reference:
// https://youtu.be/tR8j8NkQ29k?si=YKWxOZ7fGx4QvV5K

import { create } from 'zustand';

import { defaultState } from '../defaultState';
import { GameState } from '../gameTypes';

export const useGame = create<GameState>((set) => ({
  ...defaultState,
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
