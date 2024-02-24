const mongoose = require("mongoose");
require("dotenv").config()

const dbLink = process.env.dbLink;

mongoose.connect(dbLink + "ShowCase");

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const Users = mongoose.model("Users", userSchema);

module.exports = {
    Users
}