$(document).ready(function() {
  $("#quiz-result").hide();
  $("form#quiz").submit(function(event) {
    event.preventDefault();

    const animalScore1 = $("input:radio[name=animal]:checked").val();
    //Just for testing animal score value
    alert(animalScore1);


    $("#quiz-result").show();
    $("#quiz").hide();
  });
});