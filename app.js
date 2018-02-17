
var Express = require("express");
var BodyParser = require("body-parser");
var app = Express();
var mysql = require('mysql');
var knex=require('./db');
var base58=require('./base58');
var path = require('path');
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(Express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'views/index.html'));
  });
app.post("/create", function(req, res) {
    
    if(!req.body.longUrl) {
        return res.status(400).send({"status": "error", "message": "A long URL is required"});
    }
    
    knex.select("*").from('urlshortner').where('longUrl',req.body.longUrl).then(function(a){
            if(a[0]==undefined) {   
                var response = {
                    "id": base58.encode((new Date).getTime()),
                    "longUrl": req.body.longUrl
                    
                };
                response.shortUrl="http://localhost:3000/" + response.id;
                if(req.body.burn_notice=="on"){
                    response.burn_notice="Y";
                } else {
                    response.burn_notice="N";
                }

            knex.insert(response).into('urlshortner').then(function(a){
                console.log('siddhrth');
                res.send(response)
            })
               
            } else { 
                res.send(a[0]);
                if(req.body.burn_notice=="on") {
                    
                    knex('urlshortner').where('id',a[0].id).update("burn_notice","Y").then(function(result){
                        console.log(result);
                    })
                    
            } else {
                knex('urlshortner').where('id',a[0].id).update("burn_notice","N").then(function(result){
                    console.log(result);
                })
            }
                
            }
		
			
		});
});

app.get("/:id", function(req, res) {
    if(!req.params.id) {
        return res.status(400).send({"status": "error", "message": "An id is required"});
    }

    knex.select("*").from('urlshortner').where('id',req.params.id).then(function(a){
        console.log(a.length);
        if(a.length>0) {
            res.redirect(a[0].longUrl); 
            if(a[0].burn_notice=="Y") {
                knex('urlshortner').where('id',a[0].id).del().then(function(result){
                    console.log(result)
                });
            }
        } else {
            res.send('URL BURNT!!!!!')
        }
      
			
        }); 
        
});
var server = app.listen(3000, function() {
    console.log("Listening on port %s...", server.address().port);
});