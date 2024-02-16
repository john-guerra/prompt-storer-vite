import React, { Component } from "react";
import PromptCard from "./PromptCard";
import PropTypes from "prop-types";

export default class PromptGallery extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        {this.props.interactions.map((inter, i) => (
          <PromptCard interaction={inter} key={i} />
        ))}
      </div>
    );
  }
}

PromptGallery.propTypes = {
  interactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      prompt: PropTypes.string.isRequired,
      response: PropTypes.string.isRequired,
    })
  ),
};
