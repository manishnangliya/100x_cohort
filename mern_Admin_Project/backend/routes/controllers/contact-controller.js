const Contact = require("../../models/contact-model");

const contactForm = async(req,res)=>{
    try {
        const form = req.body;
        await Contact.create(form);
        res.status(200).json({
            message:"Thanks for sending Message"
        })
        
    } catch (error) {
        res.status(404).json({
            message:"error in sending message",
            msg:error.message
        })
        
    }
}

module.exports = contactForm;