/* @flow */

import React from 'react';
import PropTypes from 'prop-types';

import ResetButton from './ResetButton';
import HumanButton from './HumanButton';
import RoboButton from './RoboButton';

class ButtonContainer extends React.PureComponent {
  props: {
    gameOver: boolean,
    incorrectAnswers: Array<Object>, // needs precision
    isCongrats: boolean,
    onResetButtonClick: Function,
    onGameButtonClick: Function,
  };

  render() {
    let incorrectAnswersDisplay = null;
    if (this.props.gameOver && this.props.incorrectAnswers) {
      const c = this.props.incorrectAnswers;
      switch (c.length) {
        case 0:
          incorrectAnswersDisplay = '';
          break;
        case 1:
          incorrectAnswersDisplay =
            (<div>
              <span role="img" aria-label="Pensive">😔</span> <br />
              <a href={c[0].url} target="_blank">{c[0].user}: {c[0].id}</a>
            </div>);
          break;
        case 2:
          incorrectAnswersDisplay =
            (<div>
              <span role="img" aria-label="Pensive">😔</span> <br />
              <a href={c[0].url} target="_blank">{c[0].user}: {c[0].id}</a> <br />
              <a href={c[1].url} target="_blank">{c[1].user}: {c[1].id}</a>
            </div>);
          break;
        case 3:
          incorrectAnswersDisplay =
            (<div>
              <span role="img" aria-label="Pensive">😔</span> <br />
              <a href={c[0].url} target="_blank">{c[0].user}: {c[0].id}</a> <br />
              <a href={c[1].url} target="_blank">{c[1].user}: {c[1].id}</a> <br />
              <a href={c[2].url} target="_blank">{c[2].user}: {c[2].id}</a>
            </div>);
          break;
        default:
      }
    }
    const congrats = this.props.isCongrats ? <div> Congratulations! <br /> </div> : '';
    const buttons = this.props.gameOver ?
      (<div>
        Play Again? <br /> <br />
        <ResetButton onButtonClick={this.props.onResetButtonClick} /> <br /> <br />
        {incorrectAnswersDisplay}
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
