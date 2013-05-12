//@codekit-prepend "chordy.js";

$(document).ready(function(){
	if($('#play').length) {
		Chordy.playinit();
	}

	if($('#select').length) {
		$('#chord-selector').submit(function(){
			if($("input[name='chords[]']:checked").length < 2) {
				alert('Give yourself a challenge, pick more chords!');
				return false;
			}
			
		});
	}
});