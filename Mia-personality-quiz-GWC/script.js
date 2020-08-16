//Global Variables
//This is where you will define the variables you will be using in your project.
//questionCount 
var questionCount = 0;
//Season scores
var winterScore= 0;
var springScore = 0;
var summerScore = 0;
var fallScore = 0;




//ElementById
//Question One Answers
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
//Question Two Answers
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
//Question Three Answers
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
//Question Four Answers
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");
//Question Five Answers
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");


//Result
var result = document.getElementById("result");







//EventListener
//Question One Answers
q1a1.addEventListener("click", fall);
q1a2.addEventListener("click", summer);
q1a3.addEventListener("click", winter);
q1a4.addEventListener("click", spring);
//Question Two Answers
q2a1.addEventListener("click", summer);
q2a2.addEventListener("click", spring);
q2a3.addEventListener("click", fall);
q2a4.addEventListener("click", winter);
//Question Three Answers
q3a1.addEventListener("click", spring);
q3a2.addEventListener("click", winter);
q3a3.addEventListener("click", summer);
q3a4.addEventListener("click", fall);
//Question Four Answers
q4a1.addEventListener("click", winter);
q4a2.addEventListener("click", summer);
q4a3.addEventListener("click", spring);
q4a4.addEventListener("click", fall);
//Question Five Answers
q5a1.addEventListener("click", fall);
q5a2.addEventListener("click", summer);
q5a3.addEventListener("click", winter);
q5a4.addEventListener("click", spring);


//Answer functions
//updateResult function
function updateResult(){
  if (winterScore >= 3){
    result.innerHTML = "You are just like winter! This means that you might be a bit of a homebody, and staying warm inside may appeal to you when it's cold out";
  }
  else if (springScore >= 3){
    result.innerHTML = "You are just like spring! This means that you crave new experiences and love to spend time with people.";
  }
  else if (summerScore >= 3){
    result.innerHTML = "You are just like summer! This means that you love to travel and enjoy the outdoors, and you are probably on the extroverted outgoing side.";
  }
  else if (fallScore >= 3){
    result.innerHTML = "You are just like fall! This means that you love change and having a fresh start and time for renewal.";
  }
  else {
    result.innerHTML = "You seem to like multiple. This means you do not fall strictly into one category, and your personality is a combination of multiple traits ¯\_(ツ)_/¯";
  }
}
//winter function
function winter(){
  winterScore += 1;
  questionCount += 1;
  if (questionCount >= 5){
    updateResult();
  }
}
//spring function
function spring(){
  springScore += 1;
  questionCount += 1;
  if (questionCount >= 5){
    updateResult();
  }
}
//summer function
function summer(){
  summerScore += 1;
  questionCount += 1;
  if (questionCount >= 5){
    updateResult();
  }
}
//fall function
function fall(){
  fallScore += 1;
  questionCount += 1;
  if (questionCount >= 5){
    updateResult();
  }
}

//disable the buttons for question one
function disableq1(){
  q1a1.disabled = "true";
  q1a2.disabled = "true";
  q1a3.disabled = "true";
  q1a4.disabled = "true";
}

q1a1.addEventListener("click", disableq1);
q1a2.addEventListener("click", disableq1);
q1a3.addEventListener("click", disableq1);
q1a4.addEventListener("click", disableq1);

//disable buttons for question two
function disableq2(){
  q2a1.disabled = "true";
  q2a2.disabled = "true";
  q2a3.disabled = "true";
  q2a4.disabled = "true";
}

q2a1.addEventListener("click", disableq2);
q2a2.addEventListener("click", disableq2);
q2a3.addEventListener("click", disableq2);
q2a4.addEventListener("click", disableq2);

//disable buttons for question three
function disableq3(){
  q3a1.disabled = "true";
  q3a2.disabled = "true";
  q3a3.disabled = "true";
  q3a4.disabled = "true";
}

q3a1.addEventListener("click", disableq3);
q3a2.addEventListener("click", disableq3);
q3a3.addEventListener("click", disableq3);
q3a4.addEventListener("click", disableq3);

//disable buttons for question four
function disableq4(){
  q4a1.disabled = "true";
  q4a2.disabled = "true";
  q4a3.disabled = "true";
  q4a4.disabled = "true";
}

q4a1.addEventListener("click", disableq4);
q4a2.addEventListener("click", disableq4);
q4a3.addEventListener("click", disableq4);
q4a4.addEventListener("click", disableq4);

//disable buttons for question five
function disableq5(){
  q5a1.disabled = "true";
  q5a2.disabled = "true";
  q5a3.disabled = "true";
  q5a4.disabled = "true";
}

q5a1.addEventListener("click", disableq5);
q5a2.addEventListener("click", disableq5);
q5a3.addEventListener("click", disableq5);
q5a4.addEventListener("click", disableq5);

