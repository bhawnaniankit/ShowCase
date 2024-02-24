const express = require("express");
require('dotenv').config();
const { Users } = require("./db.js");
const signupValidator = require("./middlewares/signupValidator.js");
const bcrypt = require('bcrypt');


const PORT = process.env.PORT;
const saltRounds = process.env.saltRounds;

const app = express();

app.use(express.json());

app.post("/sign-up", signupValidator, async (req, res) => {

    await Users.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    res.json({
        msg: "User Created"
    });
});

app.get("/log-in", (req, res) => {

});

app.listen(PORT, () => {
    console.log(`Listening on port:${PORT}`);
})