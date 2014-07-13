"use strict"

$(document).ready(function() {
	$.getJSON("http://worldcup.sfg.io/teams/", function (teams) {
		$.getJSON("http://worldcup.sfg.io/teams/results", function (team_results){

			var source = $("#entry-template").html(),
			  template = Handlebars.compile(source),

			  context  = {'team':teams},//, 'team_results': team_results},
				html     = template(context);
/*
				var context_1 = {'team_results': team_results};
				var html_1    = template(context_1);
*/
			$("#dropdown-li").append(html);
		//$("#country_tables").append(html);

			$(document).on("click", ".country", function() {
				var choosenCountry = $(this).data("country"),
					theCountry = function () {
						return team_results.filter(function (team) {
								return team["country"] === choosenCountry; //
						})[0];
					};

				var source = $("#team-template").html(),
				  template = Handlebars.compile(source),
				  context  = {'c': theCountry()},
					html     = template(context);

				$("#teams-table-body").append(html);
			});
		});
	});
});
