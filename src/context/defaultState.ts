import { GameProps, GameState } from './gameTypes';

export const defaultProps: GameProps = {
  dogs: 0,
  cats: 0,
  birds: 0,
};

export const defaultState: GameState = {
  ...defaultProps,
  incDogs: () => {},
  incCats: () => {},
  incBirds: () => {},
};
