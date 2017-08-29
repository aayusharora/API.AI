var apiai = require('apiai');

var app = apiai("99ad72a6c7ba4975aeae121d1e0b951f");


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