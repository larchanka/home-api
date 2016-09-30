(function(window) {
  'use strict';
  
  var template = '\
    <ul class="news-wrapper">\
      <% var i; %>\
      <% var limit = Math.min(newsList.length, 20); %>\
      <% for (i = 0; i < limit; ++i) { %>\
        <li><span>&raquo;</span> <%=newsList[i].title%></li>\
      <% } %>\
    </ul>\
  ';
  var node = document.getElementById('news');
  
  var fetchNews = function() {
    fetch('/news')
      .then(function(response) {
        return response.text()
      }).then(function(newsList) {
        if (typeof newsList !== 'object') {
          try {
            newsList = JSON.parse(newsList);
          } catch (e) {
            console.log(e);
            newsList = [];
          }
        }
        node.innerHTML = window.tmpl(template, {newsList: newsList});
      });
  };
  
  fetchNews();
  
  setInterval(fetchNews, 60 * 60 * 1000);
})(this);