const express=require('express');

const path=require('path');

//connect to db
const db= require('./config/mongoose');

const port=8000;

const app=express();

// setting view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

// added middleware
app.use(express.urlencoded());

//added static path to css and js files
app.use(express.static(path.join(__dirname, '/assets')));

//added route path to render on view
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err)
    console.log(err);
    console.log('app listen to',port);
}) 