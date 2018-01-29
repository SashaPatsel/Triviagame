

window.onload = function() {
	startTimer();
	hideStats();

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

	$(".all-done").on("click", function() {
		showGameStats();
		gameFinished();
	});
}

//Global vars:
var timeInterval;
var countDown = 101;
var correct = 0;
var totalQuests = 10;
var winPercentage;
var incorrect = 0;
var audio1 = $(".audio-player");
var audio2 = $(".audio-player1");

		function startTimer() {
			timeInterval = setInterval(counter, 1000);
			audio2.get(0).pause();
		}

		function hideStats () {
			$(".game-stats").hide();
		}

		function counter () {
			countDown --;
			var convert = timeConverter(countDown);
			$(".count-down").text(convert);
			timeDone();
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

	  function timeDone() {
		  if (countDown < 1) {
		  	showGameStats();
				audio1.get(0).remove();
				audio2.get(0).play();
		  }

		};

		function gameFinished () {
		  showGameStats();
			audio1.get(0).remove();
			audio2.get(0).play();	
		}

		function showGameStats () {
			$(".trivia-part").remove();
			$(".game-stats").show();
			winPercentage = correct/totalQuests*100;
			console.log(winPercentage);
			$(".correct").text("Correct Answers: " + correct);
			$(".incorrect").text("Incorrect Answers: " + incorrect);
			$(".percentage").text("Percent Answered Correctly: " + winPercentage + "%");
		}
