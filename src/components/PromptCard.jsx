import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PromptCard extends Component {
  render() {
    return (
      <>
        <div className="col-lg-4 col-sm-6 col-12">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Prompt {this.props.interaction.id}</h3>
              <div className="card-text">
                <div>
                  <label>
                    Prompt: <output>{this.props.interaction.prompt}</output>
                  </label>
                </div>
                <div>
                  <label>
                    Response: <output>{this.props.interaction.response}</output>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /card */}
      </>
    );
  }
}

PromptCard.propTypes = {
  interaction: PropTypes.shape({
    id: PropTypes.number.isRequired,
    prompt: PropTypes.string.isRequired,
    response: PropTypes.string.isRequired,
  }),
};
