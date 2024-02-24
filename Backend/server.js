const express = require("express");
require('dotenv').config();
const { Users } = require("./db.js");
const signupValidator = require("./middlewares/signupValidator.js");
const bcrypt = require('bcrypt');
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");


const PORT = process.env.PORT;
const saltRounds = 10;

const app = express();

app.use(cookieParser());
app.use(express.json());

app.post("/sign-up", signupValidator, async (req, res) => {
    const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
    await Users.create({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    });
    res.cookie("jwtData", jwt.sign({
        name: req.body.name,
        email: req.body.email
    }, process.env.jwtPass));
    res.json({
        msg: "User Created"
    });
});

app.get("/log-in", (req, res) => {
    const { cookies } = req;
    try {
        let decoded = jwt.verify(cookies.jwtData, process.env.jwtPass);
        console.log(cookies);
        console.log(decoded);
        res.json();
    } catch (err) {
        // err
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port:${PORT}`);
})