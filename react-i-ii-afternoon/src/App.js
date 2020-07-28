import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./data";
import Card from "./Card";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: data,
    };
  }

  render() {
    let displayCard = this.state.userInfo.map((element, index) => {
      return <Card data={element} key={index}></Card>;
    });
    console.log(this.state.userInfo);
    return (
      <div className="App">
        <div className="header">
          <div className="home">Home</div>
          <div className="background">
            <div className="cardAndButton">
              {displayCard}
              <div className="cardControls">
                <button>Previous</button>
                <div>
                  <button>Edit</button>
                  <button>Delete</button>
                  <button>New</button>
                </div>
                <button>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
