var inc = 0.5;
var detail = 50;
var zOff = 0.0;
var nParticles = 500;

var flow = [];

var particles = [];

function updateFlowField() {
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

function drawField() {
  for (var i = 0; i < width / detail; i++) {
    for (var j = 0; j < height / detail; j++) {
      line(i * detail, j * detail, i * detail + flow[i][j].x, j * detail + flow[i][j].y);
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

  updateFlowField();
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
