// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(this.top, this.left);
};
// use jQuery to create an HTML <span> tag


makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  //setTimeout(makeDancer.prototype.step, this.timeBetweenSteps);
};

// makerDancer.prototype.lineUp = function() {
//   var styleSettings = {
//     top: 0,
//     left: 0
//   };
//   this.$node.css(styleSettings);
// };

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.stop = function() {
  this.$node.finish();
};

// makerDancer.prototype.hover = function() {
//   this.css("color", "green");
// };


makeDancer.prototype.lineEmUp = function() {
  this.setPosition(top, 0);
};

// when we instantiate a 'dancer', 
// every dancer should have a lineup function where called upon, will lineup 

// now that we have defined the dancer object, 
// we can start setting up important parts of it by calling 
// the methods we wrote
// this one sets the position to some random default point within the body

