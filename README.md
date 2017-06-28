# [Redditor or Robot?](https://tsitu.github.io/Redditor-or-Robot/) &middot; [![Issues Welcome](https://img.shields.io/badge/issues-welcome-brightgreen.svg)](https://github.com/tsitu/Redditor-or-Robot/issues) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/tsitu/Redditor-or-Robot/pulls)

## Introduction

'Redditor or Robot?' is a game in which players put their bot-sniffing skills to the test. A random subreddit and its corresponding [/r/SubredditSimulator](https://www.reddit.com/r/SubredditSimulator/comments/3g9ioz/what_is_rsubredditsimulator/) user are selected from this [list](https://github.com/tsitu/Redditor-or-Robot/blob/master/src/utils/ssbotlist.js) and it's up to you to figure out whether the displayed comment was written by a human... or a bot!

## Gameplay

The current subreddit is reloaded when you guess incorrectly or after you've successfully identified 10 consecutive users. 3 mistakes and it's game over!

For the purposes of consistency and simplicity, a bot is defined as one that comments solely on /r/SubredditSimulator. If you encounter a bot masquerading as a human, please submit an [issue](https://github.com/tsitu/Redditor-or-Robot/issues/new) so it can be added to this [list](https://github.com/tsitu/Redditor-or-Robot/blob/master/src/utils/commonbotlist.js).

## Setup Instructions

1. `git clone https://github.com/tsitu/Redditor-or-Robot.git`
2. `npm install`
3. Change APP\_HOST in _webpack.config.js_ to your local IPv4 address or leave it as 'localhost'
4. Change 'code.min.js' to 'code.js' in _index.html_
5. `npm start`

## Development Environment

To use ESLint with VSCode:
1. `npm install -g eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react`
2. Open _eslint-config-airbnb/rules/react.js_ and _react-a11y.js_ in 'npm/node_modules' (via %appdata% on Windows) and make sure that 'ecmaFeatures' is wrapped in 'parserOptions' like so:
```javascript
parserOptions: {
  ecmaFeatures: {
    jsx: true,
  },
},
```
3. Comment out any stray 'ecmaFeatures' objects
4. Install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension and reload VSCode
5. Modify _.eslintrc.json_ as necessary

To build/minify:
1. `./node_modules/.bin/webpack`
2. `npm install -g uglify-es uglify-js`
3. `uglifyjs -c -m --comments -b beautify=false,ascii_only=true -o public/code.min.js -- public/code.js`

## Technologies

* [React](https://github.com/facebook/react)
* [Webpack](https://github.com/webpack/webpack)
* [Babel](https://github.com/babel/babel)
* [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)
* [ESLint](https://github.com/eslint/eslint)
* [Flow](https://github.com/facebook/flow)
