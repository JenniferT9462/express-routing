import express from 'express'
//Define express router
const routes = express.Router();

//Import users routes
import usersRouter from './users.js';


//Root URL route
routes.get('/', (req,res) => {
    res.send("Hello from the main router!")
});

//About route
routes.get('/about', (req, res) => {
    res.send("About Us")
});

//User route that returns id param - URL parameter
routes.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    console.log(userId);
    res.json({
        "userId": + userId
    })
})

//Use user routes
routes.use('/users', usersRouter);

//Export routes to main 
export default routes;