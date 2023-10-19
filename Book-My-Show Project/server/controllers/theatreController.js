
const Theatre = require('../models/theatreModal');

const AddTheatre = async (req, res) => {
    try {
        const newTheatre = new Theatre(req.body);
        await newTheatre.save();
        res.send({
            success: true,
            message: "Theatre Added Succesfully"
        })
    } catch(err) {
        res.send({
            success: false,
            message: err.message
        })
    }
}

const getAllTheatrByOwnerId = async (req,res) => {
    try {
       const theatres = await Theatre.find({owner: req.body.owner});
       res.send({
        success: true,
        message: "Theatre fetched Succesfully",
        data: theatres
    })
    } catch(err) {
        res.send({
            success: false,
            message: err.message
        })
    }
}
module.exports = {
    AddTheatre,
    getAllTheatrByOwnerId
}