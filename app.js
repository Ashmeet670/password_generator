const lowercaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const uppercaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const specialChr = ['!', '@', '#', '$', '%', '&', '-', '_'];



var passLength = 8;
var remember = true;

var usable = [lowercaseAlphabet, uppercaseAlphabet, numbers, specialChr]

var password = ""

function generatePassword() {
    password = ""
    document.getElementById("passwordOutput").innerHTML = password
    current = 0

    while (current < passLength) {
        list = Math.round(Math.random() * (usable.length - 1))
        chr = Math.round(Math.random() * ((usable[list]).length - 1))
        password += usable[list][chr]
        current++
    }

    document.getElementById("passwordOutput").innerHTML = password
}



const include = {
    "upper": uppercaseAlphabet,
    "lower": lowercaseAlphabet,
    "num": numbers,
    "special": specialChr,
}

function lengthChange(action, btn) {


    if (passLength > 1 && passLength < 20) {
        action == "add" ? passLength += 1 : passLength -= 1;
        passLength < 10 ? document.getElementById("lengthShow").innerHTML = `0${passLength}` : document.getElementById("lengthShow").innerHTML = passLength
    }
    else if (passLength == 1) {
        action == "add" ? passLength += 1 : null;
        passLength < 10 ? document.getElementById("lengthShow").innerHTML = `0${passLength}` : document.getElementById("lengthShow").innerHTML = passLength
    }
    else if (passLength == 20) {
        action == "add" ? null : passLength -= 1;
        passLength < 10 ? document.getElementById("lengthShow").innerHTML = `0${passLength}` : document.getElementById("lengthShow").innerHTML = passLength
    }

}

function includeFunc(box, item) {

    box.getAttribute("aria-state") == "on" ? box.setAttribute("aria-state", "off") : box.setAttribute("aria-state", "on")


    if (box.getAttribute("aria-state") == "on") {
        box.classList.add("checkboxOn")
        box.classList.add("checkboxAnim")
        setTimeout(() => {
            box.classList.remove("checkboxAnim")
        }, 260);
    }
    else {
        box.classList.remove("checkboxOn")
        box.classList.add("checkboxAnim")
        setTimeout(() => {
            box.classList.remove("checkboxAnim")
        }, 260);
    }

    box.getAttribute("aria-state") == "on" ? usable.push(include[item]) : usable.splice(usable.indexOf(include[item]), 1);
}

function rememberToggle(box) {
    box.getAttribute("aria-state") == "on" ? box.setAttribute("aria-state", "off") : box.setAttribute("aria-state", "on")
    box.getAttribute("aria-state") == "on" ? remember = true : remember = false

    if (box.getAttribute("aria-state") == "on") {
        box.classList.add("checkboxOn")
        box.classList.add("checkboxAnim")
        setTimeout(() => {
            box.classList.remove("checkboxAnim")
        }, 260);
    }
    else {
        box.classList.remove("checkboxOn")
        box.classList.add("checkboxAnim")
        setTimeout(() => {
            box.classList.remove("checkboxAnim")
        }, 260);
    }
}

