import React, { Component } from "react";
import axios from "axios";
import "../styles/Home.css";

class Home extends Component {
  state = {
    latestImg: "",
    latestAlt: "",
    latestTitle: ""
  };

  componentDidMount() {
    axios.get("https://xkcd.now.sh/?comic=latest").then(response => {
      console.log(response);
      let latestImg = response.data.img;
      let latestAlt = response.data.title;
      let latestTitle = response.data.alt;
      this.setState({
        latestImg,
        latestAlt,
        latestTitle
      });
    });
  }

  render() {
    return (
      <div className="imgContainer">
        <img
          src={this.state.latestImg}
          alt={this.state.latestAlt}
          title={this.state.latestTitle}
          className="latestImage"
        />
      </div>
    );
  }
}

export default Home;
