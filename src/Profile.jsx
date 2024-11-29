import React, { Component } from "react";
export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "Walter White",
      bio: "The main character of  breaking bad",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/b51190101362045.5f1d68546ac50.jpg",
      profession: "Cooking Meth",
      timer: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }
  render() {
    return (
      <div id="profile">
        <img src={this.state.img} alt="" srcset="" />
        <h1>{this.state.fullName}</h1>
        <h3>{this.state.profession}</h3>
        <p>
          The main character of{" "}
          <span style={{ color: "green", fontWeight: "bold" }}>
            Breaking Bad
          </span>
        </p>
        <div>
          <p>The profile was mounted since {this.state.timer} </p>
        </div>
      </div>
    );
  }
}
