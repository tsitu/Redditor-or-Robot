# [Redditor or Robot?](https://tsitu.github.io/Redditor-or-Robot/) &middot; [![Build Status](https://travis-ci.org/tsitu/Redditor-or-Robot.svg?branch=master)](https://travis-ci.org/tsitu/Redditor-or-Robot)

## Introduction

'Redditor or Robot?' is a game in which players put their bot-sniffing skills to the test. A random subreddit and its corresponding [/r/SubredditSimulator](https://www.reddit.com/r/SubredditSimulator/comments/3g9ioz/what_is_rsubredditsimulator/) user are selected from this [list](https://github.com/tsitu/Redditor-or-Robot/blob/master/src/utils/ssbotlist.js) and it's up to you to figure out whether the displayed comment was written by a human... or a bot!

## Gameplay

The current subreddit is reloaded when you guess incorrectly or after you've successfully identified 10 consecutive users. 3 mistakes and it's game over!

For the purposes of consistency and simplicity, a bot is defined as one that comments solely on /r/SubredditSimulator. If you encounter a bot masquerading as a human, please submit an [issue](https://github.com/tsitu/Redditor-or-Robot/issues/new) so it can be added to this [list](https://github.com/tsitu/Redditor-or-Robot/blob/master/src/utils/commonbotlist.js).

## Running Locally

1. `git clone https://github.com/tsitu/Redditor-or-Robot.git`
2. `npm install`
3. Change APP\_HOST in _webpack.config.js_ to your local IPv4 address or leave it as 'localhost'
4. Change 'build/code.min.js' to 'build/code.js' in _index.html_
5. `npm start`

## Development Environment

### To use ESLint with VSCode
1. `npm install -g eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react`
2. Open _eslint-config-airbnb/rules/react.js_ and _react-a11y.js_ in 'npm/node_modules' (via %appdata% on Windows) and make sure that 'ecmaFeatures' is wrapped in 'parserOptions' like so:
```javascript
parserOptions: {
  ecmaFeatures: {
    jsx: true,
  },
},
```
3. Install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension and reload VSCode.
4. Modify _.eslintrc.json_ if necessary.
5. Add the following to your local _User\settings.json_:
```javascript
"eslint.validate": [
  "javascript",
  "javascriptreact",
  "html"
],
```

### To use Flow with VSCode
1. `npm install -g flow-bin eslint-plugin-flowtype`
2. Install the [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode) extension and reload VSCode.
3. Modify _src/.flowconfig_ if necessary and add `/* @flow */` to the top of new files that require type checking.
4. Add the following to your local _User\settings.json_:
```javascript
"flow.pathToFlow": "{PATH_TO_FLOW_BIN}\\{FLOW_VERSION}\\flow.exe",
"javascript.validate.enable": false,
```

### To build + minify
1. `npm install -g uglify-es uglify-js` (if not already installed)
2. `npm run build`

## Technologies

* [React](https://github.com/facebook/react)
* [Webpack](https://github.com/webpack/webpack)
* [Babel](https://github.com/babel/babel)
* [ESLint](https://github.com/eslint/eslint)
* [Flow](https://github.com/facebook/flow)

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Ftsitu%2FRedditor-or-Robot.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Ftsitu%2FRedditor-or-Robot?ref=badge_large)
