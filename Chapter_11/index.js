const express = require('express')
const app = new express()
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload') //Page 80

const newPostController = require('./controllers/newPost') // Page 90
const homeController = require('./controllers/home')          //Page 92
const storePostController = require('./controllers/storePost') //Page 92
const getPostController = require('./controllers/getPost')     //Page 92
const validateMiddleware = require('./middleware/validateMiddleware') //Page 93
const newUserController = require('./controllers/newUser')     //page 96
const storeUserController = require('./controllers/storeUser') //Page 97
const loginController = require('./controllers/login') //Page 103
const loginUserController = require('./controllers/loginUser') //page 106
const expressSession = require('express-session')
const authMiddleware = require('./middleware/authMiddleware')
const redirectIfAuthenticatedMiddleware =
require('./middleware/redirectIfAuthenticatedMiddleware')
const logoutController = require('./controllers/logout')

mongoose.connect('mongodb://localhost:27017/my_database')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(fileUpload()) //Page 80
app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}))

//Page 85
const customMiddleWare = (req, res, next) => {
    console.log('Custom middle ware called')
    next()
}
app.use(customMiddleWare)
app.use('/posts/store', validateMiddleware) //Page 93

global.loggedIn = null

app.use((req, res, next) => {
    loggedIn = req.session.userId
    next()
})

// --- Auth routes (Chapter 10) ---
app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController)
app.post('/users/register', redirectIfAuthenticatedMiddleware, storeUserController)
app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController)
app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController)
app.get('/auth/logout', logoutController)

// --- Post routes (Chapter 9) ---
app.get('/', homeController)
app.get('/posts/new', authMiddleware, newPostController)
app.post('/posts/store', authMiddleware, storePostController)
app.get('/post/:id', getPostController)

app.use((req, res) => res.render('notfound'))

app.listen(4000, () => {
    console.log('App listening on port 4000')
})