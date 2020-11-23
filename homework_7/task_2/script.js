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
  topKeywords.innerHTML = "";
 }
 else{
  paragraphCount.innerHTML = textArea.value.replace(/\n$/gm, '').split(/\n/).length;
 }
 
  if(a !== null) {
    for (var i = 0; i < a.length; i++) {
    a[i].toLowerCase();
    }
    var ab = [];
    var stopWords = ["a", "able", "about", "also", "am", "an", "and", "any", "anybody", "are", "arent", "as", "ask", "at", "be",  "been", "but", "by", "did", "didn't", "do", "does", "doesn't", "doing", "done", "don't","due","each", "else","etc", "every", "for","get", "go", "goes", "gone", "got", "gotten", "had", "has", "hasn't", "have", "haven't", "having","hence", "here", "how", "if", "in",  "is", "isn't", "it", "itd", "it'll", "its", "i've", "kg", "km", "oh", "the", "to", "was", "wasn't", "we", "we'll", "were", "weren't", "we've", "what", "whatever", "what'll", "whats", "when", "whenever", "where", "whereafter", "whereas", "whereby", "wherein", "wheres", "whereupon", "wherever", "whether", "which", "while", "whim", "whither", "who", "whod", "whoever", "whole", "who'll", "whom", "whomever", "whos", "whose", "why", "would", "wouldn't", "www", "you",];
    for (var i = 0; i < a.length; i++) {
      if (stopWords.indexOf(a[i]) === -1 && isNaN(a[i])) {
        ab.push(a[i].toLowerCase());
      }
    }

    var keywords = {};
  
  for (var i = 0; i < ab.length; i++) {
    if (ab[i] in keywords) {
      keywords[ab[i]] += 1;
    } else {
      keywords[ab[i]] = 1;
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
