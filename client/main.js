$(function () {
    var socket = io('http://192.168.1.8:3030');
    $('form').submit(function(){
      socket.emit('chat message', $('#m').val());
      $('#m').val('');
      return false;
    });
  });