import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import UserStore from '../stores/userStore';

const FirstName = observer(() => {
  console.log('FirstName render');
  const userStore = useContext(UserStore);
  const { firstName } = userStore;

  return (
    <div>
      <div>Type your first name</div>
      <input
        value={firstName}
        onChange={e => {
          userStore.firstName = e.target.value;
        }}
      />
    </div>
  );
});

export default React.memo(FirstName);
