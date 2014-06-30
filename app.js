"use strict"

var startTime = function (match) {
		return moment(match["datetime"]).tz('Bulgaria/Sofia').format('Ha z');//.toString()).format('H:mm');
	};

Handlebars.registerHelper('startTime', function (match) {
		return startTime(match);
	});

Handlebars.registerHelper('status', function (match, status) {
		return match["status"] === status; //completed, future, in progress
	});

Handlebars.registerHelper('percents', function (match) {
		var	startHour = 10*parseInt(startTime(match)[0]) + parseInt(startTime(match)[1]), //.hour() is not working
				crntHour = moment().hours(),
				crntHourFixed = (crntHour >= 0 && crntHour <=6) ? (24 + crntHour) : crntHour,
				// at 6 o'clock the list with new matches should be updated with the new matches (Brazil is -6 hours from Bg)
				crntMinute  = moment().minutes(),
				elapsedTime = (crntHourFixed - startHour)*60 + crntMinute;

		return elapsedTime/90*100;
});


$(document).ready(function() {
	$.getJSON( "http://worldcup.sfg.io/matches/today", function (matches) {
		$.getJSON( "http://worldcup.sfg.io/teams/results", function (teams) {

			var source   = $("#entry-template").html();
			var template = Handlebars.compile(source);

			var countries = [];
			var match_time;

			matches.forEach(function (match) {
				countries.push(match["home_team"]["country"]);
				countries.push(match["away_team"]["country"]);
			});

			teams.forEach(function (team) {
				var teamToAdd_index = $.inArray(team["country"], countries);

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

		var context = {'match': matches};
		var html    = template(context);

			

		$('#results').append(html);
		$(".country_flag").popover();
		});
	});

});
