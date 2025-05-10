import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue;
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}

function App() {
  if (getCookie("count") == "") {
    setCookie("count", 0);
  }
  if (getCookie("animationDuration") == "") {
    setCookie("animationDuration", -1);
  }


  const [count, setCount] = useState(Number(getCookie("count")));
  const [animationDuration, setAnimationDuration] = useState(Number(getCookie("animationDuration")));




  const handlePlus = () => {
    setCount(count + 1);
    setAnimationDuration(animationDuration - 1);
    setCookie("count", count + 1);
    setCookie("animationDuration", animationDuration - 1);
  }
  const handleMinus = () => {
    setCount(count - 1);
    setAnimationDuration(animationDuration + 1);
    setCookie("count", count - 1);
    setCookie("animationDuration", animationDuration + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" style={{ '--logo-animation-duration': `${1.1 ** animationDuration}s` }} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <div><button onClick={handleMinus} className='button'>-</button></div>
          <h1>{count}</h1>
          <form on></form>
          <div><button onClick={handlePlus} className='button'>+</button></div>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
