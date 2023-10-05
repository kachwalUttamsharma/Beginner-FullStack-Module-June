const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/getUserInfo', (req, res) => {
    const userInfo = {
        userName: 'uttam sharma',
        contact: '9xxxx'
    }
    res.send(userInfo)
})

app.get('/homePage', (req, res) => {
    res.send('<h1>Hello World !</h1>')
})

app.post('/createNewUser', (req, res) => {
    res.send({message: 'user has been created'})
})

app.put('/updateUserInfo', (req, res) => {
    res.send({message: 'user info has been updated'})
})

app.delete('/deleteUser', (req, res) => {
    res.send({message: 'user has been deleted'});
})

app.listen(port, () => {
    console.log('server is listening to port no : ' + port);
})

