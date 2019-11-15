import React, { Component } from "react";
import axios from "axios";

import "../styles/Search.css";

class Home extends Component {
  state = {
    img: "",
    alt: "",
    title: "",
    number: "",
    search: ""
  };

  handleChange = e => {
    let search = e.target.value;
    this.setState({
      search
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .get(`https://xkcd.now.sh/?comic=${this.state.search}`)
      .then(response => {
        console.log(response);
        let img = response.data.img;
        let alt = response.data.title;
        let title = response.data.alt;
        let number = response.data.num;
        this.setState({
          img,
          alt,
          title,
          number,
          search: ""
        });
      })
      .catch(err => err);
  };

  render() {
    let comicDisplay = this.state.img ? (
      <div className="comicContainer">
        <h4>
          Comic #{this.state.number}: {this.state.alt}
        </h4>
        <img
          src={this.state.img}
          alt={this.state.alt}
          title={this.state.title}
          number={this.state.number}
          search={this.state.search}
          className="searchImage"
        />
      </div>
    ) : null;

    return (
      <div className="searchContainer">
        <div className="formContainer">
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.search}
              placeholder="Enter comic #"
              type="number"
              min="1"
              max="2219"
              className="searchInput"
              onChange={this.handleChange}
            />
            <button type="submit" className="searchSubmit">
              submit
            </button>{" "}
            {comicDisplay}
          </form>
        </div>
        (comicDisplay)
      </div>
    );
  }
}

export default Home;
