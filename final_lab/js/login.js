function generateCookie() {
  const username = $('#username').val();
  // const password = $('#password').val();

  Cookies.set('username', username, { expires: 7 });
  
}



$('#submit').click(function() {
  generateCookie();
  window.location.href = "post_page.html";
})