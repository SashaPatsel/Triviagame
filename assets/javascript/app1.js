
window.onload = function() {
  startTimer();
  hideStats();
  newQuest();
  correctAnswer();
  



  // $("input").on("click", function() {
  //   for (var i = 0 ; i < quizQuest.goodGuesses.length ; i++) {
  //     if ($("input:checked + label").text() === quizQuest.goodGuesses[i]) {
  //       correct ++;
  //     }

  //     else if ($("input:checked + label").text() !== quizQuest.goodGuesses[i]) {
  //       incorrect ++;
  //     }
  //     console.log(correct)
  //     console.log(incorrect)
  //   }
  // });

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
var incorrect = 10;
var audio1 = $(".audio-player");
var audio2 = $(".audio-player1");
var answer1;
var answer2;
var answer3;
var answer4;
var answerIndex;


//Object containing the answers and questions
  var quizQuest = {
    goodGuesses: ["Aegon, The Conqueror", "Bran, The Builder", "Casterly Rock", "Qarth", "Melisandre", "Oberyn Martell", "Mance Rayder", "Syrio Forell", "Kissed by Fire", "Ser Arthur Dayne"],
    questions: { 
      q1: "Who established the Targaryen dynasty in Westeros?",
      q2: "Who built Winterfell and The Wall?",
      q3: "What is the capital of the West in Westeros?",
      q4: "What city does Danaerys take refuge in shortly after the birth of her dragons?",
      q5: "What is the name of the red priestess who councils Stannis Baratheon?",
      q6: "Who is know as the Red Viper of Dorne?",
      q7: "Who is known as King Beyond The Wall?",
      q8: "Who was Arya Stark's Dancing Master?",
      q9: "What is said of red-headed wildlings?",
      q10: "Who was known as the Sword of the Morning?"
    },

    answers: {
      a1: ["Aemon, The Dragon Knight", "0", "Maegor, The Cruel", "0", "Aegon, The Conqueror", "1", "Brynden Blackfish", "0"],
      a2: ["Bran, The Builder", "1", "Cotter Pyke", "0", "Prince Theon of Winterfell", "0", "Maester Luwin", "0"],
      a3: ["Lannisport", "0", "The Vale", "0", "High Garden", "0", "Casterly Rock", "1"],
      a4: ["Lazereen", "0", "Qohor", "0", "Dragon Stone", "0", "Qarth", "1"],
      a5: ["Mirri Maz Dur", "0", "Melisandre", "1", "Osha", "0", "Salaador San", "0"],
      a6: ["Quentyn Martell", "0", "Princess Myrcella", "0", "Oberyn Martell", "1", "Gregor Clegane", "0"],
      a7: ["Mance Rayder", "1", "Varamir Six Skins", "0", "Jeor Mormont", "0", "Jojen Reed", "0"],
      a8: ["Meryn Trant", "0", "Septa Mordane", "0", "Syrio Forell", "1", "Jaqen Hagar", "0"],
      a9: ["Born with fire", "0", "Fire Tops", "0", "Kissed by Fire", "1", "The Shield that guards the realms of men", "0"],
      a10: ["Ser Arthur Dayne", "1", "Ser Mandon Moore", "0", "Ser Baristan Selmy", "0", "Strong Belwas", "0"]
    }
    
  } 

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

    function newQuest () {
        
      for (var i = 1 ; i < 11 ; i++) {
        answerIndex = quizQuest.answers["a"+i];
        questionIndex = quizQuest.questions["q"+i];
      $(".rando-div").append('<div class="my-border new-quest">' + 
        '<div class="row">' + '<div class="col-md-12">' + 
        '<h2>' + questionIndex + '</h2>' + '</div>' + '</div>' +
        '<div class="row">' + '<div class="col-md-2">' + '</div>' + 
        '<form>' + '<div class="col-md-2 radio-got">' + 
        '<input type="radio" name="a10" unchecked>' +
        '<label>' + answerIndex[0] + '</label>' + '</div>' + 
        '<div class="col-md-2">' +'<input type="radio" name="a10" unchecked>' +
        '<label>' + answerIndex[2] + '</label>' + '</div>' + '<div class="col-md-2">' + 
        '<input type="radio" name="a10" unchecked>' + 
        '<label>' + answerIndex[4] + '</label>' + '</div>' + 
        '<div class="col-md-2">' + '<input type="radio" name="a10" unchecked>' +
        '<label>' + answerIndex[6] + '</label>' + '</div>' + 
        '</form>' + '<div class="col-md-2">' + '</div>' + '</div>' +
        '<br>' + '</div>' + '<br>');
        
      }
    };  



    function correctAnswer() {
      for (var i = 0 ; i < quizQuest.goodGuesses.length ; i++) {
        if ($("input:checked + label").text() === quizQuest.goodGuesses[i]) {
          correct ++;
          incorrect --;
        }

        // else if ($("input:checked + label").text() !== quizQuest.goodGuesses[i]) {
        //   incorrect --;
        // }
        console.log(correct)
        console.log(incorrect)
      }
    }  

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
      
    };  

    function showGameStats () {
      $(".trivia-part").hide();
      $(".game-stats").show();
      winPercentage = correct/totalQuests*100;
      $(".correct").text("Correct Answers: " + correct);
      $(".incorrect").text("Incorrect Answers: " + incorrect);
      $(".percentage").text("Percent Answered Correctly: " + winPercentage + "%");
    }