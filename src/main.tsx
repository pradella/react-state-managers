import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { GameProvider as GameProviderContextAPI } from './context/ContextAPI/GameProvider.tsx';
import { GameProvider as GameProviderUseContextSelector } from './context/UseContextSelector/GameProvider.tsx';
import { GameProvider as GameProviderZustandWithContext } from './context/ZustandWithContext/GameStoreWithContext.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GameProviderContextAPI>
      <GameProviderUseContextSelector>
        <GameProviderZustandWithContext>
          <App />
        </GameProviderZustandWithContext>
      </GameProviderUseContextSelector>
    </GameProviderContextAPI>
  </React.StrictMode>,
);
