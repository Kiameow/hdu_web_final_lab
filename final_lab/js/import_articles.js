const jsonPath = 'articles/articles.json';
    
if(!localStorage.getItem('articles')) {
  $.getJSON(jsonPath, function(data) {
    localStorage.setItem('articles', JSON.stringify(data));
    console.log("localStorage success!");
  })
}