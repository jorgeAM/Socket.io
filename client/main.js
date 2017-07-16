$(function () {
    var socket = io('http://192.168.1.8:3030');
    $('form').submit(function(){
      socket.emit('chat message', $('#m').val());
      $('#m').val('');
      return false;
    });
    //mostramos lo que escribimos en el panel
    socket.on('chat message', function(msg){
    	$('#messages').append($('<li>').text(msg));
    	window.scrollTo(0, document.body.scrollHeight);
    });
  });