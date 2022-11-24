let connection;
const { keyMapping } = require("./constants");

const handleUserInput = function(key) {
  // stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  connection.write(keyMapping[key]);
  // });
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on("data", handleUserInput);
  
  return stdin;
};

module.exports = {
  setupInput
};
