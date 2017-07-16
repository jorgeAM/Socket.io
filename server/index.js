//llamamos al paquete expres
const express = require('express');
//creamos app de express
const app = express();
//llamamos al paquete http de nodejs y le pasamos express
var server = require('http').Server(app);
//llamamos al paquete de socket.io y le pasamos el servidor
var io = require('socket.io')(server);

//le decimos a express que esa sera la carpeta de file static
app.use(express.static('client'));

//creamos una ruta por default
app.get('/', function(req, res){
  res.send('<h1>Hola Mundo!</h1>');
});

//integramos socket.io
io.on('connection', function(socket){
  console.log('El usuario con IP '+ socket.handshake.address + 'esta conectado');
});

//corremos el servidor
server.listen(3030, function(){
  console.log('listening on *:3030');
});