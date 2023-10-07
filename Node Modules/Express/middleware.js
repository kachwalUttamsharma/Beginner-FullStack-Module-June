const express = require('express');
const router = express.Router();
const errorHandler = require('./errorHandler');
const port = 3001;
const app = express();

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

// router level middleware
const getUsers = (req, res) => {
    res.json({ message: "Get all users" });
  };
const createUser = (req, res) => {
    console.log("This is the request body received from client : ", req.body);
    res.json({ message: "Create new user" });
};

// Application Level Middleware

const loggerMiddleware = (req, res, next) => {
    console.log(`${new Date()} --- Request [${req.method}] [${req.url}]`);
    next()
}
const auth = (req, res, next) => {
    console.log("query params : ", req.query)
    // const validUser = false;
    if(req.query.password === '123') {
        next();
    } else {
        res.status(401);
        throw new Error("user is not authorized")
    }
}

// calling middleware
// app level
app.use(loggerMiddleware);
app.use(auth);
// router level
app.use("/user", router)
router.route("/").get(getUsers).post(createUser); // /user/
// error handling middleware
app.use(errorHandler)

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/apiData', errorHandler, (req, res) => {
    res.send("List of API details!")
})


app.listen(port, () => {
    console.log('server is listening to port no : ' + port);
})


// middleware

// req -> Middlewares  <- res

// application level -> common for all routes and end point and http methods
// router level middleware -> executing for only specific routes defined
// error handling -. it is used for to handle all errors at one place

// static , built-in