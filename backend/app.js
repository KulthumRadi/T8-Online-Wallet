const express = require("express");
const path = require("path");
const app = express();
require("../src/db/conn");
const User = require('../src/models/User')
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'UserData/UserData.html'));
})

app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, 'Admin/Admin.html'));
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, 'Login/Login.html'));
})

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, 'Register/Register.html'));
})

app.post("/userdata", async (req, res) => {
    try {
        TransationAmount = req.body.TransationAmount
        TransationTitle = req.body.TransationTitle
        TransationSelect = req.body.TransationSelect
        res.send(TransationSelect)
    } catch (error) {
        res.status(400).send(error)
    }
})

app.post("/register", async (req, res) => {
    if (!req.body.Name || !req.body.EmailAddress || !req.body.PhoneNumber || !req.body.Password || !req.body.ConfirmPassword ) {
        return res.status(422).json({ error: "Please Filled The Field Properly!!!" })
    }

    try {
        const userExist = await User.findOne({ EmailAddress: req.body.EmailAddress });
        if (userExist) {
            // return req.status(422).json({ error: "Email ALready Exists!!!" })
            res.send("Email ALready Exists!!!")
        } else if (req.body.Password != req.body.ConfirmPassword) {
            // return req.status(422).json({ error: "Password doesn;t match with each other!!!" })
            res.send("Password doesn;t match with each other!!!!")
        } else {
            const user = new User(req.body);
            await user.save();
            // return req.status(201).json({ error: "User Registered Successfully!!!" })
            res.send("User Registered Successfully!!!")
        }
    } catch (error) {
        res.send("Data Nhi aaya")
    }
})


app.post("/login", async (req, res) => {
    try {
        LoginEmail = req.body.LoginEmail
        LoginPassword = req.body.LoginPassword
        res.send("Data AA gya")
    } catch (error) {
        res.status(400).send(error)
    }
})

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})

