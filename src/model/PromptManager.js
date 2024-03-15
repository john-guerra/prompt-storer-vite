// import Interaction from "./Interaction.js";
import MyDBFirebase from "./MyDBFirebase.js";

export default class PromptManager {
  constructor() {
    this.interactions = [];
    this.myDB = new MyDBFirebase();
  }

  // Downloads the interactions from Firebase
  async getInteractions() {
    return await this.myDB.getInteractions();
  }

  async addInteraction(prompt, response) {
    return await this.myDB.addInteraction(prompt, response);
  }

  getInteractionById(id) {
    return this.interactions[id];
  }

  deleteInteractionById(id) {
    this.interactions.splice(id, 1);
  }

  async updateInteractionById(id, prompt, response) {
    if (id === undefined) {
      alert("id is undefined");
      return;
    }
    await this.myDB.updateInteractionById(id, prompt, response);
  }

  getNextId() {
    return this.interactions?.at(-1).id + 1 || 1;
  }
}
