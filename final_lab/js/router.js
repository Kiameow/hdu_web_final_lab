document.addEventListener('DOMContentLoaded', function() {
  console.log("wtf");
  
  document.getElementById('plate').addEventListener('click', function (event) { 
    const linkElement = event.target.closest('a');
    if (linkElement.tagName === 'A') {
      event.preventDefault();
      const path = linkElement.getAttribute('href');
      const pathSegments = path.split('/');
      localStorage.setItem('category', pathSegments[0]);
      localStorage.setItem('id', pathSegments[1]);
      window.location.href = 'article_page.html';
      // navigateTo(linkElement.getAttribute('href'));
    }
  })
});


