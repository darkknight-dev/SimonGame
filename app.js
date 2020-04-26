var keypressed;
var ran_array = [];
var compare;
var a;
var level = 1;
var click_array = [];

$(document).one("keydown", function() {
  keypressed = event.key;
  console.log(keypressed);
  $("#level-title").html("Level 1")
  randomSelector();

});


// function generate_handler( j ) {
//     return function(event) {
//         mouseSelector(j, true);
//     };
// }
// for(var i = 1; i <= k.length; i++){
//    $('.slider-' + i).click( generate_handler( i ) );
//    len = len + 1;
// }

$(".slider-1").click(function() {

  mouseSelector(1);
});

$(".slider-2").click(function() {

  mouseSelector(2);

});

$(".slider-3").click(function() {

  mouseSelector(3);

});

$(".slider-4").click(function() {


  mouseSelector(4);

});




function randomSelector() {
  a = Math.floor((Math.random() * 4) + 1);
  console.log(a);
  ran_array.push(a);

  addAnimation(a);
}

function addAnimation(a) {
  console.log("Inside animation");
  if (a === 1) {

    $(".red").addClass("pressed");
    setTimeout(function() {
      $(".red").removeClass("pressed");
    }, 100);

    var audio = new Audio("sounds/red.mp3");
    audio.play();

  } else if (a === 2) {
    $(".green").addClass("pressed");
    setTimeout(function() {
      $(".green").removeClass("pressed");
    }, 100);
    var audio = new Audio("sounds/green.mp3");
    audio.play();

  } else if (a === 3) {
    $(".blue").addClass("pressed");
    setTimeout(function() {
      $(".blue").removeClass("pressed");
    }, 100);
    var audio = new Audio("sounds/blue.mp3");
    audio.play();

  } else if (a === 4) {
    $(".yellow").addClass("pressed");
    setTimeout(function() {
      $(".yellow").removeClass("pressed");
    }, 100);
    var audio = new Audio("sounds/yellow.mp3");
    audio.play();

  }

}


function mouseSelector(arr) {

  click_array.push(arr);

  console.log("Random array: " + ran_array);
  console.log("Click array: " + click_array);

  compare = _.isEqual(ran_array, click_array);
  console.log("Compare: " + compare);

  if (compare == true) {

    level = level + 1;
    $("#level-title").html("Level " + level);
    click_array = [];
    console.log("After clearing the array"+click_array);
    randomSelector();
  } else {
    console.log("Inside wrong select");
    wrongSelection(click_array);
  }

}

function wrongSelection(click_array) {

if (ran_array.length === click_array.length) {
    $("#level-title").html("Game Over, Press Any Key to Restart");
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $(document).one("keydown", function() {
      keypressed = event.key;
      console.log(keypressed);
      $("#level-title").html("Level 1")
      randomSelector();

    });
  }
  else{
    console.log("Length not matches");
  }
}
