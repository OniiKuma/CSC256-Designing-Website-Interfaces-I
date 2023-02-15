//array to hold the games gathered from the user input
var arrGame = [];

//prompt the user for 10 games. 10 is an arbitrary number. You can even ask the user
//for how many fruits they want to enter
for (var i = 0; i < 10; i++) {
    //add the games the user entered in the JS prompt to the array
    arrGame.push(prompt("List Your Favourite Games: ", ""));
}

//sort the array alphabetically
arrGame.sort();

//loop through the content of the arry and display them to the div
for (var i = 0; i < arrGame.length; i++) {
    document.getElementById("test").innerHTML += arrGame[i] + "<br>";
}

//clear the games from the div
function clearList() {
    document.getElementById("test").innerHTML = "";
}