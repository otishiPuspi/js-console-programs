let colors = ["red", "green", "blue", "yellow"];
let currentColor = "";
let score = 0;

function startGame(){
    score = 0;
    document.getElementById("score").innerText = "Score: 0";
    nextColor();
}

function nextColor(){
    let randomIndex = Math.floor(Math.random() * colors.length);
    currentColor = colors[randomIndex];
    document.getElementById("colorBox").style.backgroundColor = currentColor;
}

function checkColor(userColor){
    if(currentColor === "") return;

    if(userColor === currentColor){
        score++;
        // alert("✅ Correct!");
    document.getElementById("result").innerHTML = "✅ Correct!";
    } else {
       // alert("❌ Wrong! Game Over\nFinal  Score:" + score);
    document.getElementById("result").innerHTML =`❌ Wrong! Game Over\nFinal  Score: ${score}`;
        currentColor = "";
        return;
    }

    document.getElementById("score").innerText = "Score: " + score;
    nextColor();
}
