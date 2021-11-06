$(document).ready(function() {
  $("#quiz-result").hide();
  $("form#quiz").submit(function(event) {
    event.preventDefault();

    const animalScore1 = $("input:radio[name=animal]:checked").val();
    //Just for testing animal score value
    alert(animalScore1);

    const soulScore1 = $("#soul").val();
    alert(soulScore1);

    const potatoScore1 = $("#favorite-potato").val();
    alert(potatoScore1);

    //When your born doesn't affect the score
    const birthdayScore1 = $("#birthday").val();
    alert("This is your birthday score" + birthdayScore1);

    const bestSongScore1 = $("#best-song").val();
    alert("This is your song score" + bestSongScore1);

    $("#quiz-result").show();
    $("#quiz").hide();
  });
});