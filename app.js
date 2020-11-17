let buttons = document.getElementsByClassName("formBtn")

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