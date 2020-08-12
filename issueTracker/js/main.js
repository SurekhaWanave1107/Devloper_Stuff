document.getElementById("myForm").addEventListener("submit", saveIssue);

function saveIssue(e) {
  var description = document.getElementById("Description").value;
  var severity = document.getElementById("Severity").value;
  var assignee = document.getElementById("Assignee").value;
  var id = Math.random();
  var status = "Open";

  if (validateForm(description, severity, assignee) != true) {
    return false;
  }

  var issue = {
    id: id,
    description: description,
    severity: severity,
    assignee: assignee,
    status: status
  };

  if (localStorage.getItem("issueList") == null) {
    //INIT array
    var issueList = [];
    //Add to array
    issueList.push(issue);
    //set to localstorage
    localStorage.setItem("issueList", JSON.stringify(issueList));
  } else {
    //get issue list from localstorage
    var issueList = JSON.parse(localStorage.getItem("issueList"));
    //add issue in to the array
    issueList.push(issue);
    // set issue list back to the localstorage
    localStorage.setItem("issueList", JSON.stringify(issueList));
  }

  document.getElementById("myForm").reset();
  fetchIssue();

  e.preventDefault();
}

function fetchIssue() {
  //get the issue's from localstorage
  var issueList = JSON.parse(localStorage.getItem("issueList"));

  var issueResults = document.getElementById("issueResults");

  issueResults.innerHTML = "";

  for (var i = 0; i < issueList.length; i++) {
    var id = issueList[i].id;
    var description = issueList[i].description;
    var severity = issueList[i].severity;
    var assignee = issueList[i].assignee;
    var status = issueList[i].status;

    issueResults.innerHTML +=
      '<div class="well">' +
      "<h6>Issue ID: " +
      id +
      "</h6>" +
      '<p><span class="lable label-info">' +
      status +
      "</span></p>" +
      "<h3>" +
      description +
      "</h3>" +
      '<p><span class="glyphicon glyphicon-time"></span>' +
      severity +
      '<span class="glyphicon glyphicon-user"></span>' +
      assignee +
      "</p>" +
      '<a href="#" class="btn btn-warning" onclick="setStatusClosed(\'' +
      id +
      "')\">Close </a>" +
      '<a href="#" class="btn btn-danger" onclick="deleteIssue(\'' +
      id +
      "')\">Delete </a>" +
      "</div>";
  }
}

function setStatusClosed(id) {
  var issueList = JSON.parse(localStorage.getItem("issueList"));
  for (var i = 0; i < issueList.length; i++) {
    if (issueList[i].id == id) {
      issueList[i].status = "Closed";
    }
    localStorage.setItem("issueList", JSON.stringify(issueList));
  }
  fetchIssue();
}

function deleteIssue(id) {
  var issueList = JSON.parse(localStorage.getItem("issueList"));
  for (var i = 0; i < issueList.length; i++) {
    if (issueList[i].id == id) {
      issueList.splice(i, 1);
    }
    localStorage.setItem("issueList", JSON.stringify(issueList));
  }
  fetchIssue();
}

function validateForm(description, severity, assignee) {
  if (!description || !severity || !assignee) {
    alert("Please fill the form");
    return false;
  }
  return true;
}
