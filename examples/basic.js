'use strict';

let Wit = null;
let interactive = null;
try {
  // if running from repo
  Wit = require('../').Wit;
  interactive = require('../').interactive;
} catch (e) {
  Wit = require('toncsi-wit').Wit;
  interactive = require('toncsi-wit').interactive;
}

const accessToken = (() => {
  if (process.argv.length !== 3) {
    console.log('usage: node examples/basic.js <VFD7X3EUFNWFFP7XAMRB2YJLQTHCDAUI>');
    process.exit(1);
  }
  return process.argv[2];
})();

const actions = {
  send(request, response) {
    const {sessionId, context, entities} = request;
    const {text, quickreplies} = response;
    return new Promise(function(resolve, reject) {
      console.log('user said...', request.text);
      console.log('sending...', JSON.stringify(response));
      return resolve();
    });
  },
};

const client = new Wit({accessToken, actions});
interactive(client);
