import React, { Component } from "react";

export default class CreatePromptForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prompts: [],
    };
  }

  onCreate = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    console.log("onCreate", Object.fromEntries(formData));

    this.setState({
      prompts: [...this.state.prompts, Object.fromEntries(formData)],
    });
  };

  render() {
    return (
      <div className="border rounded p-1">
        <form action="/" onSubmit={this.onCreate}>
          <div className="mb-1">
            <label className="form-label">
              Prompt:
              <input
                type="text"
                className="form-control"
                name="prompt"
                required
              />
            </label>
          </div>

          <div className="mb-1">
            <label className="form-label">
              Response:
              <input
                type="text"
                className="form-control"
                name="response"
                required
                defaultValue="No response"
              />
            </label>
          </div>

          <div>
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </div>
        </form>

        <div>{JSON.stringify(this.state.prompts)}</div>
      </div>
    );
  }
}
