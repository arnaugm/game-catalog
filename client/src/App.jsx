import React from 'react';
import { BpkCode } from 'bpk-component-code';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';

import AppBody from './components/AppBody';
import AppHeader from './components/AppHeader';
import STYLES from './App.scss';

const App = () => (
  <div className={STYLES.App}>
    <AppHeader />
    <AppBody />
  </div>
);

export default App;
