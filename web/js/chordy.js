var Chordy = Chordy || {
	count: 4,
	counter: null,
	prev: 0,

	playinit : function () {
		Chordy.countdowntrigger();
	},
	countdowntrigger: function () {
		Chordy.counter = setInterval('Chordy.countdown()', 1000);
	},
	countdown: function () {
		Chordy.count = Chordy.count -1;
		if (Chordy.count <= 0) {
			clearInterval(Chordy.counter);
			$('#timer').hide();

			Chordy.loop();
			return;
		}

		$('#timer').text(Chordy.count);
	},
	play: function () {
		var chord = $('#chord');
		var chords = $.parseJSON($('.chords').text());
		var item = chords[ Math.floor(Math.random() * chords.length) ];

		chord.attr('src', item);
	},
	loop: function () {
		var interval = parseInt($('.interval').text(), 10) * 1000;
		Chordy.counter = setInterval('Chordy.play()', interval);
	}
}