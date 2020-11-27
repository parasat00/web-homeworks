var name1=document.getElementById("firstName");
var name2=document.getElementById("secondName");
var questions=[];
let balls=[];
let container = [];
let input = [];
let label = [];

class Questions{
		constructor(question, options, answer){
			this.question = question;
			this.options = options;
			this.answer= answer;
		}
	}

function check() {
 if(isWord(name1.value) && isWord(name2.value)) {
  document.querySelector(".black_back").classList.add("hide");
 }
 else{
  document.querySelector(".warning").innerText='*Invalid first name or last name';
 }
}
function isWord(s) {
 var string=s.toLowerCase();
 for(let i = 0; i < string.length; i++){
		if(!(string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122))
			return false;
	}
	return true;
}

var request = new XMLHttpRequest();
request.onreadystatechange = function() {
 if (request.readyState == 4 && request.status == 200) {
  
  function load() {
   let data = JSON.parse(request.responseText);
   
   for(let i = 0; i < data.questions.length;i++) {
    var options = data.questions[i].options;
    questions[i] = new Questions(data.questions[i].question,options, data.questions[i].answer);
   var doc = document.querySelector(".quiz");   
   var q = document.createElement('div');
   q.innerText="Q"+(i+1)+": "+data.questions[i].question.toString();
   q.classList.add("question");
   q.classList.add("q-"+(i+1));
   doc.appendChild(q);

   input[i] = [];
   label[i] = [];
   container[i] = [];
   for(let j = 0; j < options.length; j++) {
    container[i][j] = document.createElement('div');
    input[i][j] = document.createElement('input');
    input[i][j].type = "radio";
    input[i][j].name = "q"+i;
    input[i][j].value = options[j].toString();
    container[i][j].appendChild(input[i][j]);
    label[i][j] = document.createElement('label');
				label[i][j].for = "q" + i;
				label[i][j].cursor = 'pointer';
    label[i][j].innerText = options[j].toString();
    container[i][j].appendChild(label[i][j]);
    q.appendChild(container[i][j]);
   }
   balls[i] = document.createElement('label');
   balls[i].innerText = "0/1";
    q.appendChild(balls[i]);
   }
  }
  document.addEventListener('onload', load());
  
 }
};
request.open("GET", "quiz.json", true);
request.send();
function submit() {
   let count = 0;
   for(let i = 0; i < questions.length;i++) {
    let bul = false;
    let ind = 0;
    for(ind; ind < input[i].length; ind++){
     if(input[i][ind].value === questions[i].answer) {
      break;
     }
    }
    for(let j = 0; j < input[i].length; j++) {
     
     if(input[i][j].checked ){
      if(input[i][j].value === questions[i].answer){
       bul = true;
       container[i][j].classList.add("green");
       count++;
					  break;
      }
      else{
       container[i][j].classList.add("red");
       container[i][ind].classList.add("green");
      }
				}
    }
    
    if(bul) {
     balls[i].innerText="1/1";
    }
   }
   show(count);
  }
  function show(count) {
   document.querySelector("#again").classList.remove("hide");
   document.querySelector("#score").classList.remove("hide");
   document.querySelector("#underScore").innerText=name1.value + " " + name2.value + ", your result: " + count + "/" + questions.length;
  }
  function hide() {
   document.querySelector("#score").classList.add("hide");
  }
  function allAgain() {
   for(let i = 0; i < questions.length;i++) {
    for(let j = 0; j < input[i].length; j++) {
     input[i][j].checked = false;
     container[i][j].classList.remove("red");
     container[i][j].classList.remove("green");
    }
    balls[i].innerText="0/1";
   }
   document.querySelector("#again").classList.add("hide");
   document.querySelector(".black_back").classList.remove("hide");
   name2.value="";
   name1.value="";
  }