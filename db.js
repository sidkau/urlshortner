var knex = require('knex')({
    client:'mysql',
    connection : {
    host : 'nt71li6axbkq1q6a.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user : 'wkevmc2bf17pep9z',
    password : 'ote79xe6l4l3fmme',
    port:3306,
    
    database : 'mysql://wkevmc2bf17pep9z:ote79xe6l4l3fmme@nt71li6axbkq1q6a.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/frxtjkk46que8qlw'
    }
    
    });
    
    module.exports = knex;
