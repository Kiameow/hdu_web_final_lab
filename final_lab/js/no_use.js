// const templateArticle = `<section class="article">
// <div class="heading">
//   <h1><%= article.title %></h1>
//   <p class="article-description">
//     <%= article.description %>
//   </p>
//   <div class="tags">
//     <% article.tags.forEach(function(tag) { %>
//       <div class="tag"><%= tag %></div>  
//     <% }) %>
//   </div>
// </div>

// <div class="content">
//   <%= article.content %>
// </div>
// </section>`;

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
      window.location.href = 'articleTest.html';
      // navigateTo(linkElement.getAttribute('href'));
    }
  })

  // window.addEventListener('popstate', function(event) {
  // // 在这里处理 URL 变化的逻辑
  //   // event.preventDefault();
  //   const path = window.location.pathname;
    
  //   if (path.match(/\/movie\/(\d+)/) || path.match(/\/book\/(\d+)/)) {
  //     renderArticlePage(path);
  //   } else if (path == '/viewPage.html') {
      
  //   }
    
  // });

  // 渲染页面的函数（假设有此函数，用于根据路径渲染不同的内容）
  // function renderArticlePage(path) {
  //   const pathSegments = path.split('/');
  //   localStorage.setItem('category', pathSegments[0]);
  //   localStorage.setItem('id', pathSegments[1]);
  //   console.log('渲染页面:', path);
  //   console.log('渲染页面:', pathSegments);
  //   console.log(localStorage);
  //   // 在这里可以根据路径执行相应的页面渲染逻辑

  //   const article = getArticle(pathSegments[0], pathSegments[1]);
  //   const compiledTemplate = ejs.compile(templateArticle);
  //   const articleSection = compiledTemplate({ article });
  //   document.getElementById('main').innerHTML = articleSection;
    
  // }

  // // 修改浏览器的 URL，但不触发页面刷新
  // function navigateTo(path) {
  //   window.history.pushState({}, '', path);
  //   renderPage(path); // 渲染对应页面
  // }
});

// function getArticle(category, id) {
//   const articleJson = localStorage.getItem('articles');
//   const articleData = JSON.parse(articleJson);
  
//   const set = articleData[category];
//   if(!set) {
//     return null;
//   }

//   const selectedAticle = set.find(article => article.id == id);
//   return selectedAticle || null;
// }

// router.js
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

