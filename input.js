let connection;

const handleUserInput = function(key) {
  // stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === 'z') {
    connection.write("Say: yoyoyo");
  }
  if (key === 'x') {
    connection.write("Say: i like big snakes");
  }
  if (key === 'c') {
    connection.write("Say: and i cannot lie");
  }
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
