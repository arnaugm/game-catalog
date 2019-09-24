import React from 'react';

import gateway from '../../services/gateway';

import CodeWheel from './CodeWheel';

class CodeWheelContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staticWheel: '',
      movingWheel: '',
      cell: '',
      code: '',
    };

    this.onStaticWheelChange = this.onStaticWheelChange.bind(this);
    this.onMovingWheelChange = this.onMovingWheelChange.bind(this);
    this.onCellChange = this.onCellChange.bind(this);
  }

  onStaticWheelChange(e) {
    this.setState({ staticWheel: e.target.value });
    this.getCode({
      staticWheel: e.target.value,
      movingWheel: this.state.movingWheel,
      cell: this.state.cell,
    });
  }

  onMovingWheelChange(e) {
    this.setState({ movingWheel: e.target.value });
    this.getCode({
      staticWheel: this.state.staticWheel,
      movingWheel: e.target.value,
      cell: this.state.cell,
    });
  }

  onCellChange(e) {
    this.setState({ cell: e.target.value });
    this.getCode({
      staticWheel: this.state.staticWheel,
      movingWheel: this.state.movingWheel,
      cell: e.target.value,
    });
  }

  async getCode(combination) {
    const code = await gateway.codeWheel(combination);
    if (code) {
      this.setState({ code });
    }
  }

  render() {
    const { staticWheel, movingWheel, cell, code } = this.state;
    return (
      <CodeWheel
        staticWheel={staticWheel}
        movingWheel={movingWheel}
        cell={cell}
        code={code}
        onStaticWheelChange={this.onStaticWheelChange}
        onMovingWheelChange={this.onMovingWheelChange}
        onCellChange={this.onCellChange}
      />
    );
  }
}

export default CodeWheelContainer;
