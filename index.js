var apiai = require('apiai');

var app = apiai("");


var getQuestion = function (question, callback) {

    var request = app.textRequest( question , {
        sessionId: '23456789ab'
    });

    request.on('response', function(response) {
        callback(response);
    });

    request.on('error', function(error) {
       callback(error);
    });

    request.end();

}


module.exports = {
    getQuestion : getQuestion
}