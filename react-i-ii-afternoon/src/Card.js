import React, { Component } from "react";
import data from "./data";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: data,
      id: 1,
    };
  }

  plusId = () => {
    if (this.state.id !== 25) {
      this.setState({
        id: this.state.id + 1,
      });
    } else {
      this.setState({
        id: 1,
      });
    }
  };

  minusId = () => {
    if (this.state.id !== 1) {
      this.setState({
        id: this.state.id - 1,
      });
    } else {
      this.setState({
        id: 25,
      });
    }
  };

  render() {
    let currentUser = this.state.userInfo[this.state.id - 1];
    let displayMovies = currentUser.favoriteMovies.map((element, index) => {
      return <li key={index}>{element}</li>;
    });

    return (
      <div>
        <div className="header">
          <div className="home">Home</div>
        </div>
        <div className="background">
          <div className="cardAndButton">
            <div className="cardBox">
              <div className="cardInfoBox">
                <span className="name">
                  {currentUser.name.first} {currentUser.name.last}
                </span>
                <div>{this.state.id}/25</div>
                <div className="basic">
                  <div>
                    From: {currentUser.city}, {currentUser.country}
                  </div>
                  <div>Job Title: {currentUser.title}</div>
                  <div>Employer: {currentUser.employer}</div>
                </div>

                <div>
                  <div>Favorite Movies:</div>
                  <ol className="movies">{displayMovies}</ol>
                </div>
              </div>
            </div>

            <div className="cardControls">
              <button onClick={(e) => this.minusId()}>Previous</button>
              <div>
                <button>Edit</button>
                <button>Delete</button>
                <button>New</button>
              </div>
              <button onClick={(e) => this.plusId()}>Next</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
