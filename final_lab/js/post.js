const submitBtn = document.getElementById('form-submit');
    submitBtn.addEventListener('click', function(event) {
      event.preventDefault();

      if (validateForm()) {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const category = document.getElementById('book').value ? 'book' : 'movie';
        const tags = [];
        tags.push(document.getElementById('tags').value);
        const imgURL = document.getElementById('img-url').value;
        const content = document.getElementById('post-content').value;

        const articles = localStorage.getItem('articles');
        const articlesData = JSON.parse(articles);
        
        console.log(articlesData);
    
        const id = getLength(articlesData[category]) + 1;
        const newArticle = {
          'id': id,
          'title': title,
          'description': description,
          'tags': tags,
          'imgURL': imgURL,
          'content': content
        }
        articlesData[category].push(newArticle);

        console.log(articlesData);

        localStorage.setItem('articles', JSON.stringify(articlesData));
      }
    })

function getLength(jsonData) {
  return jsonData.length;
}

function showNotification(message, color) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.style.backgroundColor = color;
  notification.style.display = 'block';

  setTimeout(function() {
    notification.style.display = 'none';
  }, 2000);
}

function validateForm() {
  const titleInput = document.getElementById('title');
  const titleValue = titleInput.value.trim();

  const descInput = document.getElementById('description');
  const descValue = descInput.value.trim();

  if (titleValue === '') {
    showNotification('标题不能为空', 'red');
    return false;
  }

  if (descValue === '') {
    showNotification('副标题不能为空', 'red');
    return false;
  }

  const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
  if (specialChars.test(titleValue) || specialChars.test(descValue)) {
    showNotification('字段不能包含特殊符号', 'red');
    return false;
  }

  showNotification('提交成功！', 'green');
  // 可以继续执行其他操作
  return true;
}