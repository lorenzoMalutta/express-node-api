// start server

const http = require('http');

http.createServer((req, res) => {

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    message: 'Hello World express!'
  }));

})  .listen(3000, () => {
  console.log('Server is running on port 3000');
});

// end server
