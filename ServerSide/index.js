const express = require("express");
const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//load config from env file
require("dotenv").config();
const port = process.env.PORT || 4000;


//middleware to parse json request body
app.use(express.json());

//import the routes
const DataRoutes = require("./src/routes/lmsRoutes");

// mount the todo API routes
app.use("/api/v1", DataRoutes);

//start server
app.listen(port, () => {
  console.log(`Server started at ${port}`);
});

// app.post("/fetchData",(req,res)=>{
//   const{username}  = req.body.data;
//   console.log(username)
//   res.json("data send successfully")
// })

const db_connect = require("./src/config/database");
db_connect();

//default route
app.get('/',(req,res)=>{
res.send("welcome to homepage")
})