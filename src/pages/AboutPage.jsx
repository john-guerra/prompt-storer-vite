import React from "react";
import BaseTemplate from "../templates/BaseTemplate";

import "./App.css";

function AboutPage(props) {
  const urlParams = new URLSearchParams(new URL(window.location.href).search);
  const id = urlParams.get("id");

  console.log("Render AboutPage", props);
  return (
    <div className="App">
      <BaseTemplate>
        <h1>About {id}</h1>
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

export default AboutPage;
