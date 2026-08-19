const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost/my_database');

BlogPost.create({
    title: 'Node.js',
    body: 'Building a Django project using Django and Python'
})
.then((BlogPost)=>{
    console.log(null, BlogPost);
})
.catch((error)=>{
    console.log(error);
});
