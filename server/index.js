const express = require("express");
// const mysql = require("mysql");
const cors = require("cors");

const app = express();
const bodyParser = require("body-parser");
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));

const authRoute = require("./route/auth");
const userRoute = require("./route/user");

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/auth", authRoute);
app.use("/user", userRoute);

app.listen(3001, (req, res) => {
  console.log("server running on port 3001");
});
