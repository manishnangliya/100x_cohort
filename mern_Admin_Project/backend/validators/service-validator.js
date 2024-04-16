const {z} = require('zod')

const serviceValidationSchema = z.object({
    service: z
    .string({required_error:"service is required"})
    .trim()
    .min(3,{message:"service must be at least 3 character"})
    .max(50,{message:"serice must be at most 50 character"}),

    price: z
    .string({required_error:" Price is required"})
    .trim()
    .min(1,{message:"please provide price of service"}),

    provider: z
    .string({required_error:"Provider details is required"})
    .trim()
    .min(3,{message:"provider must be at least 3 character"})
    .max(50,{message:"provider must be at most 50 character"}),

    description: z
    .string({required_error:"Service description is required"})
    .trim()
    .min(3,{message:"description must be at least 3 character"})
    .max(100,{message:"description must be at most 50 character"}),
}) 

module.exports = serviceValidationSchema;