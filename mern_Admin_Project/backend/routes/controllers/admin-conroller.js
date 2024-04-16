const Contact = require("../../models/contact-model");
const Service = require("../../models/service-model");
const { User } = require("../../models/user-model");

async function getAllUser(req, res) {
    try {
        const users = await User.find({}, { password: false });
        res.status(200).json({
            users: users
        })
    } catch (error) {
        console.log("getUser admin ", error.message);
    }
}
async function deleteUser(req,res){
    try {
        const id = req.headers.id;
        const response = await User.deleteOne({ _id: id })
        if (response.deletedCount) {
            res.status(200).json({
                message:"User deleted"
            })
        }
        else{
            res.status(400).json({
                message: "User not found"
            })
        }

    } catch (error) {
        console.log("deleting admin-user ", error.message);
    }
}
async function getAllMessage(req, res) {
    try {
        const msg = await Contact.find();
        res.status(200).json({
            message: msg
        })
    } catch (error) {
        console.log("getMessage-admin ", error.message);
    }
}

async function createService(req, res) {
    try {
        const { service, description, price, provider } = req.body;
        const response = await Service.create({ service, description, price, provider });
        res.status(201).json({
            message: "New Service created"
        })
    } catch (error) {
        console.log("creating service error ", error.message)
    }
}
async function deleteService(req, res) {
    try {
        const id = req.headers.id;
        const response = await Service.deleteOne({ _id: id })
        console.log(response);
        if (response.deletedCount) {
            res.status(200).json({
                message:"Service Deleted Successfully"
            })
        }
        else{
            res.status(400).json({
                message: "Service not found"
            })
        }
    } catch (error) {
        console.log("Deleting service ", error.message);
    }
}
module.exports = { getAllUser, getAllMessage, createService, deleteService, deleteUser };