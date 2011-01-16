$.fn.resultTable = function(settings) {
    var default_settings = {
	results: ['+', '-', '='],
	results_classes: ['won', 'lost', 'jigo'],
	current_class: 'current',
	game_class: 'game'
    };

    var s = $.extend(default_settings, settings);

    // in case of more tables then 1
    $(this).each(function() {
	var table = $(this);

	// preparing table
	table.find("tr").each(function() {
	    var tr = $(this);
	    var player = parseInt(tr.find("td:first").text());
	    
	    if (!isNaN(player)) {

		tr.addClass("player" + player);
		$.each(s.results, function(index, result) {
		    tr.find("td:contains("+result+")").each(function() {
			var played = parseInt($(this).text());
			    tr.addClass("played-" + played + "-" + s.results_classes[index]);
			    $(this).addClass("game-" + player + "-" + played);
		    });
		})

	    }
	})

	table.find("tr").hover(function() {
	    var tr = $(this).addClass(s.current_class);
	    $.each(tr.attr("class").split(" "), function(index, value) {
	       if (value.match(/played/)) {
		   var info = value.split("-");
		   table.find("tr.player" + info[1]).addClass(info[2]);
	       } 
	    });
	}, function() {
	    table.find("tr").removeClass("current " + s.results_classes.join(" ") );
	})
	
	table.find("td[class*=game]").hover(function() {
	    $.each($(this).attr("class").split(" "), function(index, value) {
	       if (value.match(/game/)) {
		   var game = value.split("-");
		   table.find("td.game-" + game[2] + "-" + game[1]).addClass(s.game_class);
	       } 
	    });
	}, function() {
	    table.find("td[class*=game]").removeClass(s.game_class);
	})
	
	
    })

}