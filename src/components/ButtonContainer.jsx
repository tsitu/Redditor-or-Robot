/* @flow */

import React from 'react';
import PropTypes from 'prop-types';

import ResetButton from './ResetButton';
import HumanButton from './HumanButton';
import RoboButton from './RoboButton';

class ButtonContainer extends React.PureComponent {
  props: {
    gameOver: boolean,
    isCongrats: boolean,
    onResetButtonClick: Function,
    onGameButtonClick: Function,
    correctAnswers: Array<Object>, // needs precision
    incorrectAnswers: Array<Object>, // needs precision
  };

  render() {
    let correctAnswersDisplay = '';
    let incorrectAnswersDisplay = '';
    const cArr = this.props.correctAnswers;
    const iArr = this.props.incorrectAnswers;

    if (this.props.gameOver && cArr) {
      cArr.forEach((el) => {
        correctAnswersDisplay += `<a href=${el.url} target="_blank">${el.user}: ${el.id}</a> <br />`;
      });
    }

    if (this.props.gameOver && iArr) {
      iArr.forEach((el) => {
        incorrectAnswersDisplay += `<a href=${el.url} target="_blank">${el.user}: ${el.id}</a> <br />`;
      });
    }

    const congrats = this.props.isCongrats ? <div> Congratulations! <br /> </div> : '';
    const buttons = this.props.gameOver ?
      (<div>
        Play Again? <br /> <br />
        <ResetButton onButtonClick={this.props.onResetButtonClick} /> <br /> <br />
        <table className="table__answers">
          <thead>
            <tr>
              <td><span role="img" aria-label="Grinning">😁</span></td>
              <td><span role="img" aria-label="Pensive">😔</span></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><div dangerouslySetInnerHTML={{ __html: correctAnswersDisplay }} /></td>
              <td><div dangerouslySetInnerHTML={{ __html: incorrectAnswersDisplay }} /></td>
            </tr>
          </tbody>
        </table>
      </div>) :
      (<div>
        <HumanButton onButtonClick={this.props.onGameButtonClick} /> &nbsp;
        <RoboButton onButtonClick={this.props.onGameButtonClick} />
      </div>);

    return (
      <div>
        {congrats}
        {buttons}
      </div>
    );
  }
}

ButtonContainer.propTypes = {
  gameOver: PropTypes.bool.isRequired,
  incorrectAnswers: PropTypes.arrayOf(PropTypes.object).isRequired,
  isCongrats: PropTypes.bool.isRequired,
  onResetButtonClick: PropTypes.func.isRequired,
  onGameButtonClick: PropTypes.func.isRequired,
};

module.exports = ButtonContainer;
