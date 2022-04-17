/*
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-04-16 19:17:49
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-04-17 08:21:06
 */
import React, { useState } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';

function App() {
  const [count, setCount] = useState(0);
  // const [count1, setCount2] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount(count => count + 1)}>
            count is: {count}iiii
          </button>
          <Button type="primary">Primary Button</Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docsssssss
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
