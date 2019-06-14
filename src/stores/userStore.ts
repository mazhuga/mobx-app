import { createContext } from 'react';
import { decorate, observable, computed, configure, action } from 'mobx';

configure({ enforceActions: 'observed' });

interface user {
  firstName?: string;
  lastName?: string;
}

export class User {
  // values
  firstName: string = '';
  lastName: string = '';

  // computed
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  // actions
  fetchUser = (): void => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(({ results }) => {
        const { first, last } = results[0].name;
        this.updateUser({ firstName: first, lastName: last });
      });
  };

  updateUser = ({
    firstName = this.firstName,
    lastName = this.lastName,
  }: user) => {
    this.firstName = firstName;
    this.lastName = lastName;
  };
}

decorate(User, {
  firstName: observable,
  lastName: observable,
  fullName: computed,
  fetchUser: action,
  updateUser: action,
});

export default createContext(new User());
