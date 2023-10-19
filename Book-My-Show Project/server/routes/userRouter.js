const express = require('express');
const router = express.Router();
const {registerUser, LoginUser, getCurrentUserInfo} = require('../controllers/userController');
const {validatingAuthToken} = require('../middleware/authMiddleware');

// /api/users/register
router.post('/register', registerUser)
.post('/login', LoginUser)
.get('/get-current-user', validatingAuthToken , getCurrentUserInfo)

module.exports = router


