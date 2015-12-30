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

	rMonoRGB: function() {
		var R = rInt(0, 255);
		if (R<=50){
			var mR=0;
		} else{
			var mR=R-50;
		}
		var G = rInt(0, 255);
		if (G<=50){
			var mG=0;
		} else{
			var mG=G-50;
		}
		var B = rInt(0, 255);
		if (B=50){
			var mB=0;
		} else{
			var mB=B-50;
		}
		var randomColor = (R + "," + G + "," + B + "," + 1);
		var randomMColor = (mR + "," + mG + "," + mB + "," + 1);
		var newColor = "rgba(" + randomColor + ")";
		var newMColor = "rgba(" + randomMColor + ")";

		//return newColor, newMColor;
		return {newColor,newMColor};
	},

	rDelay:function(){
		var T = rInt(30, 60);
		var newT = (T+"00");
		console.log(newT);
		return newT;
	},

	rGradient: function(element){
		$(element).css({
			'background': 'linear-gradient(to bottom,'+rRGB() + '15%,' + rRGB()+'85%'
		})
	},

	rWhiteGradient: function(element){
		$(element).css({
			'background': 'linear-gradient(to bottom,'+rRGB() + '15%, rgba(255,255,255,1)'
		})
	},

	rBlackGradient: function(element){
		$(element).css({
			'background': 'linear-gradient(to bottom,'+rRGB() + ', rgba(5,5,5,1)'
		})
	},

	rMonoGradient: function(element){
		var colors=app.rMonoRGB();
		console.log(colors.newColor);
		console.log(colors.newMColor);
		$(element).css({
			'background': 'linear-gradient(to bottom,'+colors.newColor + '15% ,' + colors.newMColor + '85%'
		})
	},

	rSolid: function(element){
		$(element).css({
			'background': rRGB()
		})
	},

	keyAction: function(){
		$(window).keypress(function (e) {
			console.log(e);
		  if (e.keyCode === 32) {
		    e.preventDefault()
		    console.log('spacebar = background gradient');
		    app.rGradient("body");
		  } 
		  	else if(e.keyCode === 118){
		  	e.preventDefault()
		    console.log('v = solid background');
		    app.rSolid("body");
		  }
		  	else if (e.keyCode === 98){
		  	e.preventDefault()
		    console.log('b = gradient to white');
		    app.rWhiteGradient("body");
		  }
		  else if (e.keyCode === 110){
		  	e.preventDefault()
		    console.log('n = gradient to black');
		    app.rBlackGradient("body");
		  }
		  else if (e.keyCode === 109){
		  	e.preventDefault()
		    console.log('m = monochromatic gradient');
		    app.rMonoGradient("body");
		  }
		})
	},

	buttons:function(){
		$( "button#solid" ).click(function() {
		  app.rSolid("body");
		});
		$( "button#gradient" ).click(function() {
		  app.rGradient("body");
		});
		$( "button#gradient-black" ).click(function() {
		  app.rBlackGradient("body");
		});
		$( "button#gradient-white" ).click(function() {
		  app.rWhiteGradient("body");
		});
		$( "button#gradient-mono" ).click(function() {
		  app.rMonoGradient("body");
		});
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
		//setInterval(app.rGradient("body"), app.rDelay());
		setInterval(app.rGradient("body"), 1000);
		console.log("new ms: " + rDelay());
		app.keyAction();
		app.buttons();
		console.log(app.rMonoRGB());
	}

};

$(document).ready(function() {
	app.init();
});
