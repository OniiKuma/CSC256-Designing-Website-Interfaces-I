var arrGame = [];

for (var i = 0; i < 10; i++) {
    arrGame.push(prompt("List Your Favourite Games: ", ""));
}

arrGame.sort();

for (var i = 0; i < arrGame.length; i++) {
    document.getElementById("test").innerHTML += arrGame[i] + "<br>";
}

function clearList() {
    document.getElementById("test").innerHTML = "";
}