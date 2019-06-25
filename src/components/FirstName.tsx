import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import UserStore from '../stores/userStore';

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const FirstName = observer(() => {
  console.log('FirstName render');
  const userStore = useContext(UserStore);
  const { firstName, updateUser } = userStore;

  const handleChange = (event: InputEvent) =>
    updateUser({ firstName: event.target.value });

  return (
    <div>
      <div>Type your first name</div>
      <input value={firstName} onChange={handleChange} />
    </div>
  );
});

export default React.memo(FirstName);
