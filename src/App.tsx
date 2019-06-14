import React from 'react';
import FullName from './components/FullName';
import FirstName from './components/FirstName';
import LastName from './components/LastName';
import Tasks from './components/Tasks';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <FullName />
      <FirstName />
      <LastName />
      <br />
      <Tasks />
    </div>
  );
};

export default App;
