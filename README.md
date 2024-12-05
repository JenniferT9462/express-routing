# express-routing

Build an Express server with organized routing, route parameters, and nested routes.

## Setup

1. Create a directory `express-routing`:

        mkdir express-routing

2. Make sure to `cd` into the new directory:

        cd express-routing

3. Initialize a `Node.js` project:

        npm init -y

4. Install express:

        install express

5. Open new project in VSCode:

        code .

6. Create a file to store the mock data `data.json`.

## Server Implementation

* Create a file named `index.js`.
* In the index.js file import express:

        import express from "express";

* To create a instance of express:

        const app = express();

* Create a basic route at the root `/` path that returns `Hello`, to make sure that the server is working. 

        //Basic route at root URL
        app.get('/', (req, res) => {
            res.send("Hello World!")
        })

* To start the server you need to add this to the server.js file at the bottom:

        //Start the server
        app.listen(3000, () => {
            console.log("Example app listening on port 3000")
        })

## URL Route Parameters

Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the `req.params` object, with the name of the route parameter specified in the path as their respective keys.

* URL Parameters:

    - Example route to handle URL parameters for `/user/:id`:

            //Route with URL parameters
            app.get('/user/:id', (req, res) => {
                const userId = req.params.id;
                console.log(userId);
                res.json({
                    "UserId": + userId
                })
            })


## Nested Routes

In Express, nested routes refer to organizing and structuring your routes in a way that logically groups related endpoints together, often within a parent route. This is especially helpful in large applications to maintain clean, modular, and reusable code.

* Create a directory in your project called `routes`.
    - inside `routes` create a file called `users.js`.
        * Import the data from `data.json`:

                import data from './data.json' assert { type: 'json' };
        
        * Import Router from `express`:

                import { Router } from 'express'

        * Define a express router

                //Define express router
                const userRouter = express.Router();

        * Set up the `users.js` router to handle:

            - A hello world at `/users/hello`:

                    userRouter.get('/hello', (req, res) => {
                        res.send("Hello Users!")
                    })

            - You will have to `export default userRouter` at the bottom of the user.js file. 
            - Then in the main `index.js` import the routes from the `user.js` file:

                    //Import users routes
                    import usersRouter from './routes/users.js';

        * Modify main `index.js` to use the `users.js` router for routes starting with `/users`: 

                //Use user routes
                routes.use('/users', usersRouter);

## Testing

* Use Postman for testing routes:
* Test the following routes:

    - http://localhost:3000/ - Should display "Hello from the main router!".
    ![root postman](<img/rootPostman.png>)
    - http://localhost:3000/about - Should display "About Us".
    ![about postman](<img/aboutPostman.png>)
    - http://localhost:3000/user/123 - Should display "User ID: 123".
    ![userId postman](<img/userIdPostman.png>)
    - http://localhost:3000/users - Should display "List of all users".
    ![users postman](<img/usersPostman.png>)
    - http://localhost:3000/users/4 - Should display JSON data for the user with the id of 4.
    ![usersId postman](<img/usersIdPostman.png>)
    - http://localhost:3000/users/hello - Should display "Hellos users".
    ![usersHello postman](<img/usersHelloPostman.png>)


## Express Router