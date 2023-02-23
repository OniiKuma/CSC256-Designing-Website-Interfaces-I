//this function gathers the input from the form
function processForm() {
    //make the footer visible
    document.getElementById("footer").style.display = "";
    //make the div visible
    document.getElementById("userInfo").style.display = "";
    //show the username in the userName div
    document.getElementById("userName").innerText = document.getElementById("uname").value;
    //show the weapons in the userWeapons div
    document.getElementById("userWeapons").innerText = document.getElementById("weapons").value;    
    //show the health and damage in the userHealth div
    document.getElementById("userHealth").innerText = document.getElementById("health").value;
    //show the points in the userPoints div
    document.getElementById("userPoints").innerText = document.getElementById("points").value;
}
