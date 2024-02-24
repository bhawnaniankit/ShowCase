const bcrypt = require("bcrypt");

const text = "abcdef";
const saltRounds = 10;
let hashed = "";

async function xyz() {

    const hash = await bcrypt.hash(text, saltRounds);
    console.log(hash);

    bcrypt.compare("abcdef", hash).then((res) => {
        console.log(res);
    });
}
xyz();