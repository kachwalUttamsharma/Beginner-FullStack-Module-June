const userModel = require("../models/userModel")
const bcrypt = require('bcrypt')

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

module.exports = {
    registerUser
}