require('babel-core/register');

const server = require('./server/server.js').default;
const port = process.env.PORT || 8080;
server.listen(port, '0.0.0.0');
console.log(`Application listening on port ${port}`);
