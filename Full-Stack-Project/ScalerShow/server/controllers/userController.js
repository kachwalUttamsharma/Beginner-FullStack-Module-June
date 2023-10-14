const userModel = require("../models/userModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    try {
        const userExists = await userModel.findOne({email: req.body.email});
        if(userExists) {
            return res.send({
                success: false,
                message: 'User Already Exisits'
            })
        }
        // hasing the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword

        const user = new userModel(req.body);
        const response = await user.save();
        console.log(response);
        res.send({"success": true, "message": "Registration Successfull, Please login"})
    } catch(error) {
        console.log(error);
        res.send({"success": false, "message": error.message})
    }
}

const LoginUser = async (req,res) => {
    const user = await userModel.findOne({email: req.body.email});
    if(!user) {
        return res.send({
            success: false,
            message: 'User does not exist'
        })
    }
    const validatePassword = await bcrypt.compare(req.body.password, user.password);

    if(!validatePassword) {
        return res.send({
            success: false,
            message: 'Incorrect Password'
        })
    }
    const token = jwt.sign({userId: user._id}, process.env.SecretKey ,{expiresIn: '1d'})
    res.send({
        success: true,
        message: 'User Logged In',
        data: token
    })
}

const getCurrentUserInfo = async (req, res) => {
    try {
        const user = await userModel.findById(req.body.userId).select('-password')
        res.send({
            success : true,
            message : 'User details fetched Successfully',
            data : user
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
          });
    }
}

module.exports = {
    registerUser,
    LoginUser,
    getCurrentUserInfo
}