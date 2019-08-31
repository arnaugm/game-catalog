import React from 'react';

import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';
import STYLES from './App.module.scss';

const App = () => (
  <div className={STYLES.App}>
    <AppHeader />
    <AppBody />
  </div>
);

export default App;
