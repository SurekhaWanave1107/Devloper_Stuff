function getHistory() {
  return document.getElementById("history-value").innerHTML;
}

function printHistory(num) {
  if (num == "") {
    document.getElementById("history-value").innerHTML = "";
  }
  document.getElementById("history-value").innerHTML = num;
}

function getOutput() {
  return document.getElementById("output-value").innerHTML;
}

function printOutput(num) {
  if (num == "") {
    document.getElementById("output-value").innerHTML = "";
  } else {
    document.getElementById("output-value").innerHTML = getFormatedNumber(num);
  }
}

function getFormatedNumber(num) {
  var n = Number(num);
  var value = n.toLocaleString("en");

  return value;
}

function reverseNumberFormat(num) {
  return num.replace(/,/g, "");
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
      printOutput("");
      printHistory("");
    }
    if (this.id == "backspace") {
      var output = reverseNumberFormat(getOutput());

      if (output) {
        output = output.substring(0, output.length - 1);
      }

      printOutput(output);
    }
  });
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    var output = reverseNumberFormat(getOutput());

    if (output != isNaN) {
      output = output + this.id;
    }
    printOutput(output);
  });
}
