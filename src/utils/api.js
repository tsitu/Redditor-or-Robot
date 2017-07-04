/* @flow */

import fetch from 'isomorphic-fetch';

function getRandom(max: number) {
  return Math.floor(Math.random() * max);
}

function fetchComments(type: string, name: string) {
  let url = null;
  if (type === 'user') {
    url = 'https://www.reddit.com/user/';
    url = url.concat(name, '/comments.json');
  } else if (type === 'sub') {
    url = 'https://www.reddit.com/r/';
    url = url.concat(name, '/comments.json');
  }

  return fetch(url)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response in fetchComments');
      }
      return response.json();
    });
}

module.exports = {
  getRandom,
  fetchComments,
};
