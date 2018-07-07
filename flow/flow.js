var inc = 0.5;
var detail = 50;
var zOff = 0.0;
var nParticles = 500;

var flow = [];

var particles = [];

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
    if (i < (width / detail + 1) / 2) {
      xOff += inc;
    } else {
      xOff -= inc;
    }

    yOff = 0.0;
    for (var j = 0; j < height / detail + 1; j++) {
      if (j < (height / detail + 1) / 2) {
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

function drawField() {
  var v = createVector(0, 0);
  for (var i = 0; i < width / detail; i++) {
    for (var j = 0; j < height / detail; j++) {
      let x1 = i * detail + detail / 2;
      let y1 = j * detail + detail / 2;

      let x2 = x1 + flow[i][j].x / 1.5;
      let y2 = y1 + flow[i][j].y / 1.5;

      let angle = atan(y1 - y2, x1 - x2);
      v.rotate(angle);
      line(x1 + v.x, y1 +  v.y, x2 + v.x, y2 +  v.y);
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
  zOff += 0.001;

  updateFlowField();
  //drawField();

  for (var i = 0, len = particles.length; i < len; i++) {
    var p = particles[i];
    p.follow(flow);
    p.update();
    p.wrap();
    p.show();
  }
}
