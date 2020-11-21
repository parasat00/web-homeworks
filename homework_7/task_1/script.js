var date = document.getElementById("endDate");
var header = document.querySelector(".header");
var days = document.querySelector(".days");
var hours = document.querySelector(".hours");
var minutes = document.querySelector(".minutes");
var seconds = document.querySelector(".seconds");
date.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      var target = new Date(date.value);
      let hour = target.getHours();
      target.setHours(hour - 6);
      if(target.getDate() === 1 && target.getMonth()===0) {
       header.innerHTML="Countdown to New Year Party !";
      }
      else{
       header.innerHTML="Countdown to " + target.getDate() + ". " + (target.getMonth()+1) + ". " + target.getFullYear();
      }
      
      var x = setInterval(function() {
      var now = new Date();
      var distance = target - now.getTime();
      
      var d = Math.floor(distance / (1000 * 60 * 60 * 24));
      var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var s = Math.floor((distance % (1000 * 60)) / 1000);

       days.innerHTML = d;
       hours.innerHTML = h;
       minutes.innerHTML = m;
       seconds.innerHTML = s;

       if (distance < 0) {
       clearInterval(x);
       header.innerHTML = "";
       days.innerHTML = "D";
       hours.innerHTML = "O";
       minutes.innerHTML = "N";
       seconds.innerHTML = "E";
       }

      }, 1000);
    }
});