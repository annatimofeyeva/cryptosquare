$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputSentence = $("input#sentence").val().toLowerCase();
    var newSentence = inputSentence.replace(/[^A-Za-z0-9_]/g,"");
    var newSentenceArray = newSentence.split("");
    alert(newSentenceArray);
    var numberOfLetters = newSentenceArray.length;


    //alert(inputSentence.length);
    //take the square root of the number of letters to get number of columns
    var numberOfColumns = Math.sqrt(numberOfLetters);
    var numOfColumnsRounded = Math.floor(numberOfColumns);
    alert(numOfColumnsRounded);
    //$('tr').append('a');

    //determine number of rows:
    var numberOfRows = Math.ceil(numberOfLetters/numOfColumnsRounded);
    alert(numberOfRows);
  });
});
