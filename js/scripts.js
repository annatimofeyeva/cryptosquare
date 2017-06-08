$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputSentence = $("input#sentence").val().toLowerCase();
    alert(inputSentence.replace(/[^A-Za-z0-9_]/g,""));
    var numberOfLetters = inputSentence.length;

    //alert(inputSentence.length);
    //take the square root of the number of letters to get number of columns
    var numberOfColumns = Math.sqrt(numberOfLetters);
    alert(numberOfColumns);

    //determine number of rows:
    var numberOfRows = Math.round(numberOfLetters/numberOfColumns);
    alert(numberOfRows);
  });
});
