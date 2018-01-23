var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  // debugger;
  //this.oldStep = makeDancer.prototype.step;
  //this.step();
  this.$node = $('<span class="blinkyDancer"></span>');
  this.setPosition(top, left);
  
};
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);


makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node = $('<span class="blinky-dancer"></span>');

  this.$node.toggle();
  // var getBig = this.$node.animate({
  //   //"borderWidth": 500,
  //   //"borderRadius": 500,
  //   opacity: 100
  // }, 1000, function(getSmall) {
  //   // Animation complete.
  // });

  // var getSmall = this.$node.animate({
  //   //"border-width": "100px",
  //   //"border-radius": "100px",
  //   opacity: 50
  // }, 1000, function(getBig) {
  //   // Animation complete.
  // });
};






