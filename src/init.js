$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    //window.dancers.push(dancerMakerFunctionName);
    // console.log(window.dancers);
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // console.log(window[dancerMakerFunctionName]);
    // make a dancer with a random position

    // var lineThemUpFunctionName = $(this).data('line-dancers-up');
    
    // var lineThemUpFunction = window[lineThemUpFunctionName];
    

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $("#lineUp").on('click', function(event) {
    //debugger;
    for (var i = 0; i < window.dancers.length; i++) {
      //console.log(this);
      // debugger;
      var dancers = window.dancers[i];
      dancers.stop();
      dancers.lineEmUp();
    }
  });

  // var collision = function() {
  //   for (var i = 0; i < window.dancers.length; i++) {
  //     console.log(window.dancers[i].left); 
  //   }
  // };

  setInterval(function() {
    var test = document.getElementsByClassName('weavingDancer');
    console.log(window.dancers);
    var leftCoord = window.dancers[0].left;
    var topCoord = window.dancers[0].top;
  //   window.dancers.filter(function(value) {
  //     return value
  // });
    

    for (var i = 0; i < window.dancers.length; i++) {
      

      if (spin === 'weavingDancer') {
        console.log('true');
      }
    }
  }, 1000);

  // $(".dancer").on('mouseenter', function(event) {
  //   $(this).css('color', 'green');
  // });
    
});

