let buttons = document.getElementsByClassName("formBtn")
for (let i = 0, l = buttons.length; i < l; i++) {
  buttons[i].addEventListener('click', function() {
    console.log("Hello World")
  })
}