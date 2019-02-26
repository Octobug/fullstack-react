import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

// import ActiveSpan from '../ActiveSpan/ActiveSpan';
// import styles from './Switch.css';

const CREDITCARD = "Creditcard";
const BTC = "Bitcoin";

class Switch extends React.Component {
  state = {
    payMethod: BTC
  };
  // getInitialState() {
  //   return {
  //     payMethod: BTC
  //   };
  // },

  // select: function(choice) {
  //   const that = this;
  //   return function(evt) {
  //     that.setState({
  //       payMethod: choice
  //     });
  //   };
  // },

  // _renderChoice: function(choice) {
  //   return (
  //     <ActiveSpan onClick={this.select(choice)}
  //                 active={this.state.payMethod === choice}
  //                 activeClass={styles.active}
  //                 className={styles.choice}
  //                 label={choice} />
  //   )
  // },

  // render: function() {
  //   return (
  //     <div className={styles.switch}>
  //       <div className={styles.diamond} />
  //       {this._renderChoice(CREDITCARD)}
  //       {this._renderChoice(BTC)}
  //     </div>
  //   )
  // }
  render() {
    return (
      <div className="switch">
        <div className="choice">Creditcard</div>
        <div className="choice">Bitcoin</div>
        Pay with: {this.state.payMethod}
      </div>
    );
  }
}

module.exports = Switch;
