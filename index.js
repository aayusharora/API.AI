var apiai = require('apiai');

var app = apiai("");

var request = app.textRequest('What is GSOC', {
    sessionId: '23456789ab'
});

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();