export type GameProps = {
  dogs: number;
  cats: number;
  birds: number;
};

export type GameState = GameProps & {
  incDogs: () => void;
  incCats: () => void;
  incBirds: () => void;
};

export type GameAction =
  | {
      type: 'INCREMENT_DOGS';
    }
  | {
      type: 'INCREMENT_CATS';
    }
  | {
      type: 'INCREMENT_BIRDS';
    };
