const express = require('express');
require('dotenv').config()
const app = express();
const cors = require('cors')
const userRouter = require("./routes/userRouter");
const movieRoute = require('./routes/movieRoute');
const dbConfig = require("./Config/dbConfig");

app.use(cors())
app.use(express.json());
app.use('/api/users', userRouter)
app.use('/api/movies', movieRoute)

app.listen(process.env.PORT, () => {
    console.log(`server is listening to port no ${process.env.PORT}`)
})