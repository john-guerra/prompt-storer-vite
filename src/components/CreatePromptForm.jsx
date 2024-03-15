import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CreatePromptForm extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef(null);
  }

  getFromData = (target) => {
    const formData = new FormData(target);
    target.querySelector("input[name=prompt]").value = "";
    target.querySelector("input[name=response]").value = "";
    target.querySelector("input[name=id]").value = "";
    console.log("formData", formData);
    return Object.fromEntries(formData);
  };

  onCreate = (event) => {
    event.preventDefault();

    const formData = this.getFromData(event.target);
    console.log("onCreate", formData);

    this.props.onCreateInteraction(formData);
  };

  onUpdate = (event) => {
    event.preventDefault();

    const formData = this.getFromData(this.formRef.current);
    console.log("onUpdate", formData);

    this.props.onUpdateInteraction(formData);
  };

  render() {
    return (
      <div className="border rounded p-1">
        <form ref={this.formRef} action="/" onSubmit={this.onCreate}>
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

          <div className="mb-1">
            <label className="form-label">
              ID(Optional):
              <input
                type="text"
                className="form-control"
                name="id"
                required={false}
              />
            </label>
          </div>

          <div>
            <button type="submit" className="btn btn-primary">
              Create
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.onUpdate}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    );
  }
}

CreatePromptForm.propTypes = {
  onCreateInteraction: PropTypes.func.isRequired,
};
