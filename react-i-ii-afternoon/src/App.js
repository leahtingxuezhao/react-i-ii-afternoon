import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log(this.state.userInfo);
    return (
      <div className="App">
        <Card></Card>
      </div>
    );
  }
}

export default App;
