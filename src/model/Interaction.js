// export default class Interaction {
//   constructor({ id = 1, prompt, response } = {}) {
//     this.id = id;
//     this.prompt = prompt;
//     this.response = response;
//   }
// }

export default function InteractionFN({ id = 1, prompt, response } = {}) {
  const me = {};

  me.id = id;
  me.prompt = prompt;
  me.response = response;

  return me;
}
