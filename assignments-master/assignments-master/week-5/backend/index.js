const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
const useRouter = require("./routes/user");

app.use("/cards",useRouter);

const port = 3000;
app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`);
})

app.use(function(err,req,res,next){
    console.log(err);
})