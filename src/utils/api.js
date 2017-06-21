'use strict';
const snoowrap = require('snoowrap');

function getHot(requester, sub) {
    return requester.getHot(sub).map(post => post.expandReplies({limit: 1, depth: 1}));
}

function getUser(requester, name) {
    // Returns Listing of 25 Comments, amount appends to that
    // All bots have been around 10 months so 100 comments on all is likely
    // return requester.getUser(name).getComments().fetchMore({amount: 50});
    return requester.getUser(name).getComments();
}

function getRandom(max) {
    return Math.floor(Math.random() * max);
}

function authenticateUser() {
    window.location = snoowrap.getAuthUrl({
        clientId: 'VOXTB6cJcmGt8w', // Dev
        // clientId: 'fZR5Gbz9a0Odeg',
        scope: ['identity', 'read', 'history'],
        redirectUri: 'http://192.168.0.103:8080/',
        // redirectUri: 'https://tsitu.github.io/Redditor-or-Robot/',
        permanent: true,
        state: 'testing'
        // Store node randomstring.generate() in localStorage and compare when redirected
    });
}

function validateAuth(token) {
    return snoowrap.fromAuthCode({
        code: token,
        userAgent: navigator.userAgent,
        clientId: 'VOXTB6cJcmGt8w', // Dev
        // clientId: 'fZR5Gbz9a0Odeg',
        redirectUri: 'http://192.168.0.103:8080/',
        // redirectUri: 'https://tsitu.github.io/Redditor-or-Robot/',
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
    getMe
};