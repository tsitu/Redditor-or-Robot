# [Redditor or Robot?](https://tsitu.github.io/Redditor-or-Robot/)

## Introduction

'Redditor or Robot?' is a game in which players put their bot-detection skills to the test. A subreddit and its corresponding [/r/SubredditSimulator](https://www.reddit.com/r/SubredditSimulator/comments/3g9ioz/what_is_rsubredditsimulator/) bot are randomly selected from this [list](https://github.com/tsitu/Redditor-or-Robot/blob/master/src/utils/ssbotlist.js) and it's up to *you* to figure out whether the comment on the screen was written by a human... or a bot!

## Gameplay

The current subreddit is reloaded when you guess incorrectly, or when you've successfully identified 10 users in a row. 3 mistakes and it's game over!

*Note:* In the interest of simplicity, a bot is defined as one that comments solely in /r/SubredditSimulator. If you encounter an obvious bot that is being recognized as a human, please submit an [issue](https://github.com/tsitu/Redditor-or-Robot/issues/new) so it can be added to this [list](https://github.com/tsitu/Redditor-or-Robot/blob/master/src/utils/commonbotlist.js).

## OAuth2

The Reddit API OAuth2 scopes required by this game are as follows:
* [identity](https://www.reddit.com/dev/api/oauth#scope_identity) (for a player's username)
* [read](https://www.reddit.com/dev/api/oauth#scope_read) (to read a subreddit's 'Hot' posts)
* [history](https://www.reddit.com/dev/api/oauth#scope_history) (to fetch comments from a Subreddit Simulator bot)

## Revoking Access

If, for any reason, you need to completely clear out the permissions for this game,

1. Make sure you're logged out.
2. Navigate [here]() and scroll down until you find "Redditor or Robot?"
3. Click "revoke access" in the bottom left. It should look similar to the image below:

![revoke](https://github.com/tsitu/Redditor-or-Robot/raw/master/assets/revoke.png)

## Technologies

* [React](https://github.com/facebook/react#readme)
* [Webpack](https://github.com/webpack/webpack#readme)
* [Babel](https://github.com/babel/babel#readme)
* [snoowrap](https://github.com/not-an-aardvark/snoowrap#readme)