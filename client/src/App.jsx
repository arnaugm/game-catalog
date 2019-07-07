import React from 'react';

import GameCard from './components/GameCard';
import STYLES from './App.module.scss';

const App = () => (
  <div className={STYLES.App}>
    <GameCard />
  </div>
);

export default App;
