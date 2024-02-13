import Interaction from "./Interaction.js";

export default class PromptManager {
  constructor() {
    this.interactions = [
      {
        id: 1,
        prompt: "Prompt 1",
        response: "I'm the one!!!!",
      },
      {
        id: 2,
        prompt: "Prompt dos",
        response: "Buuuuuhhh",
      },
      {
        id: 99,
        prompt: "new oneee",
        response: "lasssttt",
      },
      {
        id: 23,
        prompt: "veintitres",
        response: "en español",
      },
    ];
  }

  addInteraction(prompt, response) {
    this.interactions.push(
      new Interaction({
        id: this.getNextId(),
        prompt,
        response,
      })
    );
  }

  getInteractions() {
    return this.interactions;
  }

  getInteractionById(id) {
    return this.interactions[id];
  }

  deleteInteractionById(id) {
    this.interactions.splice(id, 1);
  }

  getNextId() {
    return this.interactions?.at(-1).id + 1 || 1;
  }
}
