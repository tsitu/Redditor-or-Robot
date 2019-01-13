/* @flow */

import React from 'react';
import PropTypes from 'prop-types';

import NavHeader from './NavHeader';
import CommentContainer from './CommentContainer';
import ButtonContainer from './ButtonContainer';
import AnimationContainer from './AnimationContainer';

import { getRandom, fetchComments } from '../utils/api';
import ssBotList from '../utils/ssBotList';
import commonBotList from '../utils/commonBotList';
import SnuOwnd from '../utils/snuOwnd';

// Globals
let USER_COMMENTS = {};
let SS_COMMENTS = {};
let RANDOM_COMMENT = {};
let SS_BOTLISTCOPY = [];
let SS_TRACKER = [];
let INCORRECT_ANSWERS = [];
let LIFE_TRACKER = 3;
let GUESS_TRACKER = 0;

const CONGRATS_THRESHOLD = 265;
const RELOAD_THRESHOLD = 10;
const GUESS_THRESHOLD = 10;

class GameContainer extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      text: '',
      isLoading: true,
      subredditName: '',
      numLives: 3,
      score: 0,
      gameOver: false,
      isGoodJob: false,
      isWrongAnswer: false,
      isCongrats: false,
      playerName: '',
      scoreAnimation: false,
      lifeAnimation: false,
    };

    this.reloadComments = this.reloadComments.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.onResetButtonClick = this.onResetButtonClick.bind(this);
    this.onGameButtonClick = this.onGameButtonClick.bind(this);

    LIFE_TRACKER = 3;
    GUESS_TRACKER = 0;
    SS_BOTLISTCOPY = ssBotList;
    SS_TRACKER = [];
    INCORRECT_ANSWERS = [];
  }

  state: {
    text: string,
    isLoading: boolean,
    subredditName: string,
    numLives: number,
    score: number,
    gameOver: boolean,
    isGoodJob: boolean,
    isWrongAnswer: boolean,
    isCongrats: boolean,
    playerName: string,
    scoreAnimation: boolean,
    lifeAnimation: boolean,
  }

  componentDidMount() {
    this.reloadComments();
  }

  componentDidUpdate() {
    if (LIFE_TRACKER !== this.state.numLives) {
      LIFE_TRACKER = this.state.numLives;
      this.reloadComments();
    }
  }

  onResetButtonClick: () => void;
  onResetButtonClick() {
    this.props.onResetButtonClick();
  }

  onGameButtonClick: () => void;
  onGameButtonClick(type: string) {
    if (!USER_COMMENTS || !SS_COMMENTS) {
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
      scoreAnimation: false,
      lifeAnimation: false,
    });

    const isRobot = SS_TRACKER.includes(RANDOM_COMMENT.author);

    if ((isRobot && type === 'robot') || (!isRobot && type === 'human')) {
      this.setState({
        score: this.state.score + 1,
        scoreAnimation: true,
      });
      this.handleUpdate();
    } else if ((isRobot && type === 'human') || (!isRobot && type === 'robot')) {
      this.setState({
        numLives: this.state.numLives - 1,
        isWrongAnswer: true,
        lifeAnimation: true,
      });

      // Add precise comment permalinks
      let urlBuild = null;
      if (RANDOM_COMMENT.link_permalink) {
        urlBuild = RANDOM_COMMENT.link_permalink + RANDOM_COMMENT.id;
      }

      INCORRECT_ANSWERS.push({
        url: urlBuild,
        id: RANDOM_COMMENT.id,
        user: RANDOM_COMMENT.author,
      });
    } else {
      console.log('Error in onGameButtonClick');
    }
  }

  reloadComments: () => void;
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
    });

    const hotPromise = fetchComments('sub', randomSS.subreddit).then((value) => {
      USER_COMMENTS = value.data.children;
      // console.log(USER_COMMENTS);
    }, (reason) => {
      console.log(reason);
    });

    const userPromise = fetchComments('user', randomSS.username).then((value) => {
      SS_COMMENTS = value.data.children;
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

  handleUpdate: () => void;
  handleUpdate() {
    if (!USER_COMMENTS || !SS_COMMENTS) {
      console.log('Null object[s], please refresh');
      return;
    }

    if (
      USER_COMMENTS.length <= RELOAD_THRESHOLD ||
      SS_COMMENTS.length <= RELOAD_THRESHOLD ||
      GUESS_TRACKER >= GUESS_THRESHOLD
    ) {
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
      RANDOM_COMMENT = USER_COMMENTS[getRandom(USER_COMMENTS.length)].data;
      USER_COMMENTS = USER_COMMENTS.filter(el =>
        el.data.id !== RANDOM_COMMENT.id, // Filter out seen comments
      );

      if (commonBotList.indexOf(RANDOM_COMMENT.author) > -1) {
        this.handleUpdate();
        return;
      }

      if (RANDOM_COMMENT.gilded > 0) {
        console.log(`${RANDOM_COMMENT.gilded} gold on comment: ${RANDOM_COMMENT.id}`);
      }

      this.setState({
        text: SnuOwnd.getParser().render(RANDOM_COMMENT.body),
        isLoading: false,
      });

      GUESS_TRACKER += 1;
    } else if (roll === 1) {
      RANDOM_COMMENT = SS_COMMENTS[getRandom(SS_COMMENTS.length)].data;
      SS_TRACKER.push(RANDOM_COMMENT.author);
      SS_COMMENTS = SS_COMMENTS.filter(el =>
        el.data.id !== RANDOM_COMMENT.id, // Filter out seen comments
      );

      if (RANDOM_COMMENT.gilded > 0) {
        console.log(`${RANDOM_COMMENT.gilded} gold on comment: ${RANDOM_COMMENT.id}`);
      }

      this.setState({
        text: SnuOwnd.getParser().render(RANDOM_COMMENT.body),
        isLoading: false,
      });

      GUESS_TRACKER += 1;
    }
  }

  props: {
    onResetButtonClick: Function,
  }

  render() {
    const buttonContainer =
      (<ButtonContainer
        gameOver={this.state.gameOver}
        isCongrats={this.state.isCongrats}
        onResetButtonClick={this.onResetButtonClick}
        onGameButtonClick={this.onGameButtonClick}
        incorrectAnswers={INCORRECT_ANSWERS}
      />);
    const buttonCommentContainer = this.state.gameOver ?
      (<div>
        {buttonContainer}
      </div>) :
      (<div>
        {buttonContainer}
        <CommentContainer
          text={this.state.text}
          isLoading={this.state.isLoading}
          isGoodJob={this.state.isGoodJob}
          isWrongAnswer={this.state.isWrongAnswer}
        />
      </div>);

    return (
      <div className="gameContainer">
        <NavHeader
          gameOver={this.state.gameOver}
          score={this.state.score}
          subreddit={this.state.subredditName}
          numLives={this.state.numLives}
        />
        <AnimationContainer
          scoreAnimation={this.state.scoreAnimation}
          lifeAnimation={this.state.lifeAnimation}
          isLoading={this.state.isLoading}
        />
        {buttonCommentContainer}
      </div>
    );
  }
}

GameContainer.propTypes = {
  onResetButtonClick: PropTypes.func.isRequired,
};

module.exports = GameContainer;
