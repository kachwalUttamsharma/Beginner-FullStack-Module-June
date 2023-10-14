const express = require('express');
require('dotenv').config()
const app = express();
const cors = require('cors')
const userRouter = require("./routes/userRouter");
const dbConfig = require("./Config/dbConfig");

app.use(cors())
app.use(express.json());
app.use('/api/users', userRouter)

app.listen(process.env.PORT, () => {
    console.log(`server is listening to port no ${process.env.PORT}`)
})