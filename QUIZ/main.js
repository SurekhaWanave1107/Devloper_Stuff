check = () => {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;
  var question8 = document.quiz.question8.value;
  var question9 = document.quiz.question9.value;
  var question10 = document.quiz.question10.value;
  var question11 = document.quiz.question11.value;
  var correct = 0;
  if (question1 == "Delhi") {
    correct++;
  }
  if (question2 == "Selenium Web") {
    correct++;
  }
  if (question3 == "Password") {
    correct++;
  }
  if (question4 == "Yes") {
    correct++;
  }
  if (question5 == "3") {
    correct++;
  }
  if (question6 == "4") {
    correct++;
  }
  if (question7 == "Perl") {
    correct++;
  }
  if (question8 == "selectAndType") {
    correct++;
  }
  if (question9 == "TestNextGeneration") {
    correct++;
  }
  if (question10 == "1") {
    correct++;
  }
  if (question11 == "3") {
    correct++;
  }

  var message = [
    "Great Job",
    "That's just okay",
    "You really need to do better"
  ];
  var pictures = ["img/Success.gif", "img/okay.gif", "img/Failure.gif"];
  var range;

  if (correct < 4) {
    range = 2;
  }
  if (correct > 3 && correct < 7) {
    range = 1;
  }
  if (correct > 6) {
    range = 0;
  }

  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("message").innerHTML = message[range];
  document.getElementById("number_correct").innerHTML =
    "You got " + correct + " correct";

  document.getElementById("pictures").src = pictures[range];
};
