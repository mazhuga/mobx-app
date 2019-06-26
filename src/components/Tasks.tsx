import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react';
import Task from './Task';
import TaskStore, { task } from '../stores/taskStore';

const Tasks = observer(() => {
  console.log('Tasks render');
  const { tasks, remove, add } = useContext(TaskStore);

  useEffect(() => {
    setTimeout(() => add('inserted task after 3 seconds'), 3000);
    setTimeout(() => add('inserted task after 5 seconds'), 5000);
  }, []);

  return (
    <ul>
      {tasks.map((data: task) => (
        <Task key={data.id} task={data} remove={remove} />
      ))}
    </ul>
  );
});

export default React.memo(Tasks);
