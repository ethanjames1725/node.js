const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')
mongoose.connect('mongodb://localhost/my_database');

// Find a document using its ID
// var id = "6a857998e700e5edda4b0143";

// BlogPost.findById(id)
//     .then(blogpost => {
//         console.log(blogpost);
//     })
//     .catch(error => {
//         console.log(error);
//     })


// Find a document using its ID and update the title

// var id = "6a857c2448e3b30df2f0302f";

// BlogPost.findByIdAndUpdate(id, {
//     title: 'Django'
// })
//     .then(blogpost => {
//         console.log(blogpost);
//     })
//     .catch(error => {
//         console.log(error);
//     })


// Deleting a document.

// var id = "6a857c0102da6d6c3ed3cbef";

// BlogPost.findByIdAndDelete(id)
//     .then(blogpost => {
//         console.log(blogpost);
//     })
//     .catch(error => {
//         console.log(error);
//     })


// BlogPost.create({
//     title: 'Node.js',
//     body: 'Building a Blog project using Express, Node.js, Mongo, Python'
// })
//     .then((BlogPost) => {
//         console.log(null, BlogPost);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


// BlogPost.find({})
//     .then(blogposts => {
//         console.log(blogposts);
//     })


// BlogPost.find({
//     title: 'The Mythbuster Guide to Saving Money on Energy Bills'
// })
//     .then(blogspot => {
//         console.log(blogspot)
//     })
//     .catch((error) => {
//         console.log(error);
//     })


// BlogPost.find({
//     title: '/The/'
// })
//     .then(blogspot => {
//         console.log(blogspot)
//     })
//     .catch((error) => {
//         console.log(error);
//     })
