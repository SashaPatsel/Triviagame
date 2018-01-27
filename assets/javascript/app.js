// Steps:
//
// 1. CSS √
// 2. Arrays of questions/or object containing multiple arrays √
// 3. Create a for loop to append new questions to form 

$(document).ready(function() {
	


  var quizQuest = {
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
  		a1: ["Aemon, The Dragon Knight", "Maegor, The Cruel", "Aegon, The Conqueror", "Brynden Blackfish"],
  		a2: ["Bran, The Builder", "Cotter Pyke", "Prince Theon of Winterfell", "Maester Luwin"],
  		a3: ["Lannisport", "The Vale", "High Garden", "Casterly Rock"],
  		a4: ["Lazereen", "Qohor", "Dragon Stone", "Qarth"],
  		a5: ["Mirri Maz Dur", "Melisandre", "Osha", "Salaador San"],
  		a6: ["Quentyn Martell", "Princess Myrcella", "Oberyn Martell", "Gregor Clegane"],
  		a7: ["Mance Rayder", "Varamir Six Skins", "Jeor Mormont", "Jojen Reed"],
  		a8: ["Meryn Trant", "Septa Mordane", "Syrio Forell", "Jaqen Hagar"],
  		a9: ["Born with fire", "Fire Tops", "Kissed by Fire", "The Shield that guards the realms of men"],
  		a10: ["Ser Arthur Dayne", "Ser Mandon Moore", "Ser Baristan Selmy", "Strong Belwas"]
  	}
  }	


  console.log(quizQuest.answers.a5[2])
});
// var me = setTimeout(101000);
// setInterval(101000);