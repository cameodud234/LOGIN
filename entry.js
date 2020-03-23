const express = require('express');
const app = express();

const handlebars = require('express3-handlebars')
    .create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);



/**********************************************************/
// Get Block

app.get('/', function(req,res){
    res.render('blogger');
});

app.get('/home', function(req,res){
    res.render('home');
})

app.get('/game', function(req,res){
    res.render('game');
});

app.get('/contact', function(req,res){
    res.render('contact');
});

/* app.get('/map', function(req,res){
    res.render('map');
}); */

app.get('/login', function(req,res){
    res.render('login');
});


/**********************************************************/

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

app.listen(app.get('port'), '0.0.0.0', function(){
    console.log("Server started on port " +
        app.get('port') + "...");
})
