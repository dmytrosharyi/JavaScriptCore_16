var express = require("express");
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/", function (request, response) {
    console.log('server is started');
    response.send('<h1>lesson 16</h1>')
});

server.get('/userGet', function (request, response) {
    console.log(request.query);
    var obj = request.query;
    obj.name = '';
    obj.surname = '';
    obj.age = '';
    obj.residence = '';
    response.send('You have succesfully used GET : ' + JSON.stringify(request.query));
});

server.post('/userPost', function (request, response) {
    console.log(request.body);
    var obj = request.query;
    obj.userName = '';
    obj.userSurname = '';
    obj.userAge = '';
    obj.userLive = '';
    response.send('You have succesfully used POST : ' + JSON.stringify(obj));
});
server.listen(3000);