import * as React from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = (): React.ReactElement => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Probando</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        FIXED
      </a>
    </header>
  </div>
);

export default App;
