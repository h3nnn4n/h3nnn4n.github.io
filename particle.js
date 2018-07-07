function Particle() {
  this.maxAcceleration = 1.0;
  this.maxVelocity = 5.0;

  this.position = createVector(floor(random(width)), floor(random(height)));
  this.velocity = createVector(random(TWO_PI) - PI, random(TWO_PI) - PI);
  this.acceleration = createVector(random(TWO_PI) - PI, random(TWO_PI) - PI);
  this.lastPosition = this.position.copy();

  this.update = function() {
    this.lastPosition = this.position.copy();
    this.acceleration.setMag(this.maxAcceleration);
    this.velocity.setMag(this.maxVelocity);
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
  }

  this.show = function() {
    line(this.position.x, this.position.y, this.lastPosition.x, this.lastPosition.y);
  }

  this.applyForce = function(force) {
    let scaledForce = force.copy();
    this.acceleration.add(scaledForce.setMag(1.0));
  }

  this.follow = function(forces) {
    let i = floor(this.position.x / detail);
    let j = floor(this.position.y / detail);

    if (i >= 0 && j >= 0 && i < forces.length && j < forces.length) {
      let force = forces[i][j];
      this.applyForce(force);
    }
  }

  this.wrap = function() {
    if (this.position.x < 0) {
      this.position.x = width;
      this.lastPosition.x = width;
    }

    if (this.position.x > width) {
      this.position.x = 0;
      this.lastPosition.x = 0;
    }

    if (this.position.y < 0) {
      this.position.y = height;
      this.lastPosition.y = height;
    }

    if (this.position.y > height) {
      this.position.y = 0;
      this.lastPosition.y = 0;
    }
  }
}
