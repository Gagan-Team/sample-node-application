const { response } = require('express');
var express = require('express');
//var multer  = require('multer');
//var upload = multer({ dest: 'uploads/' })

var app = express();

var bodyParser = require('body-parser');
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
//app.use(upload);

//Handlers
let formHandler = require("./src/form-handler")
let fileProcessor = require("./src/file-processor")


// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})

app.get('/process_get', function (req, res) {
    res.send(formHandler.process_get(req))
 })
 

app.post('/process_post', urlencodedParser, function (req, res) {
    res.end(formHandler.process_post(req))
 })

 app.post('/file_upload', function(req, res) {
    res.send(fileProcessor.upload(req))
 })


// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match '+req.path);
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})