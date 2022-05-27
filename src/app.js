const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'UserData/UserData.html'));
})

app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, 'Admin/Admin.html'));
})