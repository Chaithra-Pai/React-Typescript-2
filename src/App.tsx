import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
import { Counter } from './components/state/Counter';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';

function App() {
  return (
    <div className="App">
      <h2>useState Hook</h2>
      <LoggedIn />
      <h2>useState Hook 2</h2>
      <User />
      <h2>useReducer Hook</h2>
      <Counter />
      <h2>useContext Hook</h2>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
