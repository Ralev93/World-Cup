"use strict"

$(document).ready(function(){
	$.getJSON("http://worldcup.sfg.io/teams/", function (teams) {
		$.getJSON("http://worldcup.sfg.io/teams/results", function (team_results){
			
			var source   = $("#entry-template").html();
			var template = Handlebars.compile(source);

			var context = {'team':teams};
			var html = template(context);


			var context_1 = {'team_results':team_results};
			var html_1 = template(context_1);

			$("#dropdown-li").append(html);
			$("#country_tables").append(html_1);

		});
	});

	$(document).on("click", ".country", function() {
		console.log($(this).data("country"))
	});
});