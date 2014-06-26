"use strict"

$(document).ready(function() {

	$.getJSON( "http://worldcup.sfg.io/matches/today", function( data ) {

		var source   = $("#entry-template").html();
		var template = Handlebars.compile(source);

		var context = {'match': data, num: "0"};
		var html    = template(context);

		console.log(html);
		$('body').append(html);

	});

});



