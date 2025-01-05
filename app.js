const lowercaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const uppercaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', " "];

const specialChr = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '-', '_', '.',];


var useUpper = true;
var useLower = true;
var useNum = true;
var userSpecial = true;
var length = 8;
var pronouceable = true;

const include = {
    "upper": useUpper,
    "lower": useLower,
    "num": useNum,
    "special": userSpecial,
}



function lengthChange(action) {

    if (length > 1 && length < 20) {
        action == "add" ? length += 1 : length -= 1;
        length < 10 ? document.getElementById("lengthShow").innerHTML = `0${length}` : document.getElementById("lengthShow").innerHTML = length
    }
    else if (length == 1) {
        action == "add" ? length += 1 : null;
        length < 10 ? document.getElementById("lengthShow").innerHTML = `0${length}` : document.getElementById("lengthShow").innerHTML = length
    }
    else if (length == 20) {
        action == "add" ? null : length -= 1;
        length < 10 ? document.getElementById("lengthShow").innerHTML = `0${length}` : document.getElementById("lengthShow").innerHTML = length
    }

}

function includeFunc(box, item) {

    box.getAttribute("aria-state") == "on" ? box.setAttribute("aria-state", "off") : box.setAttribute("aria-state", "on")


    if (box.getAttribute("aria-state") == "on") {
        box.classList.add("checkboxOn")
        box.classList.add("checkboxAnim")
        setTimeout(() => {
            box.classList.remove("checkboxAnim")
        }, 400);
    }
    else {
        box.classList.remove("checkboxOn")
        box.classList.add("checkboxAnim")
        setTimeout(() => {
            box.classList.remove("checkboxAnim")
        }, 400);
    }

    box.getAttribute("aria-state") == "on" ? include[item] = true : include[item] = false;
}
