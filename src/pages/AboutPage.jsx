import React, { Component } from "react";
import BaseTemplate from "../templates/BaseTemplate";

import "./App.css";

class IndexPage extends Component {
  render() {
    return (
      <div className="App">
        <BaseTemplate>
          <h1>About</h1>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse alias
            suscipit aliquid? Rerum eos quibusdam earum consequatur odit. Velit
            illum fuga quidem quaerat facere quasi, dignissimos fugit magni
            repellendus nisi.
          </div>
        </BaseTemplate>
      </div>
    );
  }
}

export default IndexPage;
