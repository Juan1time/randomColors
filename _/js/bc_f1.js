//random RGB color
	function rInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
		};

	function rRGB(){
		var R = rInt(0, 255);
		var G = rInt(0, 255);
		var B = rInt(0, 255);
		var randomColor = (R + "," + G + "," + B + "," + 1);
		var newColor = "rgba(" + randomColor + ")";
		return newColor;
	};

	function rDelay(){
		var T = rInt(30, 60);
		var newT = (T+"00");
		console.log(newT);
		return newT;
	};

	var winH = window.innerHeight + "px";

var app = {

	rRGB: function() {
		var R = rInt(0, 255);
		var G = rInt(0, 255);
		var B = rInt(0, 255);
		var randomColor = (R + "," + G + "," + B + "," + 1);
		var newColor = "rgba(" + randomColor + ")";
		return newColor;
	},

	rDelay:function(){
		var T = rInt(30, 60);
		var newT = (T+"00");
		console.log(newT);
		return newT;
	},

	rGradient: function(element){
		$(element).css({
			'background': 'linear-gradient(to top,'+rRGB() + ',' + rRGB()
		})
	},

	keyAction: function(){
		$(window).keypress(function (e) {
		  if (e.keyCode === 0 || e.keyCode === 32) {
		    e.preventDefault()
		    console.log('Space pressed');
		    app.rGradient("body");
		  }
		})
	},

	pageStyles: function(){
		$("div #1 h1").html(rRGB);
			$("div #1").css({
			'background-color': rRGB()
			//'height': winH
			});

		$("div #2 h1").html(rRGB);
		$("div #2").css({
			'background-color': rRGB()
			//'height': winH
			});

		$("div #3 h1").html(rRGB);
		$("div #3").css({
			'background-color': rRGB()
			//'height': winH
			});

		$("div #4 h1").html(rRGB);
		$("div #4").css({
			'background-color': rRGB()
			//'height': winH
			});
		$("div #5 h1").html(rRGB);
		$("div #5").css({
			'background-color': rRGB()
			//'height': winH
			});
	},

	init: function() {
		/*console.log("color 1: " + app.rRGB());
		console.log("color 2: " + app.rRGB());
		console.log("color 3: " + app.rRGB());
		console.log("color 4: " + app.rRGB());
		console.log("color 5: " + app.rRGB());*/
		/*setInterval(app.pageStyles, app.rDelay());*/
		//setInterval(app.pageStyles, rDelay());
		setInterval(app.rGradient("body"), app.rDelay());
		console.log("new ms: " + rDelay());
		console.log("new ms: " + app.rGradient());
	}

};

$(document).ready(function() {
	app.init();
	app.keyAction();
});
