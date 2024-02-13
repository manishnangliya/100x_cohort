// create HTTP server
// You need to create 4 routes (4 things that the hospital can do)
// 1. GET - User can check how many kidneys they have and their health
// 2. POST - User can add a new kidney ( can be healthy or unhealthy)
// 3. PUT - User can replace a kidney, make it healthy
// 4. DELETE - User can remove a kidney

const express = require("express");
const app = express();
app.use(express.json());
const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", function (req, res) {
  const JohnKidneys = users[0].kidneys;
  const totalKidneys = JohnKidneys.length;
  let healthKidneys = 0;
  for (let i = 0; i < totalKidneys; i++) {
    if (JohnKidneys[i].healthy) {
      healthKidneys++;
    }
  }
  const unhealtyKidney = totalKidneys - healthKidneys;
  res.json({
    totalKidneys,
    healthKidneys,
    unhealtyKidney,
  });
});
app.post("/", function (req, res) {
  const kidneyStatus = req.body.isHealthy;
  users[0].kidneys.push({ healthy: kidneyStatus });
  res.json({
    msg: `added a kidney which is ${kidneyStatus ? "healthy" : "unhealthy"}`,
  });
});

// convert all bad kidney to good kidney
app.put("/", function (req, res) {
  let isBadKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      isBadKidney = true;
    }
  }
  if (isBadKidney) {
    const JohnKidneys = users[0].kidneys;
    for (let i = 0; i < JohnKidneys.length; i++) {
      if (JohnKidneys[i].healthy == false) {
        JohnKidneys[i].healthy = true;
      }
    }
    res.json({
      msg: "unhealthy kidneys converted into healthy",
    });
  } else {
    res.json({
      msg: "No bad kidney",
    });
  }
});

//remove all bad kidneys
app.delete("/", function (req, res) {
  // do is atleast on bad kidney otherwise give msg no unhealthy kidney.
  let isBadKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      isBadKidney = true;
    }
  }
  if (isBadKidney) {
    const newKidney = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidney.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidney;
    res.json({
      msg: "unhealthy kidneys are removed",
    });
  } else {
    res.json({
      msg: "No bad kidney",
    });
  }
});
app.listen(3000);
