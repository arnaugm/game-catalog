import React from 'react';
import BpkSelect from 'bpk-component-select';

import STYLES from './CodeWheel.scss';

const keys = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const CodeWheel = () => (
  <div className={STYLES.CodeWheel}>
    <BpkSelect
      id="static-wheel"
      name="static-wheel"
      value="Static wheel"
      onChange={(e) => console.log(`Static wheel changed to ${e.target.value}`)}
    >
      {keys.map(k => (
        <option value={k}>{k}</option>
      ))}
    </BpkSelect>
    <BpkSelect
      id="moving-wheel"
      name="moving-wheel"
      value="Moving wheel"
      onChange={(e) => console.log(`Moving wheel changed to ${e.target.value}`)}
    >
      {keys.map(k => (
        <option value={k}>{k}</option>
      ))}
    </BpkSelect>
  </div>
);

export default CodeWheel;
