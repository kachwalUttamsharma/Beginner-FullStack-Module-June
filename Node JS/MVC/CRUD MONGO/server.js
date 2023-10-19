const express = require('express');
const app = express();
const port = 8080
const mongoose = require('mongoose'); 
const url = 'mongodb+srv://kachwalsharma1:3HkdS9ZdjB4hg6ia@cluster0.4xdma5b.mongodb.net/my_database?retryWrites=true&w=majority'

mongoose.connect(url, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(() => {
    console.log("connection is Successfull");
}).catch((err) => {
    console.log(err);
})


app.use(express.json());

const routes = require('./routes/courseRoutes');
app.use('/api', routes)

app.listen(port, () => {
    console.log(`server started on port ${port}`);
})