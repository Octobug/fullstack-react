import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

// import ActiveSpan from '../ActiveSpan/ActiveSpan';
import styles from "./Switch.css";

const CREDITCARD = "Creditcard";
const BTC = "Bitcoin";

class Switch extends React.Component {
  state = {
    payMethod: BTC
  };

  select = choice => {
    return evt => {
      this.setState({
        payMethod: choice
      });
    };
  };

  renderChoice = choice => {
    const cssClasses = [];

    if (this.state.payMethod === choice) {
      cssClasses.push(styles.active);
    }
    return (
      <div
        className="choice"
        onClick={this.select(choice)}
        className={cssClasses}
      >
        {choice}
      </div>
    );
  };

  render() {
    return (
      <div className="switch">
        {this.renderChoice(CREDITCARD)}
        {this.renderChoice(BTC)}
        Pay with: {this.state.payMethod}
      </div>
    );
  }
}

module.exports = Switch;
