const express = require('express');
const fs = require('fs');
const app = express();
const port = 8080

const data = JSON.parse(fs.readFileSync('data.json').toString());
const products = data.products

app.use(express.json())
// https methods

app.get('/products', (req, res) => {
    res.send(products);
})

app.get('/productById/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productInfo = products.find((p) => p.id === id);
    res.send(productInfo)
})

app.post('/products/add', (req, res) => {
    products.push(req.body)
    res.status(201);
    res.send("Item has been added into Products")
})

app.put('/products/updateInfo/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // updating by replacing the object
    const productIndex = products.findIndex((p) => p.id === id);
    // splice -> it is used add and remove item from array at any respective index
    // it is used replace or update item at specified index
    products.splice(productIndex, 1, {id: id, ...req.body})
    res.status(201).json();
})

app.patch('/products/updateInfoByPatch/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex((p) => p.id === id);
    const product = products[productIndex];
    products.splice(productIndex, 1, {...product, ...req.body});
    res.status(201).json();
})

app.delete('/products/deleteById/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex((p) => p.id === id);
    products.splice(productIndex, 1);
    res.status(201);
    res.send("Item has be deleted")
})

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`)
})

