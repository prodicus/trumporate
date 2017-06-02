(function() {
	
	function color_gen(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	function bg_gen() {
		document.body.style.background = "rgba("+color_gen(0,255)+","+color_gen(0,255)+","+color_gen(0,255)+",0.5)";	//standard
		
		document.body.style.transition = "all 2s ease";
  		document.body.style.MozTransition = "all 2s ease";
  		document.body.style.WebkitTransition = "all 2s ease";
	}
	
	setInterval(bg_gen, 3000);
	
})();