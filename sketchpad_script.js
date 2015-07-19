var pixels = 16;
var fillGrid = function() {
	pixels = prompt("Enter the number of pixels you'd like to use.");
	while(isNaN(pixels)) {
		pixels = prompt("Please enter a valid number.");
	};
	$('table').empty();
	for(i=0;i<=pixels;i++) {
		$('table').append("<tr></tr>");
	};
	for(i=0;i<=pixels*(85/55);i++) {
		$("tr").append("<td></td>");
	};
};

var randomColor = function () {
	return '#'+Math.floor(Math.random()*16777215).toString(16);
};


$(document).ready(function() {

	$('.options').mouseover(function(){
		$(this).css("border-color", "blue");
	});
	$('.options').mouseout(function(){
		$(this).css("border-color", "black");
	});

	$('#simple').click(fillGrid);
	$('#simple').click(function() {
		$('td').hover(function() {
			$(this).css("background-color", "white");
		});
	});

	$("#rainbow").click(fillGrid);
	$("#rainbow").click(function() {
		$("td").hover(function() {
			$(this).css("background-color", randomColor);
		});
	}); 

	$('#fade').click(fillGrid);
	$('#fade').click(function() {
		$("td").hover(function() {
			$(this).css("opacity", "-=0.10");
		});
	});

});

