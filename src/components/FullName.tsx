import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import UserStore from '../stores/userStore';

const FullName = observer(() => {
  console.log('FullName render');
  const userStore = useContext(UserStore);
  const { fullName } = userStore;

  const title =
    fullName.trim().length > 0 ? fullName : 'Enter your name bellow';

  return <span>{title}</span>;
});

export default React.memo(FullName);
