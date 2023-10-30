import React, { useState } from 'react';
import { Button, Progress } from 'antd';

const ProgressBar = () => {
  const [percent, setPercent] = useState(0);

  const increment = () => {
    if (percent < 100) {
      setPercent(percent + 10);
    }
  };

  const decrement = () => {
    if (percent > 0) {
      setPercent(percent - 10);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <div style={{ flex: '1', marginRight: '1%' }}>
        <Progress percent={percent} />
      </div>
      <div style={{ display: 'flex' }}>
        <Button onClick={decrement} style={{ marginRight: '1%' }}>
          -
        </Button>
        <Button onClick={increment}>
          +
        </Button>
      </div>
    </div>
  );
};

export default ProgressBar;
