import { useContext } from 'react';
import { useContextSelector } from 'use-context-selector';

import { GameContext as GameContextAPI } from '../../context/ContextAPI/GameProvider';
import { GameContext as GameContextSelector } from '../../context/UseContextSelector/GameProvider';
import { useGame } from '../../context/Zustand/GameStore';
import { useGameContext } from '../../context/ZustandWithContext/GameStoreWithContext';

export function Game() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-start border border-gray-800 p-4 my-4 rounded-md hover:bg-gray-900">
        <h3 className="basis-1/4">ContextAPI</h3>
        <ControlsContextAPI />
        <DogCountContextAPI />
        <CatCountContextAPI />
        <BirdsCountContextAPI />
      </div>
      <div className="flex justify-between items-center border border-gray-800 p-4 my-4 rounded-md hover:bg-gray-900">
        <h3 className="basis-1/4">use-context-selector</h3>
        <ControlsContextSelector />
        <DogCountContextSelector />
        <CatCountContextSelector />
        <BirdsCountContextSelector />
      </div>
      <div className="flex justify-between items-center border border-gray-800 p-4 my-4 rounded-md hover:bg-gray-900">
        <h3 className="basis-1/4">Zustand</h3>
        <ControlsZustand />
        <DogCountZustand />
        <CatCountZustand />
        <BirdsCountZustand />
      </div>
      <div className="flex justify-between items-center border border-gray-800 p-4 my-4 rounded-md hover:bg-gray-900">
        <h3 className="basis-1/4">Zustand with Context</h3>
        <ControlsZustandWithContext />
        <DogCountZustandWithContext />
        <CatCountZustandWithContext />
        <BirdsCountZustandWithContext />
      </div>
    </div>
  );
}

// --------------------------------------------------------
// ContextAPI
// --------------------------------------------------------

function ControlsContextAPI() {
  const { incDogs, incCats, incBirds } = useContext(GameContextAPI);
  return (
    <div className="basis-1/4 [&>*]:mr-1 [&>*]:mb-1">
      <button onClick={incDogs}>dog up</button>
      <button onClick={incCats}>cat up</button>
      <button onClick={incBirds}>bird up</button>
    </div>
  );
}

function DogCountContextAPI() {
  const { dogs } = useContext(GameContextAPI);
  return (
    <div className="basis-1/4 flex justify-center flex-col items-center">
      <h3>Dogs</h3>
      <h2>{dogs}</h2>
    </div>
  );
}

function CatCountContextAPI() {
  const { cats } = useContext(GameContextAPI);
  return (
    <div className="basis-1/4 flex justify-center flex-col items-center">
      <h3>Cats</h3>
      <h2>{cats}</h2>
    </div>
  );
}

function BirdsCountContextAPI() {
  const { birds } = useContext(GameContextAPI);
  return (
    <div className="basis-1/4 flex justify-center flex-col items-center">
      <h3>Birds</h3>
      <h2>{birds}</h2>
    </div>
  );
}

// --------------------------------------------------------
// use-context-selector
// --------------------------------------------------------

function ControlsContextSelector() {
  const incDogs = useContextSelector(GameContextSelector, (c) => c.incDogs);
  const incCats = useContextSelector(GameContextSelector, (c) => c.incCats);
  const incBirds = useContextSelector(GameContextSelector, (c) => c.incBirds);
  return (
    <div className="basis-1/4 [&>*]:mr-1 [&>*]:mb-1">
      <button onClick={incDogs}>dog up</button>
      <button onClick={incCats}>cat up</button>
      <button onClick={incBirds}>bird up</button>
    </div>
  );
}

function DogCountContextSelector() {
  const dogs = useContextSelector(GameContextSelector, (c) => c.dogs);
  return (
    <div className="basis-1/4 flex justify-center flex-col items-center">
      <h3>Dogs</h3>
      <h2>{dogs}</h2>
    </div>
  );
}

function CatCountContextSelector() {
  const cats = useContextSelector(GameContextSelector, (c) => c.cats);
  return (
    <div className="basis-1/4 flex justify-center flex-col items-center">
      <h3>Cats</h3>
      <h2>{cats}</h2>
    </div>
  );
}

function BirdsCountContextSelector() {
  const birds = useContextSelector(GameContextSelector, (c) => c.birds);
  return (
    <div className="basis-1/4 flex justify-center flex-col items-center">
      <h3>Birds</h3>
      <h2>{birds}</h2>
    </div>
  );
}

// --------------------------------------------------------
// Zustand
// --------------------------------------------------------

function ControlsZustand() {
  const incDogs = useGame((s) => s.incDogs);
  const incCats = useGame((s) => s.incCats);
  const incBirds = useGame((s) => s.incBirds);

  // Doing this it seems to rerender more than necessary
  //   const [incDogs, incCats, incBirds] = useGame((s) => [
  //     s.incDogs,
  //     s.incCats,
  //     s.incBirds,
  //   ]);

  return (
    <div className="basis-1/4 [&>*]:mr-1 [&>*]:mb-1">
      <button onClick={incDogs}>dog up</button>
      <button onClick={incCats}>cat up</button>
      <button onClick={incBirds}>bird up</button>
    </div>
  );
}

function DogCountZustand() {
  const dogs = useGame((s) => s.dogs);
  return (
    <div className="basis-1/4 flex justify-center flex-col items-center">
      <h3>Dogs</h3>
      <h2>{dogs}</h2>
    </div>
  );
}

function CatCountZustand() {
  const cats = useGame((s) => s.cats);
  return (
    <div className="basis-1/4 flex justify-center flex-col items-center">
      <h3>Cats</h3>
      <h2>{cats}</h2>
    </div>
  );
}

function BirdsCountZustand() {
  const birds = useGame((s) => s.birds);
  return (
    <div className="basis-1/4 flex justify-center flex-col items-center">
      <h3>Birds</h3>
      <h2>{birds}</h2>
    </div>
  );
}

// --------------------------------------------------------
// Zustand with Context
// --------------------------------------------------------

function ControlsZustandWithContext() {
  const incDogs = useGameContext((s) => s.incDogs);
  const incCats = useGameContext((s) => s.incCats);
  const incBirds = useGameContext((s) => s.incBirds);

  // Doing this it seems to rerender more than necessary
  //   const [incDogs, incCats, incBirds] = useGameContext((s) => [
  //     s.incDogs,
  //     s.incCats,
  //     s.incBirds,
  //   ]);

  return (
    <div className="basis-1/4 [&>*]:mr-1 [&>*]:mb-1">
      <button onClick={incDogs}>dog up</button>
      <button onClick={incCats}>cat up</button>
      <button onClick={incBirds}>bird up</button>
    </div>
  );
}

function DogCountZustandWithContext() {
  const dogs = useGameContext((s) => s.dogs);
  return (
    <div className="basis-1/4 flex justify-center flex-col items-center">
      <h3>Dogs</h3>
      <h2>{dogs}</h2>
    </div>
  );
}

function CatCountZustandWithContext() {
  const cats = useGameContext((s) => s.cats);
  return (
    <div className="basis-1/4 flex justify-center flex-col items-center">
      <h3>Cats</h3>
      <h2>{cats}</h2>
    </div>
  );
}

function BirdsCountZustandWithContext() {
  const birds = useGameContext((s) => s.birds);
  return (
    <div className="basis-1/4 flex justify-center flex-col items-center">
      <h3>Birds</h3>
      <h2>{birds}</h2>
    </div>
  );
}
