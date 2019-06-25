import { createContext } from 'react';
import { decorate, observable, configure, action } from 'mobx';

configure({ enforceActions: 'observed' });

export class Tasks {
  // values
  tasks: string[] = ['Task 2', 'Task 2'];
  // actions
  addTask = (task: string) => this.tasks.push(task);
}

decorate(Tasks, {
  tasks: observable,
  addTask: action,
});

export default createContext(new Tasks());
