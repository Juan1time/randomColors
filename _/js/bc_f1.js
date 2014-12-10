//random RGB color
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
		};

	function colorMachine(){
		var R = getRandomInt(0, 255);
		var G = getRandomInt(0, 255);
		var B = getRandomInt(0, 255);
		var randomColor = (R + "," + G + "," + B + "," + 1);
		var newColor = "rgba(" + randomColor + ")";
		return newColor;
	};

	function timeMachine(){
		var T = getRandomInt(30, 60);
		var newT = (T+"00");
		console.log(newT);
		return newT;
	};

	var winH = window.innerHeight + "px";

var app = {

	/*colorMachine: function() {
		var R = getRandomInt(0, 255);
		var G = getRandomInt(0, 255);
		var B = getRandomInt(0, 255);
		var randomColor = (R + "," + G + "," + B + "," + 1);
		var newColor = "rgba(" + randomColor + ")";
		return newColor;
	},

	timeMachine:function(){
		var T = getRandomInt(30, 60);
		var newT = (T+"00");
		console.log(newT);
		return newT;
	}, */

	pageStyles: function(){
		$("div #1 h1").html(colorMachine);
			$("div #1").css({
			'background-color': colorMachine()
			//'height': winH
			});

		$("div #2 h1").html(colorMachine);
		$("div #2").css({
			'background-color': colorMachine()
			//'height': winH
			});

		$("div #3 h1").html(colorMachine);
		$("div #3").css({
			'background-color': colorMachine()
			//'height': winH
			});

		$("div #4 h1").html(colorMachine);
		$("div #4").css({
			'background-color': colorMachine()
			//'height': winH
			});
		$("div #5 h1").html(colorMachine);
		$("div #5").css({
			'background-color': colorMachine()
			//'height': winH
			});
	},

	init: function() {
		/*console.log("color 1: " + app.colorMachine());
		console.log("color 2: " + app.colorMachine());
		console.log("color 3: " + app.colorMachine());
		console.log("color 4: " + app.colorMachine());
		console.log("color 5: " + app.colorMachine());*/
		/*setInterval(app.pageStyles, app.timeMachine());*/
		setInterval(app.pageStyles, timeMachine());
		console.log("new ms: " + timeMachine());
	}

};

$(document).ready(function() {
	app.init();
});
