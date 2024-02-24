const z = require("zod");
const { signupSchema } = require("../schema.js")

function signupValidator(req, res, next) {
    const payload = req.body;
    // console.log(payload);
    const parsePayload = signupSchema.safeParse(payload);
    // console.log(parsePayload);
    if (!parsePayload.success) {
        return res.status(400).json({ msg: "Invalid Input" });
    }

    next();
}

module.exports = signupValidator;