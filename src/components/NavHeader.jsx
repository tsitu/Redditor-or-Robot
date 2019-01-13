/* @flow */

import React from 'react';
import PropTypes from 'prop-types';

class NavHeader extends React.PureComponent {
  props: {
    numLives: number,
    score: number,
    subreddit: string,
  }

  render() {
    let heartLives = null;
    switch (this.props.numLives) {
      case 0:
        heartLives = 'Game Over!';
        break;
      case 1:
        heartLives = '💖';
        break;
      case 2:
        heartLives = '💖💖';
        break;
      case 3:
        heartLives = '💖💖💖';
        break;
      default:
    }
    return (
      <div>
        <table className="navTable">
          <tbody>
            <tr>
              <td>Score: {this.props.score}</td>
              <td>/r/{this.props.subreddit}</td>
              <td>{heartLives}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

NavHeader.propTypes = {
  numLives: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  subreddit: PropTypes.string.isRequired,
};

module.exports = NavHeader;
