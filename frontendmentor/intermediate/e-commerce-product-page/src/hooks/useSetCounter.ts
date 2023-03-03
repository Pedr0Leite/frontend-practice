import { useState } from 'react';

const useSetCounter = () => {
  const [counterValue, setCounterValue] = useState(0);

  const increment = () => {
    setCounterValue(counterValue + 1);
  };

  const decrement = () => {
    if (counterValue > 0) {
      setCounterValue(counterValue - 1);
    }
  };

  return { counterValue, increment, decrement };
};

export default useSetCounter;
