import { createContext } from 'react';
import { decorate, observable } from 'mobx';

export class Counter {
  counter = 0;
}

decorate(Counter, {
  counter: observable,
});

export default createContext(new Counter());
