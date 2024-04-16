require('dotenv').config();
const express = require("express");
const connectDb = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');
const adminValidate = require('./middlewares/admin-middleware');
const auth_router = require('./routes/auth-router');
const contact_router = require('./routes/contact-router')
const service_router = require('./routes/service-router');
const admin_router= require('./routes/admin-router');

const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 3000
app.use(express.json());

app.use("/api/auth",auth_router)
app.use("/api/form",contact_router)
app.use('/api/service',service_router)
app.use('/api/admin',adminValidate,admin_router);

app.use(errorMiddleware);

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running at Port : ${PORT}`)
    })
})