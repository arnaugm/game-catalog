import React from 'react';
import PropTypes from 'prop-types';
import BpkSelect from 'bpk-component-select';
import BpkText from 'bpk-component-text';
import BpkLabel from 'bpk-component-label';

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
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const CodeWheel = ({
  staticWheel,
  movingWheel,
  cell,
  code,
  onStaticWheelChange,
  onMovingWheelChange,
  onCellChange,
}) => (
  <div className={STYLES.CodeWheel}>
    <img src="./code_wheel.gif" alt="Code wheel" />
    <div className={STYLES.CodeWheel__selectArea}>
      <div className={STYLES.CodeWheel__selector}>
        <BpkLabel id="static-wheel-label" htmlFor="static-wheel">
          Static wheel
        </BpkLabel>
        <BpkSelect
          id="static-wheel"
          name="static-wheel"
          label="Static wheel"
          value={staticWheel}
          onChange={onStaticWheelChange}
        >
          <option />
          {keys.map(k => (
            <option key={`static-wheel-${k}`} value={k}>
              {k}
            </option>
          ))}
        </BpkSelect>
      </div>
      <div className={STYLES.CodeWheel__selector}>
        <BpkLabel htmlFor="moving-wheel">Moving wheel</BpkLabel>
        <BpkSelect
          id="moving-wheel"
          name="moving-wheel"
          value={movingWheel}
          onChange={onMovingWheelChange}
        >
          <option />
          {keys.map(k => (
            <option key={`moving-wheel-${k}`} value={k}>
              {k}
            </option>
          ))}
        </BpkSelect>
      </div>
      <div className={STYLES.CodeWheel__selector}>
        <BpkLabel htmlFor="cell">Cell</BpkLabel>
        <BpkSelect id="cell" name="cell" value={cell} onChange={onCellChange}>
          <option />
          {keys.map(k => (
            <option key={`cell-${k}`} value={k}>
              {k}
            </option>
          ))}
        </BpkSelect>
      </div>
    </div>
    <div>
      <BpkText tagName="p">{code}</BpkText>
    </div>
  </div>
);

CodeWheel.propTypes = {
  code: PropTypes.string,
  onStaticWheelChange: PropTypes.func.isRequired,
  onMovingWheelChange: PropTypes.func.isRequired,
  onCellChange: PropTypes.func.isRequired,
};

CodeWheel.defaultProps = {
  code: '',
};

export default CodeWheel;
