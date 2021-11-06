$(document).ready(function() {
  $("#quiz-result").hide();
  $("form#quiz").submit(function(event) {
    event.preventDefault();

    const animalScore1 = parseInt($("input:radio[name=animal]:checked").val());
    //Just for testing animal score value
    alert(animalScore1);

    const soulScore1 = parseInt($("#soul").val());
    alert(soulScore1);

    const potatoScore1 = parseInt($("#favorite-potato").val());
    alert(potatoScore1);

    //When your born doesn't affect the score
    const birthdayScore1 = $("#birthday").val();
    alert("This is your birthday score" + birthdayScore1);

    const bestSongScore1 = parseInt($("#best-song").val());
    alert("This is your song score" + bestSongScore1);

    const totalScore = animalScore1 + soulScore1 + potatoScore1 + bestSongScore1;
    alert("This is your total score" + totalScore);
    
    let result;

    $("#quiz-result").show();
    $("#quiz").hide();
  });
});