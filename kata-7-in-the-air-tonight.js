const checkAir = function (samples, threshold) {
  // Code here!
  // console.log(samples);
  // console.log(threshold);
  let rate = 0;
  for (let i = 0; i < samples.length; i++) {
    // console.log(samples[i]);
    if (samples[i] === 'dirty') {
      rate = rate + 1;
    }
  }
  let result = rate / samples.length;
  // console.log(result);
  if (result > threshold) {
    return 'Polluted';
  } else {
    return 'Clean';
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
