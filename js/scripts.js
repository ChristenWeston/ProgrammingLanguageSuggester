$(document).ready(function() {
  $("form#quiz").submit(function() {
    event.preventDefault();

    const animalScore1 = parseInt($("#question1").val());
    alert(animalScore1);
  });
});