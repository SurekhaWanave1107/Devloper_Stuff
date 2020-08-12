document.getElementById("myForm").addEventListener("submit", saveBookmark);

//save bookmark
function saveBookmark(e) {
  console.log("It Works");
  //get from values

  var siteName = document.getElementById("siteName").value;
  var siteUrl = document.getElementById("siteURL").value;

  if (validateForm(siteName, siteUrl) != true) {
    return false;
  }

  var bookmark = {
    site: siteName,
    Url: siteUrl,
  };

  /*    
     //Local storage test 
  localStorage.setItem("Test", "HelloWorld");
  console.log(localStorage.getItem("Test"));
  localStorage.removeItem("Test");
  console.log(localStorage.getItem("Test")); */

  //test if bookmark is null

  if (localStorage.getItem("bookmarks") == null) {
    // Init array
    var bookmarks = [];
    //add to array
    bookmarks.push(bookmark);
    // set to localStorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  } else {
    // get bookmarks from localstorage
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    //add bookmark to array
    bookmarks.push(bookmark);
    //Re-set back to localStorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }

  document.getElementById("myForm").reset();

  //Re-fetch bookmark
  fetchBookmark();

  //Prevent form from submiting
  e.preventDefault();
}

function deleteBookmark(url) {
  //get bookmarks fro localStorage
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

  for (var i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].Url == url) {
      bookmarks.splice(i, 1);
    }
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
  fetchBookmark();
}

function fetchBookmark() {
  //get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

  //get output id
  var bookmarksResults = document.getElementById("bookmarksResults");

  bookmarksResults.innerHTML = "";

  for (var i = 0; i < bookmarks.length; i++) {
    var name = bookmarks[i].site;
    var url = bookmarks[i].Url;

    bookmarksResults.innerHTML +=
      '<div class="well">' +
      "<h3>" +
      name +
      '<a class="btn btn-default" target="_balnk" href="' +
      url +
      '">Visit</a>' +
      "<a onClick=\"deleteBookmark('" +
      url +
      '\')" class="btn btn-danger"  href="#">Delete</a>' +
      "</h3>" +
      "</div>";
  }
}

function validateForm(siteName, siteUrl) {
  if (!siteName || !siteUrl) {
    alert("Please fill the form");
    return false;
  }

  var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if (!siteUrl.match(regex)) {
    alert("Please enetr valid url");
    return false;
  }
  return true;
}
