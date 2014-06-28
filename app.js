"use strict"

$(document).ready(function() {

	$.getJSON( "http://worldcup.sfg.io/matches/today", function( data ) {

		var source   = $("#entry-template").html();
		var template = Handlebars.compile(source);

		var context = {'match': data};
		var html    = template(context);

		$('#results').append(html);
		$(".country_flag").popover();

	});
});
