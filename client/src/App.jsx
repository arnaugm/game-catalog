import React from 'react';
import GameCard from './components/GameCard';

import STYLES from './App.scss';

const App = () => {
  return (
    <div className={STYLES.App}>
      <GameCard />
    </div>
  );
};

export default App;
