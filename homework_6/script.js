var first;
var second;
function multiply() {
 first = document.getElementById("1stNumb").value;
 second = document.getElementById("2ndNumb").value;
 document.getElementById("multiplyResult").innerHTML = first * second;
}
function divide() {
 first = document.getElementById("1stNumb").value;
 second = document.getElementById("2ndNumb").value;
 document.getElementById("multiplyResult").innerHTML = first / second;
}
var c;
var f;
function transfer() {
 c = document.getElementById("Celcius").value;
 f = document.getElementById("Fahrenheit").value;
 if(c !== '') {
  var fa = 9 * c / 5 +32;
  document.getElementById("ctof").innerHTML = c + "°C is " + fa + " °F"
 }
 if(f !== '') {
  var ce = 5 * (f - 32) / 9;
  document.getElementById("ftoc").innerHTML = f + "°F is " + ce + "°C";
 }
}
var r;
document.getElementById("Volume").value = '0.0000';
function findVolume() {
 r = document.getElementById("Radius").value;
 document.getElementById("Volume").value = 4 * 3.14 * Math.pow(r,3) / 3;
}
var x;
function reverse() {
 x = document.getElementById("Example").value + "";
 document.getElementById("exOut").innerHTML = x.split("").reverse().join("");
}
function drawRectangle() {
 var canvas = document.getElementById('rectCanvas');
 var context = canvas.getContext('2d');
    context.fillRect(30,30,200,200);
    context.clearRect(70,70,120,120);
    context.strokeRect(85,85,90,90);
}
function drawCircle() {
 var canvas = document.getElementById('circleCanvas');
 var context = canvas.getContext('2d');
   context.beginPath();
   context.arc(canvas.width / 2, canvas.height / 2, 100, 0, 2 * Math.PI);
   context.strokeStyle = 'red';
   context.lineWidth = 3;
   context.stroke();
}
function circles() {
 var canvas = document.getElementById("canvasCircles");
 var context = canvas.getContext("2d");
 for(let i = 0; i < 6; i++) {
   context.beginPath();
   context.fillStyle = "rgb(" + Math.floor(255-51*i) + "," + Math.floor(255-51*i) + "," + Math.floor(255-51*i) + ")";
   context.arc(canvas.width * i / 6 + 45, canvas.height * i / 6 + 45, canvas.width / 20, 0, 2 * Math.PI);
   context.fill();
   context.stroke();
 }
}