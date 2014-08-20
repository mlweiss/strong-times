document.addEventListener('DOMContentLoaded', function(){
	console.log("loaded")

	svgBodyElements.abs()
	var muscle = document.querySelector("#viewMuscles")
	muscle.addEventListener("click" renderMuscleGroup)

	// var numSets = $(".num_sets").data("sets")
	// var expSets = Math.exp(numSets)/ (Math.exp(numSets) + 1)
	// console.log(numSets)

	// $( "#abs" ).css("opacity", expSets);
	// $( "#chest" ).css("opacity", expSets);
	// $( "#leftBisep" ).css("opacity", expSets);
	// $( "#rightBisep" ).css("opacity", expSets);
	// $( "#thighs" ).css("opacity", expSets);
	// $( "#calves" ).css("opacity", expSets);
	// $( "#glutes" ).css("opacity", expSets);
	// $( "#triceps" ).css("opacity", expSets);
	// $( "#back" ).css("opacity", expSets);

	// svgBodyElements.chest()
	// svgBodyElements.leftBisep()
	// svgBodyElements.rightBisep()
	// svgBodyElements.shoulders()
	// svgBodyElements.thighs()
	// svgBodyElements.calves()
	// svgBodyElements.glutes()
	// svgBodyElements.triceps()
	// svgBodyElements.back()
});

var renderMuscleGroup = function (event) {
	console.log("event")
	var muscles = document.querySelector("#muscle_table_body")
	console.log(muscles.children)

	svgBodyElements.chest()
	svgBodyElements.leftBisep()

	// svgBodyElements.rightBisep()
	// svgBodyElements.shoulders()
	// svgBodyElements.thighs()
	// svgBodyElements.calves()
	// svgBodyElements.glutes()
	// svgBodyElements.triceps()
	// svgBodyElements.back()

}


var svgBodyElements = (function (){

	return{
	  abs: function(){
			var svg = document.querySelector(".svg-container")
			var img = document.createElement("img")
			img.setAttribute("src", "/assets/abs.svg")
			img.id="abs";
			svg.appendChild(img)
	  },
	   chest: function(){
			var svg = document.querySelector(".svg-container")
			var img = document.createElement("img")
			img.setAttribute("src", "/assets/chest.svg")
			img.id="chest";
			svg.appendChild(img)
	  },
	  leftBisep: function(){
			var svg = document.querySelector(".svg-container")
			var img = document.createElement("img")
			img.setAttribute("src", "/assets/leftBisep.svg")
			img.id="leftBisep";
			svg.appendChild(img)
	  },
	   rightBisep: function(){
			var svg = document.querySelector(".svg-container")
			var img = document.createElement("img")
			img.setAttribute("src", "/assets/rightBisep.svg")
			img.id="rightBisep";
			svg.appendChild(img)
	  },
	   shoulders: function(){
			var svg = document.querySelector(".svg-container")
			var img = document.createElement("img")
			img.setAttribute("src", "/assets/shoulders.svg")
			img.id="shoulders";
			svg.appendChild(img)
	  },
	   thighs: function(){
			var svg = document.querySelector(".svg-container")
			var img = document.createElement("img")
			img.setAttribute("src", "/assets/thighs.svg")
			img.id="thighs";
			svg.appendChild(img)
	  },
	   back: function(){
			var svg = document.querySelector(".svg-container")
			var img = document.createElement("img")
			img.setAttribute("src", "/assets/back.svg")
			img.id="back";
			svg.appendChild(img)
	  },
	   calves: function(){
			var svg = document.querySelector(".svg-container")
			var img = document.createElement("img")
			img.setAttribute("src", "/assets/calves.svg")
			img.id="calves";
			svg.appendChild(img)
	  },
	   glutes: function(){
			var svg = document.querySelector(".svg-container")
			var img = document.createElement("img")
			img.setAttribute("src", "/assets/glutes.svg")
			img.id="glutes";
			svg.appendChild(img)
	  },
	  triceps: function(){
			var svg = document.querySelector(".svg-container")
			var img = document.createElement("img")
			img.setAttribute("src", "/assets/triceps.svg")
			img.id="triceps";
			svg.appendChild(img)
	  }
	}
})();
