import React from "react";
import { connect } from "react-redux";
import "./App.scss";
import Episods from "../Episods/Episods";

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

export default connect()(App);
