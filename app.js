/* let buttons = document.getElementsByClassName("formBtn")

for (let i = 0, l = buttons.length; i < l; i++) {
  buttons[i].addEventListener('click', function() {
    console.log("Hello World")
  })
}

let questionContainer = document.getElementsByClassName("field");

for (var i = 0; i < questionContainer.length; i++) {
  questionContainer[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


function smoothScroll (target,duration) {
    var target = document.getElementById(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
    console.log(target)

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed,startPosition,distance,duration)
        window.scrollTo(0,run)
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
};

    requestAnimationFrame(animation);
}

function smoothScroll2 (option,duration) {
    var target = document.getElementById(option);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
    console.log(target)

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed,startPosition,distance,duration)
        window.scrollTo(0,run)
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
};

    requestAnimationFrame(animation);
}
*/
var scroll_to_one = document.getElementById('question-1');
var scroll_to_two = document.getElementById('question-2');
var scroll_to_three = document.getElementById('question-3');
var scroll_to_four = document.getElementById('question-4');
var scroll_to_five = document.getElementById('question-5');



var q1ButtonA = document.getElementById("button-A");
var q1ButtonB = document.getElementById("button-B");
var q2ButtonC = document.getElementById("button-C");
var q2ButtonD = document.getElementById("button-D");
var q3ButtonE = document.getElementById("button-E");
var q3ButtonF = document.getElementById("button-F");
var q4ButtonG = document.getElementById("button-G");
var q4ButtonH = document.getElementById("button-H");
var q5ButtonI = document.getElementById("button-I");

q1ButtonA.addEventListener("click", function(){
    scroll_to_two.scrollIntoView({behavior: 'smooth'});
});
q1ButtonB.addEventListener("click", function(){
    scroll_to_two.scrollIntoView({behavior: 'smooth'});
});
q2ButtonC.addEventListener("click", function(){
    scroll_to_three.scrollIntoView({behavior: 'smooth'});
});
q2ButtonD.addEventListener("click", function(){
    scroll_to_three.scrollIntoView({behavior: 'smooth'});
});
q3ButtonE.addEventListener("click", function(){
    scroll_to_four.scrollIntoView({behavior: 'smooth'});
});
q3ButtonF.addEventListener("click", function(){
    scroll_to_four.scrollIntoView({behavior: 'smooth'});
});
q4ButtonG.addEventListener("click", function(){
    scroll_to_five.scrollIntoView({behavior: 'smooth'});
});
q4ButtonH.addEventListener("click", function(){
    scroll_to_five.scrollIntoView({behavior: 'smooth'});
});
