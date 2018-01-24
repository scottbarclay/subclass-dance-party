describe('weavingDancer', function() {

  var weaveDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    weaveDancer = new makeWeavingingDancer(15, 25, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(weaveDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node to animate', function() {
    sinon.spy(weaveDancer.$node, 'animate');
    weaveDancer.step();
    expect(weaveDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(weaveDancer, 'step');
      expect(weaveDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(weaveDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(weaveDancer.step.callCount).to.be.equal(2);
    });
  });
});