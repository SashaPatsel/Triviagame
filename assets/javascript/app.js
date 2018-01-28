// Steps:
//
// 1. CSS √
// 2. Arrays of questions/or object containing multiple arrays √
// 3. Create a for loop to append new questions to form 

$(document).ready(function() {
	
  timeConverter: function(t) {

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
  }

});


// var me = setTimeout(101000);
// setInterval(101000);