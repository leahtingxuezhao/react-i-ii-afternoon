import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.data.favoriteMovies,
    };
  }
  render() {
    let displayMovies = this.state.movies.map((element, index) => {
      return <li key={index}>{element}</li>;
    });
    return (
      <div className="cardBox">
        <div className="cardInfoBox">
          <span className="name">
            {this.props.data.name.first} {this.props.data.name.last}
          </span>
          <div className="basic">
            <div>
              From: {this.props.data.city}, {this.props.data.country}
            </div>
            <div>Job Title: {this.props.data.title}</div>
            <div>Employer: {this.props.data.employer}</div>
          </div>

          <div>
            <div>Favorite Movies:</div>
            <ol className="movies">{displayMovies}</ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
