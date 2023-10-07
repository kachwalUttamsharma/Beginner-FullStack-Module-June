const mongoose = require('mongoose'); 
const url = 'mongodb+srv://kachwalsharma1:3HkdS9ZdjB4hg6ia@cluster0.4xdma5b.mongodb.net/MYFRISTPROJECT?retryWrites=true&w=majority'

mongoose.connect(url, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(() => {
    console.log("connection is Successfull");
}).catch((err) => {
    console.log(err);
})

// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(url,  {
//     useNewUrlParser : true,
//     useUnifiedTopology : true,
// });
// client.connect();