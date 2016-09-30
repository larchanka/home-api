(function () {
  'use strict';
  
  if (true) {
    var setTime = function () {
      var nodeTime = document.getElementById('time');
      var nodeDate = document.getElementById('date');
      var now = new Date();
      var ruMonth, ruWeekDay;
    
      var year = now.getFullYear();
      var day = now.getDate();
      var month = now.getMonth();
      var weekDay = now.getDay();
      switch (month) {
        case 0: ruMonth = "января"; break;
        case 1: ruMonth = "февраля"; break;
        case 2: ruMonth = "марта"; break;
        case 3: ruMonth = "апреля"; break;
        case 4: ruMonth = "мае"; break;
        case 5: ruMonth = "июня"; break;
        case 6: ruMonth = "июля"; break;
        case 7: ruMonth = "августа"; break;
        case 8: ruMonth = "сентября"; break;
        case 9: ruMonth = "октября"; break;
        case 10: ruMonth = "ноября"; break;
        case 11: ruMonth = "декабря"; break;
      }
    
      switch (weekDay) {
        case 0: ruWeekDay = "воскресенье"; break;
        case 1: ruWeekDay = "понедельник"; break;
        case 2: ruWeekDay = "вторник"; break;
        case 3: ruWeekDay = "среда"; break;
        case 4: ruWeekDay = "четверг"; break;
        case 5: ruWeekDay = "пятница"; break;
        case 6: ruWeekDay = "суббота"; break;
      }
    
      nodeTime.innerText = now.getHours() + ':' + now.getMinutes();
      nodeDate.innerText = day + ' ' + ruMonth + ' ' + year + ', ' + ruWeekDay;
    };
  
    setTime();
  
    var timeInterval = setInterval(setTime, 1000 * 60);
  }
})();