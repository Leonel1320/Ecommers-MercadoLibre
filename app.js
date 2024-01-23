const express = require('express');
const app = express();
const path = require('node:path');

// Routes
app.get('/', ( req, res ) =>{
    const pathHome = path.join(__dirname, 'views/home.html')
    
    res.sendFile(pathHome);
})

app.get('/register', ( req, res ) =>{
    const pathHome = path.join(__dirname, 'views/register.html')
    
    res.sendFile(pathHome);
})
app.get('/login', ( req, res ) =>{
    const pathHome = path.join(__dirname, 'views/login.html')
    
    res.sendFile(pathHome);
})



// Public (static) Listen Server

app.use(express.static('public'))

const port= process.env.PORT || 3000;

app.listen( port, () => console.log(`Server up on PORT:  http://localhost:${port}`) )


