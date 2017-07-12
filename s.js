// const { get } = require("request");
// const X = require("./dist/lib/Index.js");
const axios = require("axios");
const { connect } = require("./dist/Index");

connect("http://192.168.99.100:9001", {}).then(r => {
    console.log(r);
});
// get(`http://192.168.99.100:9001/wp-json/wp/v2`, {}, (c, r) => {
//     console.log("piiiiiiiiiiiiiiiiiiiiiiiii");
//     console.log(c);
//     console.log(r);
//     process.exit();
// });

// axios("http://192.168.99.100:9001/wp-json/wp/v2", { method: "GET" }).then(r => console.log(r));
