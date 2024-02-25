const mongoose = require("mongoose");
const { array } = require("zod");
require("dotenv").config()

const dbLink = process.env.dbLink;

mongoose.connect(dbLink + "ShowCase");

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
});
const urlSchema = mongoose.Schema({
    genre: String,
    url: String
});
const Users = mongoose.model("Users", userSchema);
const Urls = mongoose.model("Imgurl", urlSchema);

module.exports = {
    Users,
    Urls
}