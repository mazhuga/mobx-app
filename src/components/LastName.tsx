import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import UserStore from '../stores/userStore';

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const LastName = observer(() => {
  console.log('LastName render');
  const userStore = useContext(UserStore);
  const { lastName, updateUser } = userStore;

  const handleChange = (event: InputEvent) =>
    updateUser({ lastName: event.target.value });

  return (
    <div>
      <div>Type your last name</div>
      <input value={lastName} onChange={handleChange} />
    </div>
  );
});

export default React.memo(LastName);
