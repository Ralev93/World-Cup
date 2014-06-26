"use strict"

$(document).ready(function() {

	var matches = [];

	var source   = $("#entry-template").html();
	var template = Handlebars.compile(source);


	$.getJSON( "http://worldcup.sfg.io/matches/today", function( data ) {
	  var items = [];
	  $.each( data, function( key, val ) {
	    items.push(val);
	  });
	 // console.log(items);
	 matches = items;
	});
	/*
	var data = {
	    users: [ {
	        person: {
	            firstName: "Garry",
	            lastName: "Finch"
	        },
	        jobTitle: "Front End Technical Lead",
	        twitter: "gazraa"
	    }, {
	        person: {
	            firstName: "Garry",
	            lastName: "Finch"
	        },
	        jobTitle: "Photographer",
	        twitter: "photobasics"
	    }, {
	        person: {
	            firstName: "Garry",
	            lastName: "Finch"
	        },
	        jobTitle: "LEGO Geek",
	        twitter: "minifigures"
	    } ]
	};

	Handlebars.registerHelper('fullName', function(person) {
	  return person.firstName + " " + person.lastName;
	});

	*/
	console.log(matches);
	$('#wtf').append(template(matches));
});
