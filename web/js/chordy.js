var Chordy = Chordy || {
	count: 4,
	counter: null,
	prev: null,

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
	rand: function(total) {
		return Math.floor(Math.random() * total);
	},
	selectchord: function(total) {
		i = Chordy.rand(total);
		
		if (i == Chordy.prev) {
			Chordy.selectchord(total);
		}

		Chordy.prev = i;
		return i;
	},
	play: function () {
		var chord = $('#chord');
		var chords = $.parseJSON($('.chords').text());
		var item = chords[ Chordy.selectchord(chords.length) ];

		chord.attr('src', item);
	},
	loop: function () {
		var interval = $('.interval').text() * 1000;
		Chordy.counter = setInterval('Chordy.play()', interval);
	}


}