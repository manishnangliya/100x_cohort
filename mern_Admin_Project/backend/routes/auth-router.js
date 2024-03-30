const express = require("express");
const { home, register, login, user } = require("./controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const {signupSchema,loginSchema} = require("../validators/auth-validator");
const authMiddleWare = require("../middlewares/auth-middleware");
const router = express.Router();





router.get("/",home);
router.post("/register",validate(signupSchema),register);
router.post("/login",validate(loginSchema),login);
router.get('/user',authMiddleWare,user)

module.exports = router