document.getElementById("guessColor").onclick = function() {
    correctColor = Math.floor((Math.random() * 3));
    document.getElementById("colorBox").style.display = "block";

    console.log(document.getElementById("color").value);

    if(document.getElementById("color").value == correctColor) {
        alert("Correct! The answer is " + determineColor(correctColor))
        document.getElementById("colorBox").style.borderColor = "green";
    }
    else {
        alert("Incorrect! The answer is " + determineColor(correctColor))
        document.getElementById("colorBox").style.borderColor = "red";
    }
}

function determineColor(correctColor) {
    if(correctColor == 0) {
        document.getElementById("colorBox").style.backgroundColor = "cyan";
        return "Cyan";
    }
    else if(correctColor == 1) {
        document.getElementById("colorBox").style.backgroundColor = "purple";
        return "Purple";
    }
    else if(correctColor == 2) {
        document.getElementById("colorBox").style.backgroundColor = "yellow";
        return "Yellow";
    }
}