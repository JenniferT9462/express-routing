import express from 'express'
//Define express router
const router = express.Router();

//Import users routes
import usersRouter from './users.js';


//Root URL route
router.get('/', (req,res) => {
    res.send("Hello from the main router!")
});

//About route
router.get('/about', (req, res) => {
    res.send("About Us")
});

//User route that returns id param - URL parameter
router.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    console.log(userId);
    res.json({
        "userId": + userId
    })
})

//Use user routes
router.use('/users', usersRouter);

//Export router to main 
export default router;