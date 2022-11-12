const spinner2 = function(iterations, startDelay, interval) {
  let printOut = ['|', '/', '-', '\\'];
  for (let i = 1; i <= iterations; i++) {
    for (let j of printOut) {
      setTimeout(() => {
        process.stdout.write(`\r${j}   `);
      }, startDelay + interval);
      startDelay += interval;
    }
  }
};
spinner2(2, 100, 200);