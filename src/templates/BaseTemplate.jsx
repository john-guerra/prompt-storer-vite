import React, { Component } from "react";
import PropTypes from "prop-types";

import NavBar from "../fragments/NavBar";

class BaseTemplate extends Component {
  render() {
    return (
      <div className="PromptManager">
        <NavBar />
        {this.props.children}
        <footer className="bg-body-tertiary text-center p-3">
          <div className="container">
            <span className="text-muted">Made by John with ❤️</span>
          </div>
        </footer>
      </div>
    );
  }
}

BaseTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseTemplate;
