import React, { Component } from "react";

import BaseTemplate from "../templates/BaseTemplate";

import "./App.css";
import CreatePromptForm from "../components/CreatePromptForm";
import PromptGallery from "../components/PromptGallery";

class IndexPage extends Component {
  render() {
    return (
      <div className="App">
        <BaseTemplate>
          <h1>Prompt Manager</h1>

          <section>
            <div className="row">
              <div className="col-md-4 col-12">
                <CreatePromptForm />
              </div>
              <div className="col-md-8 col-12">
                <h2>Prompts</h2>
                <PromptGallery />
              </div>
            </div>
          </section>
        </BaseTemplate>
      </div>
    );
  }
}

export default IndexPage;
