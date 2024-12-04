//Import data
import data from '../data.json' assert { type: 'json'};
//Proof of Life
console.log(data);

//Use an in-memory array for users
//Data from JSON file
const users = [...data]; 
console.log("users:", users)

import express from 'express'
const router = express.Router();

router.get('/hello', (req, res) => {
    res.send("Hello Users!")
})

router.get('/', (req, res) => {
    res.json({"List of all users":  users});
})

router.get('/:id', (req, res) => {
    const userId = Number(req.params.id);
    console.log(userId);
    const user = users.find((u) => u.id === userId);
    if(user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
    
})

//POST route to add new user
router.post('/', (req, res) => {
    const newUser = req.body;
    //Add new user to the users array
    users.push(newUser)
    res.status(201).json(newUser)

})

//Export the routes
export default router;

