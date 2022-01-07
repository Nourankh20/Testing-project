const express = require("express");
const app = express();
const { mongoClient } = require('./db.js');

const bodyParser = require("body-parser");
const { getInternships } = require("./scrap");
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(3000, async (req, res) => {
  console.log(`Server listening on Port ${3000}`);

  app.get("/internships", async (req, res) => {
    getInternships(req.query.char).then((internships) => {
      return res.status(200).json(internships);
    });
  }
  

  
  );
//   ,
  
//   app.get("/internships", async (req, res) => {
//     getInternships(req.query.char).then((internships) => {
//       return res.status(200).json(internships);
//     });
//   }
app.get("/scrap", async (req, res) => {
    const data = await getInternships();
    if (data && data.length) {
      const db = await mongoClient('glassdoor');
      if (!db) {
        return res.status(500).json({ message: 'Unable to establish database connection' });
      }
      await db.insertMany(data).catch((err) => {
        console.error(err);
      });
    }
    res.json(data);
  })
});