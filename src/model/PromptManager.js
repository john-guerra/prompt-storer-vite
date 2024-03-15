// import Interaction from "./Interaction.js";
import MyDBFirebase from "./MyDBFirebase.js";


export default function PromptManager() {
  const me = {};
  const interactions = [];
  const myDB = new MyDBFirebase();

  // Downloads the interactions from Firebase
  async function getInteractions() {
    return await myDB.getInteractions();
  }

  async function addInteraction(prompt, response) {
    return await myDB.addInteraction(prompt, response);
  }

  function getInteractionById(id) {
    return interactions[id];
  }

  function deleteInteractionById(id) {
    interactions.splice(id, 1);
  }

  function getNextId() {
    return interactions?.at(-1).id + 1 || 1;
  }

  me.getInteractions = getInteractions;
  me.getInteractionById = getInteractionById;
  me.addInteraction = addInteraction;
  me.deleteInteractionById = deleteInteractionById;
  me.getNextId = getNextId;

  return me;
}
