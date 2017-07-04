/* @flow */

import React from 'react';

class CommentContainer extends React.PureComponent {
  props: {
    isGoodJob: boolean,
    isWrongAnswer: boolean,
    isLoading: boolean,
    text: string,
  }

  render() {
    const goodJob = this.props.isGoodJob ? <div> <br /> Good job! On to the next subreddit... </div> : '';
    const wrongAnswer = this.props.isWrongAnswer ? <div> <br /> Whoops! Moving on... </div> : '';
    const commentBody = this.props.isLoading ?
      <div> <br /> <LoadingSpinner /> </div> :
      <div id="dangerousHTML" dangerouslySetInnerHTML={{ __html: this.props.text }} />;
    return (
      <div>
        {goodJob}
        {wrongAnswer}
        {commentBody}
      </div>
    );
  }
}

function LoadingSpinner() {
  return (
    <img
      src="https://tsitu.github.io/Redditor-or-Robot/assets/spinner.gif"
      alt="Spinner"
      height="42"
      width="42"
    />
  );
}

module.exports = CommentContainer;
