describe('roamingDancer', function() {

  var roamDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    roamDancer = new makeRoamingDancer(15, 25, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(roamDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node to animate', function() {
    sinon.spy(roamDancer.$node, 'animate');
    roamDancer.step();
    expect(roamDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(roamDancer, 'step');
      expect(roamDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(roamDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(roamDancer.step.callCount).to.be.equal(2);
    });
  });
});