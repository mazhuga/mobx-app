import React, { useContext } from 'react';
import {observer} from 'mobx-react-lite'
import CounterStore from '../stores/counterStore';

const Counter = observer( props => {
  const counterStore = useContext(CounterStore);
  return (
    <div>
      <div>{counterStore.counter}</div>
      <button onClick={() => counterStore.counter++}>Increase</button>
      <button onClick={() => counterStore.counter--}>Decrease</button>
    </div>
  );
});

Counter.propTypes = {};

export default React.memo(Counter);
