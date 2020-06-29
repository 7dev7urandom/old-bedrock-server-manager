const fs = require('fs');
const http = require('http');

const PORT = 3000;

const page = fs.readFileSync(__dirname + '/index.html', 'utf-8');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(page));
    res.end(page);
});

const io = require('socket.io')(server);

io.on('connect', socket => {
    console.log("Connection");
});

server.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});


