// console.log('\nindex.js\n');

const server = require('./api/server.js');

// server.greet();

// console.log(server.secret);

// enable dynamic ports for heroku (or other hosting provider)
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`server on port: ${port}`));
