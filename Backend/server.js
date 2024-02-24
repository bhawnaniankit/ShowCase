const express = require("express");
require('dotenv').config();
const { Users } = require("./db.js");
const signupValidator = require("./middlewares/signupValidator.js");
const bcrypt = require('bcrypt');
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const userAlreadyExist = require("./middlewares/userAlreadyExist.js");
const cors = require("cors");

const PORT = process.env.PORT;
const saltRounds = 10;

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.post("/sign-up", signupValidator, userAlreadyExist, async (req, res) => {
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

app.get("/log-in", async (req, res) => {
    const { cookies } = req;
    try {
        let decoded = jwt.verify(cookies.jwtData, process.env.jwtPass);
        res.json({ msg: decoded });
        // app logic send next page 
    } catch (err) {
        const payload = req.query;
        // console.log(payload);
        let match = false;
        const user = await Users.find({
            name: payload.name
        });
        // console.log(user);
        try {
            match = await bcrypt.compare(payload.password, user[0].password);
        }
        catch {
            return res.status(400).json({ msg: "User Does'nt exist " });
        }
        if (!match) {
            return res.status(401).json({ msg: "Bad Credentials" });
        }
        res.cookie("jwtData", jwt.sign({
            name: req.body.name,
            email: req.body.email
        }, process.env.jwtPass));
        res.json({ msg: "Log in Success" })
        // app logic send next page 
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port:${PORT}`);
})