export default class Interaction {
  constructor({ id = 1, prompt, response } = {}) {
    this.id = id;
    this.prompt = prompt;
    this.response = response;
  }
}
