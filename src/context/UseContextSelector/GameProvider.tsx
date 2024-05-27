import { ReactNode, useCallback, useReducer } from 'react';
import { createContext } from 'use-context-selector';

import { defaultState } from '../defaultState';
import { GameAction, GameState } from '../gameTypes';

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'INCREMENT_DOGS':
      return {
        ...state,
        dogs: state.dogs + 1,
      };

    case 'INCREMENT_CATS':
      return {
        ...state,
        cats: state.cats + 1,
      };

    case 'INCREMENT_BIRDS':
      return {
        ...state,
        birds: state.birds + 1,
      };

    default:
      return state;
  }
}

export const GameContext = createContext(defaultState);

function GameProvider({ children }: { children?: ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, defaultState);

  // Actions
  // reminder: always dispatch; otherwise, is a SELECTOR, not an ACTION
  const incDogs = useCallback(() => {
    dispatch({
      type: 'INCREMENT_DOGS',
    });
  }, []);

  const incCats = useCallback(() => {
    dispatch({
      type: 'INCREMENT_CATS',
    });
  }, []);

  const incBirds = useCallback(() => {
    dispatch({
      type: 'INCREMENT_BIRDS',
    });
  }, []);

  return (
    <GameContext.Provider
      value={{
        ...state,
        incDogs,
        incCats,
        incBirds,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export { GameProvider };
