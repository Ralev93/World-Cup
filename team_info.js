"use strict"

$(document).ready(function(){
	$.getJSON("http://worldcup.sfg.io/teams/", function (teams) {
		console.log(teams);
		var source   = $("#entry-template").html();
		var template = Handlebars.compile(source);

		var context = {'team':teams};
		var html = template(context);

		$("#dropdown-li").append(html);

	});

});