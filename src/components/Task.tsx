import React from 'react';
import { task } from '../stores/taskStore';
import { observer } from 'mobx-react';

interface PassedProps extends React.FC {
  key: number;
  task: task;
  remove: (id: number) => void;
}

// @ts-ignore
const Task: PassedProps = observer(({ task, remove }) => {
  console.log('Task render');

  return (
    <li>
      <span
        onClick={task.toggle}
        style={{ textDecoration: task.done && 'line-through' }}
      >
        {task.title}
      </span>
      <button onClick={() => remove(task.id)}>remove</button>
    </li>
  );
});

Task.propTypes = {};

export default React.memo(Task);
