import { createContext } from 'react';
import { decorate, observable } from 'mobx';

export class Tasks {
  tasks: string[] = ['Task 1', 'Task 2'];
}

decorate(Tasks, {
  tasks: observable,
});

export default createContext(new Tasks());
