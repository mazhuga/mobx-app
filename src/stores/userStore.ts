import { createContext } from 'react';
import { decorate, observable, computed } from 'mobx';

export class User {
  firstName: string = '';
  lastName: string = '';
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

decorate(User, {
  firstName: observable,
  lastName: observable,
  fullName: computed,
});

export default createContext(new User());
