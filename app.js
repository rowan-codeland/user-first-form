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

