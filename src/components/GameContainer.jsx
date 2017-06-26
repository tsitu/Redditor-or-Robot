import React from 'react';
import PropTypes from 'prop-types';
import Snoowrap from 'snoowrap';

import NavHeader from './NavHeader';
import CommentContainer from './CommentContainer';
import ResetButton from './ResetButton';
import HumanButton from './HumanButton';
import RoboButton from './RoboButton';

import { getHot, getUser, getRandom, getMe } from '../utils/api';
import ssBotList from '../utils/ssbotlist';
import commonBotList from '../utils/commonbotlist';
import SnuOwnd from '../utils/snuownd';

// Globals
let HOT_SUBMISSIONS = null;
let SS_COMMENTS = null;
let LIFE_TRACKER = null;
let SS_BOTLISTCOPY = null;
let CONGRATS_THRESHOLD = null;
let RELOAD_THRESHOLD = null;
let INCORRECT_ANSWERS = null;
let RANDOM_COMMENT = null;
let RANDOM_SUBMISSION = null;
let REQUESTER = null;
let GUESS_TRACKER = null;
let GUESS_THRESHOLD = null;

class GameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isLoading: true,
      subredditName: '',
      userType: '',
      numLives: 3,
      score: 0,
      gameOver: false,
      isGoodJob: false,
      isWrongAnswer: false,
      isCongrats: false,
      playerName: '',
    };

    this.reloadComments = this.reloadComments.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.onResetButtonClick = this.onResetButtonClick.bind(this);
    this.onGameButtonClick = this.onGameButtonClick.bind(this);

    LIFE_TRACKER = 3;
    SS_BOTLISTCOPY = ssBotList;
    CONGRATS_THRESHOLD = 265;
    RELOAD_THRESHOLD = 10;
    INCORRECT_ANSWERS = [];
    REQUESTER = new Snoowrap(JSON.parse(localStorage.getItem('auth')));
    REQUESTER.config(JSON.parse(localStorage.getItem('config')));
    GUESS_TRACKER = 0;
    GUESS_THRESHOLD = 10;
  }

  componentDidMount() {
    getMe(REQUESTER).then((user) => {
      this.setState({
        playerName: user.name,
      });
      this.reloadComments();
    }, (reason) => {
      console.log(reason);
    });
  }

  componentDidUpdate() {
    if (LIFE_TRACKER && (LIFE_TRACKER !== this.state.numLives)) {
      LIFE_TRACKER = this.state.numLives;
      this.reloadComments();
    }
  }

  onResetButtonClick() {
    this.props.onResetButtonClick();
  }

  onGameButtonClick(type) {
    if (!HOT_SUBMISSIONS || !SS_COMMENTS) {
      console.log('Null object[s], please refresh');
      return;
    }

    if (this.state.isLoading === true) {
      console.log("I'm loadin' fool!");
      return;
    }

    this.setState({
      text: '',
      isLoading: true,
    });

    if (this.state.userType === type) {
      this.setState({
        score: this.state.score + 1,
      });
      this.handleUpdate();
    } else if (this.state.userType !== type) {
      this.setState({
        numLives: this.state.numLives - 1,
        isWrongAnswer: true,
      });

      // Add precise comment permalinks
      let urlBuild = null;
      if (RANDOM_COMMENT.link_permalink) {
        urlBuild = RANDOM_COMMENT.link_permalink + RANDOM_COMMENT.id;
      } else {
        urlBuild = `https://reddit.com${RANDOM_SUBMISSION.permalink}${RANDOM_COMMENT.id}`;
      }
      INCORRECT_ANSWERS.push({
        url: urlBuild,
        id: RANDOM_COMMENT.id,
        user: RANDOM_COMMENT.author.name,
      });
    } else {
      console.log('Shenanigans in GameButtonClick');
    }
  }

  reloadComments() {
    if (this.state.numLives <= 0) {
      this.setState({
        gameOver: true,
      });
      return;
    }

    if (SS_BOTLISTCOPY.length < CONGRATS_THRESHOLD) {
      this.setState({
        gameOver: true,
        isCongrats: true,
      });
      return;
    }

    const randomSS = SS_BOTLISTCOPY[getRandom(SS_BOTLISTCOPY.length)];
    SS_BOTLISTCOPY = SS_BOTLISTCOPY.filter(el =>
      el.subreddit !== randomSS.subreddit, // Filter out seen subreddits
    );

    this.setState({
      subredditName: randomSS.subreddit,
      userType: '',
    });

    const hotPromise = getHot(REQUESTER, randomSS.subreddit).then((value) => {
      HOT_SUBMISSIONS = value;
      // console.log(HOT_SUBMISSIONS);
    }, (reason) => {
      console.log(reason);
    });

    const userPromise = getUser(REQUESTER, randomSS.username).then((value) => {
      SS_COMMENTS = value;
      // console.log(SS_COMMENTS);
    }, (reason) => {
      console.log(reason);
    });

    const apiCalls = [];
    apiCalls.push(hotPromise);
    apiCalls.push(userPromise);

    Promise.all(apiCalls).then(() => {
      this.setState({
        isGoodJob: false,
        isWrongAnswer: false,
      });
      GUESS_TRACKER = 0;
      this.handleUpdate();
    });
  }

  handleUpdate() {
    if (!HOT_SUBMISSIONS || !SS_COMMENTS) {
      console.log('Null object[s], please refresh');
      return;
    }

    if (HOT_SUBMISSIONS.length === RELOAD_THRESHOLD ||
            SS_COMMENTS.length === RELOAD_THRESHOLD ||
            GUESS_TRACKER === GUESS_THRESHOLD) {
      this.setState({
        text: '',
        isLoading: true,
        isGoodJob: true,
      });
      this.reloadComments();
      return;
    }

    const roll = getRandom(2);

    if (roll === 0) {
      RANDOM_SUBMISSION = HOT_SUBMISSIONS[getRandom(HOT_SUBMISSIONS.length)];
      if (RANDOM_SUBMISSION.comments.length === 0) {
        HOT_SUBMISSIONS = HOT_SUBMISSIONS.filter(el =>
          el.id !== RANDOM_SUBMISSION.id, // Filter out empty submissions
        );
        this.handleUpdate();
        return;
      }

      RANDOM_COMMENT = RANDOM_SUBMISSION.comments[getRandom(RANDOM_SUBMISSION.comments.length)];
      RANDOM_SUBMISSION.comments = RANDOM_SUBMISSION.comments.filter(el =>
        el.id !== RANDOM_COMMENT.id, // Filter out seen comments
      );
      if (!RANDOM_COMMENT) {
        this.handleUpdate();
        return;
      }

      if (commonBotList.indexOf(RANDOM_COMMENT.author.name) > -1) {
        this.handleUpdate();
        return;
      }

      if (RANDOM_SUBMISSION.gilded > 0) {
        console.log(`${RANDOM_SUBMISSION.gilded} gold on post: ${RANDOM_SUBMISSION.id}`);
      }

      if (RANDOM_COMMENT.gilded > 0) {
        console.log(`${RANDOM_COMMENT.gilded} gold on comment: ${RANDOM_COMMENT.id}`);
      }

      this.setState({
        text: SnuOwnd.getParser().render(RANDOM_COMMENT.body),
        isLoading: false,
        userType: 'human',
      });

      GUESS_TRACKER += 1;
    } else if (roll === 1) {
      RANDOM_COMMENT = SS_COMMENTS[getRandom(SS_COMMENTS.length)];
      SS_COMMENTS = SS_COMMENTS.filter(el =>
        el.id !== RANDOM_COMMENT.id, // Filter out seen comments
      );

      if (RANDOM_COMMENT.gilded > 0) {
        console.log(`${RANDOM_COMMENT.gilded} gold on comment: ${RANDOM_COMMENT.id}`);
      }

      this.setState({
        text: SnuOwnd.getParser().render(RANDOM_COMMENT.body),
        isLoading: false,
        userType: 'robot',
      });

      GUESS_TRACKER += 1;
    }
  }

  render() {
    const buttonCommentContainer = this.state.gameOver ?
      (<div>
        <ButtonContainer
          gameOver={this.state.gameOver}
          isCongrats={this.state.isCongrats}
          onResetButtonClick={this.onResetButtonClick}
          onGameButtonClick={this.onGameButtonClick}
          incorrectAnswers={INCORRECT_ANSWERS}
        />
      </div>) :
      (<div>
        <ButtonContainer
          gameOver={this.state.gameOver}
          onResetButtonClick={this.onResetButtonClick}
          onGameButtonClick={this.onGameButtonClick}
        />
        <CommentContainer
          text={this.state.text}
          isLoading={this.state.isLoading}
          isGoodJob={this.state.isGoodJob}
          isWrongAnswer={this.state.isWrongAnswer}
        />
      </div>);

    return (
      <div id="gameContainer">
        <NavHeader
          gameOver={this.state.gameOver}
          score={this.state.score}
          subreddit={this.state.subredditName}
          numLives={this.state.numLives}
          playerName={this.state.playerName}
        /> <br />
        {buttonCommentContainer}
      </div>
    );
  }
}

GameContainer.propTypes = {
  onResetButtonClick: PropTypes.func.isRequired,
};

function ButtonContainer() {
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
            <span role="img" aria-label="Grimace">😔</span> <br />
            <a href={c[0].url} target="_blank">{c[0].user}: {c[0].id}</a>
          </div>);
        break;
      case 2:
        incorrectAnswersDisplay =
          (<div>
            <span role="img" aria-label="Grimace">😔</span> <br />
            <a href={c[0].url} target="_blank">{c[0].user}: {c[0].id}</a> <br />
            <a href={c[1].url} target="_blank">{c[1].user}: {c[1].id}</a>
          </div>);
        break;
      case 3:
        incorrectAnswersDisplay =
          (<div>
            <span role="img" aria-label="Grimace">😔</span> <br />
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

module.exports = GameContainer;
