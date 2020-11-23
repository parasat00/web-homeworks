var textArea = document.getElementById("t-area");
var characterCount = document.getElementById("charCount");
var wordCount = document.getElementById("wordCount");
var sentencesCount = document.getElementById("sentencesCount");
var paragraphCount = document.getElementById("paragraphCount");
var readingTime = document.getElementById("time");
var topKeywords = document.querySelector(".topKeywords");

textArea.addEventListener('keyup', function() {
 console.clear();
 characterCount.innerHTML = textArea.value.length;
 var a = textArea.value.match(/\b[-?(\w+)?]+\b/gi);
 if(a === null) {
  wordCount.innerHTML = 0;
  readingTime.innerHTML = 0;
 }
 else {
  wordCount.innerHTML = a.length;
  var seconds = Math.floor(a.length * 60 / 130);
    if (seconds > 59) {
      var minutes = Math.floor(seconds / 60);
      seconds = seconds - minutes * 60;
      readingTime.innerHTML = minutes + "m " + seconds;
    } else {
      readingTime.innerHTML = seconds;
    }
 }
 sentencesCount.innerHTML = textArea.value.split(/[.|!|?]+/g).length - 1;
//  console.log(textArea.value);
 if(textArea.value === "") {
  paragraphCount.innerHTML = 0;
 }
 else{
  paragraphCount.innerHTML = textArea.value.replace(/\n$/gm, '').split(/\n/).length;
 }
 
  if(a !== null) {
     if (words) {

    for (var i = 0; i < a.length; i++) {
    a[i].toLowerCase();
    }
    var ab = [];
    var stopWords = ["a", "able", "about", "also", "although", "am", "an", "and", "any", "anybody", "are", "arent", "as", "ask", "at", "be",  "been", "but", "by", "did", "didn't", "do", "does", "doesn't", "doing", "done", "don't","due","each", "else","etc", "every", "for","get", "go", "goes", "gone", "got", "gotten", "had", "has", "hasn't", "have", "haven't", "having","hence", "here", "how", "if", "in",  "is", "isn't", "it", "itd", "it'll", "its", "itself", "i've", "kg", "km", "oh", "was", "wasn't", "we", "we'll", "were", "weren't", "we've", "what", "whatever", "what'll", "whats", "when", "whenever", "where", "whereafter", "whereas", "whereby", "wherein", "wheres", "whereupon", "wherever", "whether", "which", "while", "whim", "whither", "who", "whod", "whoever", "whole", "who'll", "whom", "whomever", "whos", "whose", "why", "with", "within", "without", "won't", "would", "wouldn't", "www", "you", "youd", "you'll", "your", "youre", "yours", "yourself", "yourselves", "you've"];
    for (var i = 0; i < words.length; i++) {
      // filtering out stop words and numbers
      if (stopWords.indexOf(a[i]) === -1 && isNaN(words[i])) {
        a.push(words[i].toLowerCase());
      }
    }

    var keywords = {};
  
  for (var i = 0; i < a.length; i++) {
    if (a[i] in keywords) {
      keywords[a[i]] += 1;
    } else {
      keywords[a[i]] = 1;
    }
  }
  var sortedKeywords = [];
  for (var keyword in keywords) {
    sortedKeywords.push([keyword, keywords[keyword]])
  }
  sortedKeywords.sort(function(a, b) {
    return b[1] - a[1]
  });
  // console.log(sortedKeywords);

   topKeywords.innerHTML = "";
    for (var i = 0; i < 4 && i < sortedKeywords.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = sortedKeywords[i][0] + ": " + sortedKeywords[i][1];
      topKeywords.appendChild(div);
    }
  }
});
