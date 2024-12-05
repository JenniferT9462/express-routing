import express from 'express'
const userRouter = express.Router();

//Import data
import data from '../data.json' assert { type: 'json'};
//Proof of Life
console.log(data);

//Use an in-memory array for users
//Data from JSON file
const users = [...data]; 
console.log("users:", users)



userRouter.get('/hello', (req, res) => {
    res.send("Hello Users!")
})

userRouter.get('/', (req, res) => {
    res.json({"List of all users":  users});
})
//Get user by id
userRouter.get('/:id', (req, res) => {
    const userId = Number(req.params.id);
    console.log(userId);
    //Find user by id in users array
    const user = users.find((u) => u.id === userId);
    if(user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
    
})

//POST route to add new user
userRouter.post('/', (req, res) => {
    const newUser = req.body;
    //Add new user to the users array
    users.push(newUser)
    res.status(201).json(newUser)

})

//Export the routes
export default userRouter;

