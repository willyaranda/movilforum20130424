//Receive event
socket.on('next', function (data) {
   Reveal.next();
});

socket.on('prev', function (data) {
   Reveal.prev();
});

Reveal.addEventListener( 'slidechanged', function (event) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv

   var position = event.indexh;
   socket.emit("position", position);

} );








