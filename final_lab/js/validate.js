// in the postPage
function loginToWrite() {
  if (!checkCookie()) {
    window.location.href = "login.html";
  }
}

function checkCookie() {
  const username = Cookies.get('username');
  if (!username) {
    window.location.href = "login.html";
  }
}

$(document).ready(function() {
  checkCookie();
})