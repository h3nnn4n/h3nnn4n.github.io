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
  for (var i = 0; i < width / detail; i++) {
    for (var j = 0; j < height / detail; j++) {
      let x1 = i * detail;
      let y1 = j * detail;

      let x2 = i * detail + flow[i][j].x;
      let y2 = j * detail + flow[i][j].y;

      let angle = atan2(y2 - y1, x2 - x2);

      stroke(
        map(angle, -PI, PI, 0, 255),
        0,
        map(angle, -PI, PI, 255, 0)
      );

      line(x1, y1, x2, y2);
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
