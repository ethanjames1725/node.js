<<<<<<< HEAD
const http = require('http')
const fs = require('fs')

const homePage = fs.readFileSync('index.html')
const contactPage = fs.readFileSync('contact.html')
const aboutPage = fs.readFileSync('about.html')
const portfolioPage = fs.readFileSync('portfolio.html')
const notFoundPage = fs.readFileSync('notfound.html')

const server = http.createServer((req,res) =>{
    console.log(req.url)
    if(req.url === '/about')
        res.end(aboutPage)
    else if(req.url === '/contact')
        res.end(contactPage)
    else if(req.url === '/portfolio')
        res.end(portfolioPage)
    else if(req.url === '/')
        res.end(homePage)
    else {
        res.writeHead(404)
        res.end(notFoundPage)
    }
})
=======
const http = require('http')
const fs = require('fs')

const homePage = fs.readFileSync('index.html')
const contactPage = fs.readFileSync('contact.html')
const aboutPage = fs.readFileSync('about.html')
const portfolioPage = fs.readFileSync('portfolio.html')
const notFoundPage = fs.readFileSync('notfound.html')

const server = http.createServer((req,res) =>{
    console.log(req.url)
    if(req.url === '/about')
        res.end(aboutPage)
    else if(req.url === '/contact')
        res.end(contactPage)
    else if(req.url === '/portfolio')
        res.end(portfolioPage)
    else if(req.url === '/')
        res.end(homePage)
    else {
        res.writeHead(404)
        res.end(notFoundPage)
    }
})
>>>>>>> de2eb46dd6b745e72dc2c443acf4c326686b5cf2
server.listen(3000)