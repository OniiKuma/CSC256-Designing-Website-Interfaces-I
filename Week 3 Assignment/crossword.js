// this function builds a 3 word crossword puzzle
function loadCrosswordPuzzle() {
    //this is the table on the html page
    var table = document.getElementById("puzzle");
    //an array that holds the words for the crossword puzzle
    var arrWords = new Array("JavaScript", "cascade", "html",)
    //this is the second row on the table
    var tr = table.rows[1];

    //this for loop prints out the first word in the array on the second row of the table
    for (var i=0; i<arrWords[0].length; i++){
        //this is the cell that will have a letter added to it
        var cell = tr.cells[i]
        //inner Text allows you to change the text of the cell
        cell.innerText = arrWords[0][i];
    }

    //this for loop prints out the second word in the array on the second collumn of the table
    for (var i = 0; i<arrWords[1].length; i++) {
        //each time the loop runs we need to change the current row
        var trow = table.rows[i];
        //this is the second collumn in the current row
        var cell =trow.cells[1];
        cell.innerText = arrWords[1][i];
    }

    //this for loop prints out the third word in the array on the last collumn of the table
    for (var i = 0; i<arrWords[2].length; i++) {
        //each time the loop runs we need to change the current row
        var trow = table.rows[i];
        //this is the second collumn in the current row
        var cell =trow.cells[9];
        cell.innerText = arrWords[2][i];
    }
}