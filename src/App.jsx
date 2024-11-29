import React, { Component } from "react";
import Profile from "./Profile";
import "./App.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.handleShowProfile = () => {
      this.setState({ show: !this.state.show});
    };
  }
  render() {
    return (
      <div id="container">
        <button onClick={this.handleShowProfile}> {this.state.show? "Hide": "Show"}</button>
        {this.state.show ? <Profile /> : <h2></h2>}
      </div>
    );
  }
}
