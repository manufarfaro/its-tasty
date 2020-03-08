import server from './server.js';
const defaultPort = 3000;

const usedPort = process.env.PORT || defaultPort;

console.log(`listening on ${usedPort}...`);
server.listen(usedPort);
