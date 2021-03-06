import React, { Component } from "react";
import Movies from "./movies";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

class MovieItem extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <h3>{this.props.movie.Title}</h3>
              <img src={this.props.movie.Poster}></img>
              <p>{this.props.movie.Year}</p>
              <footer className="blockquote-footer">
                All rights reserved <cite title="Source Title">Marvel Studios</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default MovieItem;
