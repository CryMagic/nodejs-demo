var express = require('express');
var app = express();
app.set('view engine', 'pug');
var HelloController = require('./controller/HelloController');
app.get('/',HelloController.getHelloView);

app.listen(3000,function(){
    console.log('server running !');
})