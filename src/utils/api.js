'use strict';
const snoowrap = require('snoowrap');
const config = require('./config.js');

const requester = new snoowrap({
    userAgent: config.userAgent,
    clientId: config.clientId,
    clientSecret: config.clientSecret,
    username: config.username,
    password: config.password
});

function getHot(sub) {
    return requester.getHot(sub).map(post => post.expandReplies({limit: 1, depth: 1}));
}

function getUser(name) {
    // Returns Listing of 25 Comments, amount appends to that
    // All bots have been around 10 months so 100 comments on all is likely
    // return requester.getUser(name).getComments().fetchMore({amount: 50});
    return requester.getUser(name).getComments();
}

function getRandom(max) {
    return Math.floor(Math.random() * max);
}

module.exports = {
    getHot,
    getUser,
    getRandom
};