$(document).ready(function() {
  $("#quiz-result").hide();
  $("#quiz-result2").hide();
  $("#quiz-result3").hide();
  $("#quiz-result4").hide();
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
    alert("This is your total score (Max: 20 Min:3) :" + totalScore);

    let result;
    if (totalScore === 20) {
      result = $("#quiz-result").show();
    } else if (totalScore <= 19 && totalScore>= 15) {
      result = $("#quiz-result2").show();
    } else if (totalScore <15 && totalScore >10) {
      result = $("#quiz-result3").show();
    } else if (totalScore <=10 && totalScore > 3) {
      result = $("#quiz-result4").show();
    } else if (totalScore === 3) {
      result = Go;
    }

    //Show result
    //$("#quiz-result").show();
    $("#quiz").hide();
  });
});