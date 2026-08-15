// numkey - concatenate number to the text
// symbols - concatenate number to text
// backspace - remove last char
// clear - reset all the text
// equal - calculate the result and display

var display = document.getElementById("display")
display.innerHTML = 0

function numKey(num) {
    display.innerHTML += num
}

function backspace() {
    display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1)
}

function clearDisplay() {
    display.innerHTML = ""
}

function calculate() {
    let eqn = display.innerHTML

    try {
        let result = eval(eqn)
        display.innerHTML = result
    } catch (e) {
        display.innerHTML = "Invalid input"
        console.log(e)
    }
}
