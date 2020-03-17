const express = require('express');
const app = express();

const handlebars = require('express3-handlebars')
    .create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req,res){
    res.render('home');
});

app.get('/about', function(req,res){
    res.render('about');
});

app.get('/login', function(req,res){
    res.render('login');
})

app.use(express.static(__dirname + "/public"));

app.use(function(err,req,res,next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.use(function(err,req,res,next){
    console.error(err.stack);
    res.status(404);
    res.render('404');
});

app.listen(app.get('port'), function(){
    console.log("Server started on port " +
        app.get('port') + "...");
})
