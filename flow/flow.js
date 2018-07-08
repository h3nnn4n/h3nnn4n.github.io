var inc = 0.5;
var detail = 75;
var zOff = 0.0;
var zInc = null;
var nParticles = 500;

var wrapAround = true;
var showField = true;

var flow = [];

var particles = [];

var repulsor = null;
var sink = null;

function createFlowField() {
  var xOff = 0.0;
  for (var i = 0; i < width / detail + 1; i++) {
    flow[i] = [];
    var yOff = 0.0;
    xOff += inc;
    for (var j = 0; j < height / detail + 1; j++) {
      yOff += inc;
      var r = map(noise(xOff, yOff, zOff), 0, 1, 0, TWO_PI * 2.0);
      var vec = p5.Vector.fromAngle(r);
      flow[i][j] = vec.setMag(detail);
    }
  }
}

function updateFlowField() {
  var xOff = 0.0;
  var yOff = 0.0;
  for (var i = 0; i < width / detail + 1; i++) {
    if (i < (width / detail + 1) / 2 || wrapAround) {
      xOff += inc;
    } else {
      xOff -= inc;
    }

    yOff = 0.0;
    for (var j = 0; j < height / detail + 1; j++) {
      if (j < (height / detail + 1) / 2 || wrapAround) {
        yOff += inc;
      } else {
        yOff -= inc;
      }

      let diff = map(noise(xOff, yOff, zOff), 0, 1, 0, TWO_PI * 2.0)
               - flow[i][j].heading();
      flow[i][j].rotate(diff);
    }
  }
}

function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = detail / 6;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}

function drawField() {
  var v1 = createVector(0, 0);
  var v2 = createVector(0, 0);

  for (var i = 0; i < width / detail; i++) {
    for (var j = 0; j < height / detail; j++) {
      let x1 = i * detail + detail / 2;
      let y1 = j * detail + detail / 2;

      let x2 = x1 + flow[i][j].x / 1.5;
      let y2 = y1 + flow[i][j].y / 1.5;

      v1.x = x1;
      v1.y = y1;

      v2.x = x2 - x1;
      v2.y = y2 - y1;

      drawArrow(v1, v2, 'black');
    }
  }
}

function spawn() {
  if (particles.length < nParticles) {
    var diff = nParticles - particles.length;
    for (var i = 0; i < diff; i++) {
      particles[i] = new Particle();
    }
  } else if (particles.length > nParticles) {
    var diff = particles.length - nParticles;
    for (var i = 0; i < diff; i++) {
      particles.pop();
    }
  }

  //if (!repulsor) {
    //repulsor = new Particle();
  //}

  //if (!sink) {
    //sink = new Particle();
  //}
}

function setup() {
  var cnv = createCanvas(800, 600);
  cnv.parent('flow-controls');

  setControls();

  createFlowField();
  spawn();
}

function draw() {
  background(255, 25);
  zOff += zInc;

  updateFlowField();

  if (showField) {
    drawField();
  }

  if (repulsor) {
    repulsor.follow(flow);
    repulsor.update();
    repulsor.wrap();
    repulsor.show();

    fill(color('cyan'));
    stroke(color('cyan'));

    //ellipse(repulsor.position.x, repulsor.position.y, 15, 15);
  }

  if (sink) {
    sink.follow(flow);
    sink.update();
    sink.wrap();
    sink.show();

    fill(color('magenta'));
    stroke(color('magenta'));

    //ellipse(sink.position.x, sink.position.y, 15, 15);
  }

  for (var i = 0, len = particles.length; i < len; i++) {
    var p = particles[i];
    p.follow(flow);

    if (repulsor) {
      var angle = atan2(repulsor.position.y - p.position.y, repulsor.position.x - p.position.x);
      var v = p5.Vector.fromAngle(angle);
      var d = dist(repulsor.position.x, repulsor.position.y, p.position.x, p.position.y);
      var strenght = 50 / d;
      v.setMag(-strenght * detail);
      p.applyForce(v);
    }

    if (sink) {
      var angle = atan2(sink.position.y - p.position.y, sink.position.x - p.position.x);
      var v = p5.Vector.fromAngle(angle);
      var d = dist(sink.position.x, sink.position.y, p.position.x, p.position.y);
      var strenght = 50 / d;
      v.setMag(strenght * detail);
      p.applyForce(v);

      if (d < 15 && false) {
        p.position.x = repulsor.position.x;
        p.position.y = repulsor.position.y;

        p.velocity.x = 0;
        p.velocity.y = 0;

        p.acceleration.x = 0;
        p.acceleration.y = 0;
      }
    }

    p.update();

    p.wrap();
    p.show();
  }
}
