const {z} = require('zod')
const contactSchema = z.object({
    username: z.
    string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be at least 3 characters"})
    .max(255,{message:"Name must not be more than 255 characters"}),

    email:z.
    string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid Email"}),

    message:z.
    string({required_error:"message is require"})
    .trim()
    .min(3,{message:"message cannot be empty"})
    .max(400,{message:"message is not more than 400 characters"})
})

module.exports = contactSchema