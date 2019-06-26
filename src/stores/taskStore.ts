import { createContext } from 'react';
import { decorate, observable, configure, action } from 'mobx';

configure({ enforceActions: 'observed' });

type InputEvent = React.ChangeEvent<HTMLInputElement>;

export interface task {
  id: number;
  title?: string;
  done?: boolean;
  toggle?: void;
}

class Task {
  constructor(title: string = '', done: boolean = false, id: number) {
    this.title = title;
    this.done = done;
    this.id = id;
  }

  title: string;
  done: boolean;
  id: number;

  toggle = (): boolean => (this.done = !this.done);
}

decorate(Task, {
  id: observable,
  title: observable,
  done: observable,
  toggle: action,
});

const initialTasks = [
  new Task('Task 1', false, 1),
  new Task('Task 2', false, 2),
];

export class Tasks {
  // values
  tasks: any[] = initialTasks;

  remove = (id: number): void => {
    this.tasks = this.tasks.filter(task => task.id !== id);
  };
  add = (title: string): void => {
    this.tasks.push(new Task(title, false, title.length + Math.random()));
  };
}

decorate(Tasks, {
  tasks: observable,
  remove: action,
    add: action,
});

export default createContext(new Tasks());
