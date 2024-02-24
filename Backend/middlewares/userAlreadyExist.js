const { Users } = require("../db");

async function userAlreadyExist(req, res, next) {
    const payload = req.body;
    const namefound = await Users.find({
        name: payload.name
    });
    const emailfound = await Users.find({
        email: payload.email
    });
    if (namefound.length > 0) {
        return res.status(400).json({ msg: "Name elready Exist" });
    }
    else if (emailfound.length > 0) {
        return res.status(400).json({ msg: "email elready Exist" });
    }
    next();
}

module.exports = userAlreadyExist;