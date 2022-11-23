const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
let aConnection = connect();

setupInput(aConnection);
