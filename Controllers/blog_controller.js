const bl = require('../models/blog');
// blog_index // blog_details // blog_create_get // blog_create_post // blog_delete

const blog_index = (req,res)=>{
    bl.find()
    .then((result)=>{
        res.render('index_imported',{title:'All Blogs',blogs:result})
    })
    .catch((err)=>{
        console.log(err)
     })
}

const blog_details = (req,res)=>{
    const id = req.params.id;
    bl.findById(id)
    .then(result =>{
        res.render('details',{blog:result, title: 'SINGlE BLOG'});
    })
    .catch(err=>{
        res.status(404).render('404',{title:'BLOG NOT FOUND'});
        console.log(err);
    })
}

const blog_create_get = (req,res)=>{
    bl.find()
    .then((result)=>{
        res.render('index_imported',{title:'All Blogs',blogs:result});
    })
    .catch((err)=>{
        console.log(err);
     })
}

const blog_create_post = (req,res)=>{
    const z = new bl(req.body);
    z.save()
    .then((result)=>{
        res.redirect('/blogs')
    })
    .catch((err)=>{
        console.log(err);
    })
}

const blog_delete = (req,res)=>{
    const id = req.params.id;
    bl.findByIdAndDelete(id)
    .then(result => {
        res.json({redirect:'/blogs'});
    })
    .catch(err =>{
        console.log(err);
    })
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}
