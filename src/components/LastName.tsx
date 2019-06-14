import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import UserStore from '../stores/userStore';

const LastName = observer(() => {
  console.log('LastName render');
  const userStore = useContext(UserStore);
  const { lastName } = userStore;
  return (
    <div>
      <div>Type your last name</div>
      <input
        value={lastName}
        onChange={e => {
          userStore.lastName = e.target.value;
        }}
      />
    </div>
  );
});

export default React.memo(LastName);
