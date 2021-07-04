import React, { useEffect, useState } from 'react';

import { AlgoGameApi } from './config/app';
import logo from './logo.svg';

import './App.css';

export const App: React.VFC = () => {
  const [msg, setMsg] = useState('');
  useEffect(() => {
    fetch(AlgoGameApi)
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
  }, [msg]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{msg}</p>
      </header>
    </div>
  );
};
