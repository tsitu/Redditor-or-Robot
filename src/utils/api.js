'use strict';
const snoowrap = require('snoowrap');
const config = require('./config.js');

// const requester = new snoowrap({
//     userAgent: config.userAgent,
//     clientId: config.clientId,
//     clientSecret: config.clientSecret,
//     username: config.username,
//     password: config.password
// });

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

// Store node randomstring.generate() in localStorage?
function authenticateUser() {
    // window.location = snoowrap.getAuthUrl({
    //     clientId: 'VOXTB6cJcmGt8w',
    //     scope: ['identity'],
    //     redirectUri: 'http://192.168.0.108:3000/',
    //     // redirectUri: 'https://tsitu.github.io/Reddit-API-Games/',
    //     permanent: false,
    //     state: 'testing'
    // });

    window.location = 'https://www.reddit.com/api/v1/authorize?client_id=VOXTB6cJcmGt8w&response_type=token&state=ayylmao&redirect_uri=http://192.168.0.108:3000/&scope=identity';
}

function validateAuth(token) {
    // created snoowrap has an accessToken different from "code"
    // _nextRequestTimestamp = -Infinity

    // snoowrap.fromAuthCode({
    //     code: token,
    //     userAgent: navigator.userAgent,
    //     clientId: 'VOXTB6cJcmGt8w',
    //     redirectUri: 'http://192.168.0.108:3000/'
    // }).then(r => {
    //     console.log(r);
    // });

    return snoowrap.fromAuthCode({
        code: token,
        userAgent: navigator.userAgent,
        clientId: 'VOXTB6cJcmGt8w',
        redirectUri: 'http://192.168.0.108:3000/'
    });

    // return new snoowrap({
    //     userAgent: navigator.userAgent,
    //     clientId: 'VOXTB6cJcmGt8w',
    //     // code: token
    //     accessToken: token
    // });
}

module.exports = {
    getHot,
    getUser,
    getRandom,
    authenticateUser,
    validateAuth
};