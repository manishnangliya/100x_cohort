const express = require("express");
const contactForm = require("./controllers/contact-controller");
const validate = require("../middlewares/validate-middleware");
const contactSchema = require("../validators/contact-validator");
const router = express.Router();

router.post('/contact',validate(contactSchema) ,contactForm);

module.exports = router