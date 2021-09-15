import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { AlgoGameApi } from './config/app';
import logo from './logo.svg';

import './App.css';

const About: React.VFC = () => {
  return <div>About</div>;
};

const Topics: React.VFC = () => {
  return <div>Topics</div>;
};

const Home = (props: { msg: string }) => {
  const [name, setName] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleClick = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(name);
    fetch(`${AlgoGameApi}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
      }),
    })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    e.preventDefault();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome!!</h1>
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
        <p>{props.msg}</p>
      </header>
      <div>
        <form>
          <label>
            Your Name
            <input type="text" onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" onClick={handleClick} />
        </form>
      </div>
    </div>
  );
};

export const App: React.VFC = () => {
  const [msg, setMsg] = useState('');
  useEffect(() => {
    fetch(AlgoGameApi)
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
  }, [msg]);

  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
            <Route path="/">
              <Home msg={msg} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};
