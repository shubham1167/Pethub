const express = require('express'); 
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');
const blog_routes = require('./routes.js');

const app = express();

app.set('view engine','ejs');   

//Database connection
const db =   'mongodb+srv://shubham:shubham@123@cluster0.uuw26.mongodb.net/pethub?retryWrites=true&w=majority';
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((result)=>app.listen(3000) )
    .catch((err)=>console.log(err));

//Static Middleware
app.use(express.static('Apublic'));
app.use(express.urlencoded({extended:true}));

//Middleware
app.use((req,res,next)=>{
    console.log("Into the middleware");
    next();
});

app.use(morgan('dev'));

app.get('/shoplist',(req,res)=>{
    res.render('list', {Example: 'EG'});
});

app.get('/shop',(req,res)=>{
    res.render('Shop');
});

app.get('/ngo',(req,res)=>{
    res.render('./Partials/ngo');
});

app.get('/blog',(req,res)=>{
    res.render('./guide');
});


app.use('/blogs',blog_routes);

app.use((req,res)=>{
    res.status(404).render('404');
});
