"use strict"

var data = [
	{
		"match_number": 45,
		"location": "Arena Pernambuco",
		"datetime": "2014-06-26T13:00:00.000-03:00",
		"status": "future",
		"home_team": {
		"country": "USA",
		"code": "USA",
		"goals": 0
		},
		"away_team": {
		"country": "Germany",
		"code": "GER",
		"goals": 0
		},
		"winner": null,
		"home_team_events": [],
		"away_team_events": []
	},
	{
		"match_number": 46,
		"location": "Estadio Nacional",
		"datetime": "2014-06-26T13:00:00.000-03:00",
		"status": "future",
		"home_team": {
		"country": "Portugal",
		"code": "POR",
		"goals": 0
		},
		"away_team": {
		"country": "Ghana",
		"code": "GHA",
		"goals": 0
		},
		"winner": null,
		"home_team_events": [],
		"away_team_events": []
	},
	{
		"match_number": 47,
		"location": "Arena de Sao Paulo",
		"datetime": "2014-06-26T17:00:00.000-03:00",
		"status": "future",
		"home_team": {
		"country": "Korea Republic",
		"code": "KOR",
		"goals": 0
		},
		"away_team": {
		"country": "Belgium",
		"code": "BEL",
		"goals": 0
		},
		"winner": null,
		"home_team_events": [],
		"away_team_events": []
	},
	{
		"match_number": 48,
		"location": "Arena da Baixada",
		"datetime": "2014-06-26T17:00:00.000-03:00",
		"status": "future",
		"home_team": {
		"country": "Algeria",
		"code": "ALG",
		"goals": 0
		},
		"away_team": {
		"country": "Russia",
		"code": "RUS",
		"goals": 0
		},
		"winner": null,
		"home_team_events": [],
		"away_team_events": []
	}
	];
$.getJSON( "http://worldcup.sfg.io/matches/today", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });

  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});


//console.log(data2);
