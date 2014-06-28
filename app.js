"use strict"

$(document).ready(function() {
	$.getJSON( "http://worldcup.sfg.io/matches/today", function (matches) {
		$.getJSON( "http://worldcup.sfg.io/teams/results", function (teams) {

			var source   = $("#entry-template").html();
			var template = Handlebars.compile(source);

			var context = {'match': matches, 'teams': teams};
			var html    = template(context);

			var countries = [];

			matches.forEach(function (match) {
				countries.push(match["home_team"]["country"]);
				countries.push(match["away_team"]["country"]);
			});


			teams.forEach(function (team) {
				var teamToAdd_index = $.inArray(team["country"], countries); // brazil
				if ( teamToAdd_index !== -1) {

					matches.forEach(function (match) {
						if (match["home_team"]["country"] === team["country"]) {
							match["home_team"]["info"] = team;
						}
						else if (match["away_team"]["country"] === team["country"]) {
							match["away_team"]["info"] = team;
						}
					});
				}
			});

		$('#results').append(html);
		$(".country_flag").popover();


		});
	});

});
