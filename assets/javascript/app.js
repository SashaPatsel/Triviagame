// Steps:
//
// 1. CSS √
// 2. Arrays of questions/or object containing multiple arrays √
// 3. Create a for loop to append new questions to form 

window.onload = function() {
	startTimer();
	finishGame();

	$("input").on("click", function() {
	  if ($(this).val() == 1) {
		  correct ++;
	  }
	  else {
	  	incorrect ++;
	  }
	  	console.log(correct)
	  	console.log(incorrect)
	});
}

//Global vars:
var timeInterval;
var countDown = 101;
var correct = 0;
var incorrect = 0;

		function startTimer() {
			timeInterval = setInterval(counter, 1000)
		}

		function hideStats () {
			
		}

		function counter () {
			countDown --;
			var convert = timeConverter(countDown);
			$(".count-down").text(convert)
		}
		
		//Displays remaining time like an actual clock
	 function timeConverter(t) {

	    var minutes = Math.floor(t / 60);
	    var seconds = t - (minutes * 60);

	    if (seconds < 10) {
	      seconds = "0" + seconds;
	    }

	    if (minutes === 0) {
	      minutes = "00";
	    }
	    else if (minutes < 10) {
	      minutes = "0" + minutes;
	    }

	    return minutes + ":" + seconds;
	  };

	  // function keepScore () {


	  // }

	  function finishGame() {
		  if (countDown === 0) {
		  	showGameStats();
		  }

		};

		function showGameStats () {
			$(".trivia-part").remove();
		}


// var me = setTimeout(101000);
// setInterval(101000);