import React from 'react';

function CommentContainer() {
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

function LoadingSpinner() {
  return (
    <img src="https://github.com/tsitu/Redditor-or-Robot/raw/master/assets/spinner.gif" alt="Spinner" height="42" width="42" />
  );
}

module.exports = CommentContainer;
