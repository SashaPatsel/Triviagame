
window.onload = function() {
  startTimer();
  hideStats();
  newQuest();
  

            $("input").on("click", function() {
          if ($(this).attr("value", questionIndex[5])) {
            correct ++;
            incorrect--;
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
  

    questions: { 
      q1: ["Who established the Targaryen dynasty in Westeros?", "Aemon, The Dragon Knight", "Maegor, The Cruel", "Aegon, The Conqueror", "Brynden Blackfish", "3"],
      q2: ["Who built Winterfell and The Wall?", "Bran, The Builder", "Cotter Pyke", "Prince Theon of Winterfell", "Maester Luwin", "1"],
      q3: ["What is the capital of the West in Westeros?", "Lannisport", "The Vale", "High Garden", "Casterly Rock", "4"],
      q4: ["What city does Danaerys take refuge in shortly after the birth of her dragons?", "Lazereen", "Qohor", "Dragon Stone", "Qarth", "4"],
      q5: ["What is the name of the red priestess who councils Stannis Baratheon?", "Mirri Maz Dur", "Melisandre", "Osha", "Salaador San", "2"],
      q6: ["Who is know as the Red Viper of Dorne?", "Quentyn Martell", "Princess Myrcella", "Oberyn Martell", "Gregor Clegane", "3"],
      q7: ["Who is known as King Beyond The Wall?","Mance Rayder", "Varamir Six Skins", "Jeor Mormont", "Jojen Reed", "1"],
      q8: ["Who was Arya Stark's Dancing Master?", "Meryn Trant", "Septa Mordane", "Syrio Forell", "Jaqen Hagar", "3"],
      q9: ["What is said of red-headed wildlings?", "Born with fire", "Fire Tops", "Kissed by Fire", "The Shield that guards the realms of men", "3"],
      q10: ["Who was known as the Sword of the Morning?", "Ser Arthur Dayne", "Ser Mandon Moore", "Ser Baristan Selmy", "Strong Belwas", "1"]
    },
    
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
        // answerIndex = quizQuest.answers["a"+i];

        // var radio = $("<input>")
        // radio.addClass()
        // radio.attr("name", "a"+1);

        questionIndex = quizQuest.questions["q"+i];
      $(".rando-div").append('<div class="my-border new-quest">' + 
        '<div class="row">' + '<div class="col-md-12">' + 
        '<h2>' + questionIndex[0] + '</h2>' + '</div>' + '</div>' +
        '<div class="row">' + '<div class="col-md-2">' + '</div>' + 
        '<form>' + '<div class="col-md-2 radio-got">' + '<label>' +
        '<input type="radio" name="a' + i + ' value=1">' +
         questionIndex[1] + '</label>' + '</div>' + 
        '<div class="col-md-2">' + '<label>' +'<input type="radio" name="a' + i + 'value = 2">' +
         questionIndex[2] + '</label>' + '</div>' + '<div class="col-md-2">' + 
        '<label>' + '<input type="radio" name="a' + i + ' value = 3">' + 
        questionIndex[3] + '</label>' + '</div>' + 
        '<div class="col-md-2">' + '<label>' + '<input type="radio" name="a' + i + ' value = 4">' +
        questionIndex[4] + '</label>' + '</div>' + 
        '</form>' + '<div class="col-md-2">' + '</div>' + '</div>' +
        '<br>' + '</div>' + '<br>');


  
        
      }
    };  



    function correctAnswer() {
        console.log(correct)
        console.log(incorrect)
    }  

    function timeDone() {
      if (countDown < 1) {
        showGameStats();
        audio1.get(0).remove();
        audio2.get(0).play();
      }

    };

    function gameFinished () {
      correctAnswer();
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