const body = document.body
const inputField = document.getElementById("color_input")
const copyIcon = document.getElementById("copy-icon")

function copyInputValue() {
    inputField.select()
    document.execCommand("copy")

    // change the copy icon for a second
    copyIcon.classList.remove("fa-copy")
    copyIcon.classList.add("fa-check")

    setTimeout(function() {
        copyIcon.classList.remove("fa-check")
        copyIcon.classList.add("fa-copy")
    }, 3000)
}

function changeBackground() {
    // generate random hex color code
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16)

    body.style.backgroundColor = randomColor

    // set the input field
    inputField.value = randomColor
}

// set the background color of the body on input
inputField.addEventListener("keyup", (e) => {
    body.style.backgroundColor = inputField.value
})