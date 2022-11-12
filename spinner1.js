const spinner1 = function(times) {
  let timeoutAdd = 100;
  let delay = 200;

  for (let i = 1; i <= times; i++) {
    setTimeout(() => {
      process.stdout.write('\r|   ');
    }, timeoutAdd);

    timeoutAdd += delay;

    setTimeout(() => {
      process.stdout.write('\r/   ');
    }, timeoutAdd);

    timeoutAdd += delay;

    setTimeout(() => {
      process.stdout.write('\r-   ');
    }, timeoutAdd);

    timeoutAdd += delay;

    setTimeout(() => {
      // Need to escape the backslash since it's a special character.
      process.stdout.write('\r\\   ');
    }, timeoutAdd);

    timeoutAdd += delay;
  }
  
};

spinner1(2);