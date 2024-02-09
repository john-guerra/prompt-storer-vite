import React, { Component } from "react";

import BaseTemplate from "../templates/BaseTemplate";

import "./App.css";

class IndexPage extends Component {
  render() {
    return (
      <div className="App">
        <BaseTemplate>
          <h1>Prompt Manager</h1>
        </BaseTemplate>
      </div>
    );
  }
}

export default IndexPage;
