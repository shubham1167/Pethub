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

//Mongoose and Mongosandboxes

// app.get('/addBlog', (req,res)=> {
//     const any = new bl({
//         title:'XYZ',
//         snippet:'ABC',
//         body:'MNO'
//     })
//     any.save()
//         .then((result)=>{
//             res.send(result);
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
// })

// app.get('/addBlog1', (req,res)=> {
//     bl.find()
//         .then((result)=>{
//             res.send(result);
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
// })

//Static Middleware
app.use(express.static('Apublic'));
app.use(express.urlencoded({extended:true}));

//Middleware
app.use((req,res,next)=>{
    console.log("Into the middleware");
    next();
});

app.use(morgan('dev'));


app.get('/',(req,res)=>{

    const blogs = [
        {title: 'Lorem f vbvbru', snippet:'ned55555cb'},
        {title: '6orem f vbvbru', snippet:'nedbc6666b'},
        {title: '7orem f vbvbru', snippet:'neddj77777cb'},
    ];

    res.render('Home', {title: 'Home', blogs});//Data passed in {} which is identified by title will be sent to view which is getting render 
    
});

app.get('/shoplist',(req,res)=>{
    // res.sendFile('./HTML/about.html' , {root:__dirname});
    res.render('list', {Example: 'EG'});
});

app.use((req,res,next)=>{
    console.log("Into the 2 middleware");
    next();
});

app.get('/shop',(req,res)=>{
    // res.sendFile('./HTML/contact.html' , {root:__dirname});
    res.render('Shop');
});

app.get('/ngo',(req,res)=>{
    // res.sendFile('./HTML/contact.html' , {root:__dirname});
    res.render('./Partials/ngo');
});

app.get('/blog',(req,res)=>{
    // res.sendFile('./HTML/contact.html' , {root:__dirname});
    res.render('./guide');
});



// app.get('/about-us',(req,res)=>{
//     res.redirect('./HTML/about.html' , {root:__dirname});
// });

app.use('/blogs',blog_routes);

app.use((req,res)=>{
    res.status(404).render('404');
});