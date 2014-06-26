"use strict"

$(document).ready(function() {

    $.getJSON( "http://worldcup.sfg.io/matches/today", function( data ) {
    	var source   = $("#entry-template").html();
    	var template = Handlebars.compile(source);
        var content = {'match': data};
        var html = template(content);
        console.log(html);
    	$('body').append(html);
    });
    

});
