const jwt = require('jsonwebtoken');

const validatingAuthToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.SecretKey);
        req.body.userId = decoded.userId;
        next();
    } catch(error) {
        res.status(401).send({success: false, message: "Invalid Token"})
    }
}

module.exports = {
    validatingAuthToken
}