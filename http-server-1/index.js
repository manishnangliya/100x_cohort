const express = require("express");
const zod = require("zod");
const bodyParse = require("body-parser");
const app = express();
app.use(express.json());

// app.use(countRequest); for all routes
let currCount = 0;
function countRequest(req, res, next) {
  currCount++;
  console.log(currCount);
  next();
}
app.get("/count-req", countRequest, function (req, res) {
  res.json({
    msg: "all good",
  });
});

app.get("/health-checkup", function (req, res) {
  const kidneyId = req.query.kidneyId; //http://localhost:3000/health-checkup?kidneyId=2
  const username = req.headers.username;
  const password = req.headers.password;
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({
      msg: "kidney Id wrong",
    });
    return;
  }

  if (username != "admin" || password != "pass") {
    res.status(400).json({
      msg: "username or password wrong",
    });
    return;
  }
  res.json({
    msg: "success",
  });
});

//validation check
// schema for array- array should be of number
const schema = zod.array(zod.number());
app.post("/kidney-len", function (req, res) {
  const kidneys = req.body.kidneyArr;       
  const output = schema.safeParse(kidneys);
  if(!output.success){
    res.status(411).json({
      msg:"Invalid Input"
    })
  }
  else{
    const kidneyLen = kidneys.length;
    res.send("You have " + kidneyLen + " kidneys");
  }
});

// to handle exception of any type
app.use(function (err, req, res, next) {
  res.json({
    msg: "something happened with server.. you might give invalid input",
  });
});

app.listen(3000);
