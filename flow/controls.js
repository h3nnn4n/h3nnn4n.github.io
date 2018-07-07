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

function setControls() {
  var slider_n_particles = select('#nparticles');
  slider_n_particles.input(updatenParticles);
  updatenParticles();

  var noise_slider = select('#noiselevel');
  noise_slider.input(updateNoiseValue);
  updateNoiseValue();
}
