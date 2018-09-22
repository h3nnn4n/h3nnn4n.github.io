function updatenParticles() {
  var slider_n_particles = select('#nparticles');
  nParticles = slider_n_particles.value();
  label = select('#nparticles_label');
  label.html(nParticles + ' Particles:')
  spawn();
}

function updateNoiseValue() {
  var noise_slider = select('#noiselevel');
  noiseValue = noise_slider.value();
  label = select('#noiselevel_label');
  label.html('Noise Level: ' + noiseValue);

  inc = noiseValue;
}

function updateFlowChange() {
  var flow_change = select('#flowchange');
  flow_change_value = flow_change.value();
  label = select('#flowchange_label');
  label.html('Flow Change: ' + flow_change_value);

  zInc = flow_change_value;
}

function updateShowField() {
  var show_field = select('#showfield');
  showField = show_field.checked();
}

function updateWrapAround() {
  var wrap_noise = select('#wrapnoise');
  wrapAround = !wrap_noise.checked();
}

function setControls() {
  var slider_n_particles = select('#nparticles');
  slider_n_particles.input(updatenParticles);
  updatenParticles();

  var noise_slider = select('#noiselevel');
  noise_slider.input(updateNoiseValue);
  updateNoiseValue();

  var show_field = select('#showfield');
  show_field.input(updateShowField);
  updateShowField();

  var wrap_noise = select('#wrapnoise');
  wrap_noise.input(updateWrapAround);
  updateWrapAround();

  var flow_change = select('#flowchange');
  flow_change.input(updateFlowChange);
  updateFlowChange();
}
