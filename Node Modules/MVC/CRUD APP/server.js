const express = require('express');
const app = express();
const port = 8080
const productRouter = require('./routes/productRoute');

app.use(express.json());
app.use('/products', productRouter.router);


app.listen(port, () => {
    console.log(`server started on port ${port}`);
})