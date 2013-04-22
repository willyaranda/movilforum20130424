// Reveal utils
(function(){

	document.addEventListener("DOMContentLoaded", function() {
		//Shared config
		var reveal = document.querySelector(".reveal");
		var slides = reveal.querySelectorAll(".slides > section");


		//HTML5 Full Screen
		var frame = document.body;
		var fsEnabler = document.createElement("button");
		fsEnabler.className = "enable-fullscreen"

		reveal.appendChild(fsEnabler);

		fsEnabler.addEventListener("click", function() {
			frame.mozRequestFullScreen();
		});


		//Slide index
		var pager = document.createElement("p");
		pager.className = "pager";
		pager.innerHTML = "1/"+slides.length;
		reveal.appendChild(pager);

		Reveal.addEventListener( 'slidechanged', function (event) {
			  // event.previousSlide, event.currentSlide, event.indexh, event.indexv
			 var position = event.indexh +1;
			 var total = slides.length;
			 pager.innerHTML = position+"/"+total;

		} );
	});

})();
