import React, { Component } from "react";
import PropTypes from "prop-types";

import NavBar from "../fragments/NavBar";

class BaseTemplate extends Component {
  render() {
    return (
      <div className="PromptManager">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

BaseTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseTemplate;
