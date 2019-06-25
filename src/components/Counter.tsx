import React from 'react';
import { useLocalStore, useObserver } from 'mobx-react-lite';
import { action } from 'mobx';

const Counter = () => {
  console.log('Counter render');
  const counterState = useLocalStore(() => ({
    counter: 0,
    increase() {
      this.counter++;
    },
    decrease() {
      this.counter--;
    },
  }));

  return useObserver(() => (
    <div>
      <button onClick={action(counterState.decrease)}>-1</button>
      {counterState.counter}
      <button onClick={action(counterState.increase)}>+1</button>
    </div>
  ));
};

export default React.memo(Counter);
