import React, { Component, useEffect } from "react";

import BaseTemplate from "../templates/BaseTemplate";

import "./App.css";
import CreatePromptForm from "../components/CreatePromptForm";
import PromptGallery from "../components/PromptGallery";
import PromptManager from "../model/PromptManager.js";

function IndexPage() {
  const pm = new PromptManager();
  const [interactions, setInteractions] = React.useState([]);

  // DRY: Don't Repeat Yourself
  const refreshInteractions = async () => {
    setInteractions(await pm.getInteractions());
  };

  useEffect(() => {
    console.log("IndexPage.componentDidMount()", "Fetching interactions...");
    refreshInteractions();
  }, []);

  // Expects an interaction object
  const onCreateInteraction = async (interaction) => {
    await pm.addInteraction(interaction);
    await refreshInteractions();
  };

  const onUpdateInteraction = async (interaction) => {
    console.log("onUpdateInteraction", interaction);
    await pm.updateInteractionById(interaction);
    await refreshInteractions();
  };

  return (
    <div className="App">
      <BaseTemplate>
        <h1>Prompt Manager</h1>

        <section>
          <div className="row">
            <div className="col-md-4 col-12">
              <CreatePromptForm
                onCreateInteraction={onCreateInteraction}
                onUpdateInteraction={onUpdateInteraction}
              />
            </div>
            <div className="col-md-8 col-12">
              <h2>Prompts</h2>
              <PromptGallery interactions={interactions} />
            </div>
          </div>
        </section>
      </BaseTemplate>
    </div>
  );
}

export default IndexPage;
