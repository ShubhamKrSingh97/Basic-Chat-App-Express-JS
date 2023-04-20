const express=require('express');
const app=express();

const bodyParser= require('body-parser');

const defaultRoute=require('./routes/default');
const dataRoute=require('./routes/data');
const loginRoute=require('./routes/login');

app.use(bodyParser.urlencoded({extended:false}));

app.use(loginRoute);

app.use(dataRoute);

app.use(defaultRoute);


app.listen(4000);