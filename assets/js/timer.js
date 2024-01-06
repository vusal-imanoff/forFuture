//timer

var countDownDate = new Date("July 1, 2022 00:00:00").getTime();

var x = setInterval(function () {

  var now = new Date().getTime();
  console.log(now);
  var distance = countDownDate - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  seconds = seconds < 10 ? '0' + seconds : seconds;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  hours = hours < 10 ? '0' + hours : hours;
  
  hr = `<span class="count_days"> ${days} </span> : <span class="count_hours">${hours} </span> : <span class='count_minutes'>${minutes} </span> : <span class="count_seconds"> ${seconds} </span>`;

  document.getElementById("demo").innerHTML = hr;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

