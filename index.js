import express from 'express'
// import { userLogin, userSignup } from './controller.js';
// import router from './route.js';
// import { searchController, usernameController } from './controller.js';

// const express=require('express');
/*instance for the app by using express function*/
const app=express()
const PORT=3000;
//set EJS as the view engine
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    const userName='Elon Musk'
    res.render('index',{userName})
})
/*Define  a simple route
if we are sending any data inthe api  then  we get it in req if we are sending any data from backend res object
route
whenever we hit any reuest using the web browser that request is processes using get methis
whenever we are making anychanges in the file it will restart the backend for this we will use nodemon
to install nodemon npm i nodemon --save-dev
whenever we are changing the  backend it will automatically restart the server without manuallly reatarting*/
// app.get('/',(req,res)=>{
//     // res.send('Hello ,Express')
//     res.send('Hello,Kiran')
// })
// app.use('/user',router)
//express.json is the middle ware to parse  the data in the request body
/*app.use(express.json())
app.put('/user/:id',(req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    
    res.json({
        message: `User ${userId} created with name ${name} and email ${email}`
    });
});
app.post('/user',express.json(),(req,res)=>{
    const {name,email}=req.body
    res.json({
        message:`User ${name}  with email ${email} created successfully`
    })
})
app.delete('/user/:id',(req,res)=>{
    const userId=req.params.id;
    res.json({
        message:`User with Id ${userId} deleted successfully`
    })
})
app.post('/user',express.json(),(req,res)=>{
    const {name,email}=req.body
    res.json({
        message:`User ${name}  with email ${email} created successfully`
    })
})
//convert the json formatted body data parse it in object and it will be added in req bodyy(express.json())
app.put('/user/:id', express.json(), (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    
    res.json({
        message: `User ${userId} created with name ${name} and email ${email}`
    });
});
app.get('/user/login',userLogin)
app.get('/user/signup',userSignup)
app.get('/user/:username',usernameController)
app.get('/search',searchController)
app.get('/user/:username',(req,res)=>{
    const username=req.params.username;
    res.send(`welcome ${username}`)
})
//search?keyword=express
app.get('/search',(req,res)=>{
    const keyword=req.query.keyword;
    res.send(`Welcome for ${keyword}`)
})
app.get('/about',(req,res)=>{
    // res.send('Hello ,Express')
    res.send('aboute route')
})
app.get('/contact',(req,res)=>{
    // res.send('Hello ,Express')
    res.send('contact route')
})*/
//initialize expres app this method we can start our express server at this port number ehen erver the server started then call back function will be executed
app.get('/things/:name/:id([0-9]{5})',(req,res)=>{
    const {name,id}=req.params
    res.json({
        id,name
    })
})
//catch all routes
// app.get('*',(req,res)=>{
//     res.send('Sorry This is an invalid URL')
// })
//middleware  applied for all routes created in the app
/*app.use((req,res,next)=>{
    console.log("A new Request received at"+Date.now())
    next()//call route handler function
})*/
//middlwware for a single route
/*app.use('/welcome',(req,res,next)=>{
    console.log("A new Request received at"+Date.now())
    next()//call route handler function
})
app.get('/',(req,res)=>{
    // res.send('Hello ,Express')
    res.send('Hello,Kiran')
})
app.get('/welcome',(req,res)=>{
    res.send('Welcome to Ecpress App')
})*/
//middleware
/*app.use((req,res,next)=>{
    console.log("start")
    res.on('finish',()=>{
        console.log('End')
    })
    next()
})*/
//controller function
/*app.get('/',(req,res)=>{
    // res.send('Hello ,Express')
    console.log('middle')
    res.send('Hello,Kiran')
})
app.get('/error',()=>{
    throw new Error('This is test Error')
})
//middleware
app.use((err,req,res,next)=>{
    console.error(err.message)
    res.send('Internel Server Error')
})*/
// app.use(express.static('public'))
// app.use(express.static('images'))
app.use('/public',express.static('public'))
app.use('/images',express.static('images'))
app.get('/',(req,res)=>{
    res.send('Hello Express')
})
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})