import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import TaskStore from '../stores/taskStore';

const Tasks = observer(() => {
  console.log('Tasks render');
  const { tasks, addTask } = useContext(TaskStore);

  useEffect(() => {
    setTimeout(() => addTask('inserted task after 3 seconds'), 3000);
    setTimeout(() => addTask('inserted task after 5 seconds'), 5000);
  }, []);

  return (
    <ul>
      {tasks.map(
        (task: string, index: number): any => (
          <li key={index}>{task}</li>
        ),
      )}
    </ul>
  );
});

export default React.memo(Tasks);
