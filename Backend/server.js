const express = require("express");
require('dotenv').config();
const { Users, Urls } = require("./db.js");
const signupValidator = require("./middlewares/signupValidator.js");
const bcrypt = require('bcrypt');
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const userAlreadyExist = require("./middlewares/userAlreadyExist.js");
const cors = require("cors");

const PORT = process.env.PORT;
const saltRounds = 10;
const corsOptions = {
    origin: ['http://127.0.0.1:5173', 'http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers
    credentials: true, // Enable credentials (cookies, authorization headers, etc)
};

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));

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
    // res.redirect("https://localhost:5137/home");
    res.json({
        msg: "User Created"
    });
});

app.get("/log-in", async (req, res) => {
    const cookies = req.headers.cookie;
    try {
        let decoded = jwt.verify(cookies.substr(8), process.env.jwtPass);
        res.json({ msg: decoded });
        // app logic send next page 
        console.log("Logged in from cookie")
    } catch (err) {
        const payload = req.query;
        console.log(payload);
        let match = false;
        const user = await Users.find({
            name: payload.name
        });
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
            name: payload.name,
            email: payload.email
        }, process.env.jwtPass));
        // res.redirect("localhost:5173/home");

        res.json({ msg: "Log in Success" });
        // app logic send next page 
    }
});

app.post("/addUrl", (req, res) => {
    Urls.create({
        genre: req.body.genre,
        url: req.body.url
    });
    res.json({ msg: "Url Added" });
});
app.get("/imgUrls", async (req, res) => {
    const genre = req.query.genre;
    const data = await Urls.find({ genre: genre });
    let urlsToSend = [];
    for (let i = 1; i < req.query.number; i++) {
        urlsToSend.push(data[(Math.floor(Math.random() * data.length))]);
    }
    res.json({ urls: urlsToSend });
});
app.listen(PORT, () => {
    console.log(`Listening on port:${PORT}`);
})