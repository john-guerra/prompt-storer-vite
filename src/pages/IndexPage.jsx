import React, { Component } from "react";

import BaseTemplate from "../templates/BaseTemplate";

import "./App.css";
import CreatePromptForm from "../components/CreatePromptForm";
import PromptGallery from "../components/PromptGallery";
import PromptManager from "../model/PromptManager.js";

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.pm = new PromptManager();
    this.state = {
      interactions: [],
    };
  }

  // DRY: Don't Repeat Yourself
  refreshInteractions = async () => {
    this.setState({ interactions: await this.pm.getInteractions() });
  };

  async componentDidMount() {
    console.log("IndexPage.componentDidMount()", "Fetching interactions...");
    await this.refreshInteractions();
  }

  // Expects an interaction object
  onCreateInteraction = async (interaction) => {
    await this.pm.addInteraction(interaction);
    await this.refreshInteractions();
  };

  render() {
    return (
      <div className="App">
        <BaseTemplate>
          <h1>Prompt Manager</h1>

          <section>
            <div className="row">
              <div className="col-md-4 col-12">
                <CreatePromptForm
                  onCreateInteraction={this.onCreateInteraction}
                />
              </div>
              <div className="col-md-8 col-12">
                <h2>Prompts</h2>
                <PromptGallery interactions={this.state.interactions} />
              </div>
            </div>
          </section>
        </BaseTemplate>
      </div>
    );
  }
}

export default IndexPage;
