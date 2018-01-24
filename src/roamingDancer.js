var makeRoamingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  // debugger;
  //this.oldStep = makeDancer.prototype.step;
  //this.step();
  this.$node = $('<span class="dancer roamingDancer"></span>');
  this.setPosition(top, 0);
  
};
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

makeRoamingDancer.prototype = Object.create(makeDancer.prototype);


makeRoamingDancer.prototype.constructor = makeRoamingDancer;

makeRoamingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node = $('<span class="blinky-dancer"></span>');
  // this.$node.toggle();
  



  var width = $(document).width();

  var goRight = this.$node.animate({
    opacity: 0.5,
    left: "+=100",
    //height: "toggle"
  }, 100, function() {
    // var windowWidth = $(window).width();
    // if (this.$node.css("left") === windowWidth - 20) {
    //   debugger;
    //   goLeft();
    // }
    // goLeft();
    // }
    // Animation complete.
  });
  
  var goLeft = this.$node.animate({
    opacity: 0.5,
    left: "-=50",
    //height: "toggle"
  }, 100, function() {
    // Animation complete.
  });
};





// $( "#clickme" ).click(function() {
//   $( "#book" ).animate({
//     opacity: 0.25,
//     left: "+=50",
//     height: "toggle"
//   }, 5000, function() {
//     // Animation complete.
//   });
// });
