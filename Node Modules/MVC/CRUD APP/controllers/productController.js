
const fs = require('fs')
const data = JSON.parse(fs.readFileSync('data.json'))
const products = data.products

const getAllProducts = (req, res) => {
    res.send(products);
}

const getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    const productInfo = products.find((p) => p.id === id);
    res.send(productInfo)
}

const addProduct = (req, res) => {
    products.push(req.body)
    res.status(201);
    res.send("Item has been added into Products")
}

const updateByReplace = (req, res) => {
    const id = parseInt(req.params.id);
    // updating by replacing the object
    const productIndex = products.findIndex((p) => p.id === id);
    // splice -> it is used add and remove item from array at any respective index
    // it is used replace or update item at specified index
    products.splice(productIndex, 1, {id: id, ...req.body})
    res.status(201).json();
}

const partialUpdate = (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex((p) => p.id === id);
    const product = products[productIndex];
    products.splice(productIndex, 1, {...product, ...req.body});
    res.status(201).json();
}

const deleteProduct =  (req,res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex((p) => p.id === id);
    products.splice(productIndex, 1);
    res.status(201);
    res.send("Item has be deleted")
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateByReplace,
    partialUpdate,
    deleteProduct
}