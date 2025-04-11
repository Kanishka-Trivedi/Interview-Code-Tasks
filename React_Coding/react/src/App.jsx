import React from 'react';
import Counter from './components/Counter';
import ToDo from './components/ToDo';
import ToggleText from './components/ToggleText';
import CharacterCount from './components/CharacterCount';
import LiveSearch from './components/LiveSearch';
import UsersList from './components/UsersList';
import LoginForm from './components/LoginForm';
import Accordion from './components/Accordion';
import ThemeToggle from './components/ThemeToggle';
import Timer from './components/Timer';
import RouterTask from './components/RouterTasks/RouterTask';
import DynamicRouting from './components/DynamicRouting/DynamicRouting';

function App() {
  return (
    <>
      <Counter />
      <ToDo />
      <ToggleText />
      <CharacterCount />
      <LiveSearch />
      <UsersList />
      <LoginForm />
      <Accordion />
      <ThemeToggle />
      <Timer />
      <RouterTask />
      <DynamicRouting />
      
    </>
  );
}

export default App;


