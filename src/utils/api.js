const snoowrap = require('snoowrap');
const randomstring = require('randomstring');
const Cookies = require('js-cookie');

const DEV_CLIENT_ID = 'VOXTB6cJcmGt8w';
const PROD_CLIENT_ID = 'fZR5Gbz9a0Odeg';
const LOCALHOST_REDIRECT = 'http://192.168.0.111:8080/';
const FILE_REDIRECT = 'file:///C:/Users/Tran/Desktop/Learning%20React/index.html/';
const PROD_REDIRECT = 'https://tsitu.github.io/Redditor-or-Robot/';

function getHot(requester, sub) {
  return requester.getHot(sub).map(post => post.expandReplies({ limit: 1, depth: 1 }));
}

function getUser(requester, name) {
  // Returns Listing of 25 Comments from "new", amount appends to that
  // All bots have been around 10 months so 100 comments on all is likely
  // return requester.getUser(name).getComments().fetchMore({amount: 50});
  return requester.getUser(name).getComments();
}

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

function authenticateUser() {
  const randomState = randomstring.generate();
  Cookies.set('randomState', randomState);
  window.location = snoowrap.getAuthUrl({
    clientId: DEV_CLIENT_ID,
    scope: ['identity', 'read', 'history'],
    redirectUri: LOCALHOST_REDIRECT,
    permanent: true,
    state: randomState,
  });
}

function validateAuth(token) {
  return snoowrap.fromAuthCode({
    code: token,
    userAgent: navigator.userAgent,
    clientId: DEV_CLIENT_ID,
    redirectUri: LOCALHOST_REDIRECT,
  });
}

function getMe(requester) {
  return requester.getMe();
}

module.exports = {
  getHot,
  getUser,
  getRandom,
  authenticateUser,
  validateAuth,
  getMe,
};
