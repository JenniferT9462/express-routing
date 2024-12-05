//Import express
import express from "express";

//Define express app
const app = express();

//Import routes from main routers
import routes from "./routes/index.js";

// Middleware for JSON parsing
app.use(express.json());

// //Basic route at root URL
// app.get('/', (req, res) => {
//     res.send("Hello World!")
// })

//Use routes from main routes
//??? Do you only have to include the root handler for all other
//routes from main routes??? 
app.use(routes)
// app.use('/about', router)

//Start the server
app.listen(3000, () => {
    console.log("Express app listening on port 3000")
})