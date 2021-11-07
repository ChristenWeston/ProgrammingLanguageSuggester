$(document).ready(function() {
  $("#quiz-result").hide();
  $("#quiz-result2").hide();
  $("#quiz-result3").hide();
  $("#quiz-result4").hide();
  $("#quiz-result5").hide();
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const animalScore1 = parseInt($("input:radio[name=animal]:checked").val());
    const soulScore1 = parseInt($("#soul").val());
    const potatoScore1 = parseInt($("#favorite-potato").val());
    //When your born doesn't affect the score
    const birthdayScore1 = $("#birthday").val();
    const bestSongScore1 = parseInt($("#best-song").val());
    const totalScore = animalScore1 + soulScore1 + potatoScore1 + bestSongScore1;
    if (totalScore === 20) {
      $("#quiz-result").show();
      $("#quiz-result2").hide();
      $("#quiz-result3").hide();
      $("#quiz-result4").hide();
      $("#quiz-result5").hide();
    } else if (totalScore <= 19 && totalScore>= 15) {
      $("#quiz-result2").show();
      $("#quiz-result").hide();
      $("#quiz-result3").hide();
      $("#quiz-result4").hide();
      $("#quiz-result5").hide();
    } else if (totalScore <15 && totalScore >10) {
      $("#quiz-result3").show();
      $("#quiz-result").hide();
      $("#quiz-result2").hide();
      $("#quiz-result4").hide();
      $("#quiz-result5").hide();
    } else if (totalScore <=10 && totalScore > 3) {
      $("#quiz-result4").show();
      $("#quiz-result").hide();
      $("#quiz-result2").hide();
      $("#quiz-result3").hide();
      $("#quiz-result5").hide();
    } else if (totalScore === 3) {
      $("#quiz-result5").show();
      $("#quiz-result").hide();
      $("#quiz-result2").hide();
      $("#quiz-result3").hide();
      $("#quiz-result4").hide();
    }
  });
});