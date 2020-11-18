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
*/

function smoothScroll (target,duration) {
    var target = document.getElementById(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
    console.log(targetPosition)

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
    smoothScroll("question-2", 1000);
});
q1ButtonB.addEventListener("click", function(){
    smoothScroll("question-2", 1000);
});
q2ButtonC.addEventListener("click", function(){
    smoothScroll("question-3", 1000);
});
q2ButtonD.addEventListener("click", function(){
    smoothScroll("question-3", 1000);
});
q3ButtonE.addEventListener("click", function(){
    smoothScroll("question-4", 1000);
});
q3ButtonF.addEventListener("click", function(){
    smoothScroll("question-4", 1000);
});
q4ButtonG.addEventListener("click", function(){
    smoothScroll("question-5", 1000);
});
q5ButtonH.addEventListener("click", function(){
    smoothScroll("question-5", 1000);
});

