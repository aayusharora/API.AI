/**
 * Created by aayusharora on 8/30/17.
 */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var AI = require('./index.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var port = process.env.PORT || 5000;

app.get('/', function(req,res) {
    res.send("Send a post request on /question with question:'question value'");
});


app.post('/question',function(req,res) {
    try {
        if(req.body.question) {
            AI.getQuestion(req.body.question,function(answer){
                res.send(answer);
            });
        }
        else {
            res.send("Please enter a valid question");
        }

    }
    catch (err){
        throw err;
    }

});

app.post('/satisfaction', function(req,res) {
   if( req.body.satisfied === 'yes') {
       res.send("Thanks for the chat")
   }
   else {
       // giving you a mentor from the pool
   }
});

app.listen(port, function(){
    console.log("Server is running");
})

