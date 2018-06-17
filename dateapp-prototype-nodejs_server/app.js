const app = require('./app/index');
const http = require('http');

//Initialize Server
// Express function to run the server express shortcut to http listen
// app.listen(port, () => console.log('Server is running on port:' + port));

app.server = http.createServer(app);
app.server.listen(CONFIG.port, () => console.log('Server is running on port:' + CONFIG.port));