import React from 'react';

import AppSidebar from '../AppSidebar';
import CodeWheel from '../CodeWheel';

import STYLES from './AppBody.module.scss';

const AppBody = () => (
  <div className={STYLES.AppBody}>
    <AppSidebar />
    <CodeWheel />
  </div>
);

export default AppBody;