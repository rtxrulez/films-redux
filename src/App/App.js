import React from "react";
import "./App.scss";
import Episods from "../Episods/Episods";

const Test = <div>Test</div>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Список фильмов</h1>
      </header>
      <section className="content">
        <Episods></Episods>
      </section>
    </div>
  );
}

export default App;
