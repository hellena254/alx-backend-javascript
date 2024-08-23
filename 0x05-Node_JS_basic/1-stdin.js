console.log('Welcome to Holberton School, what is your name?')

// listen for data input from stdin
process.stdin.on('data', (data) => {
  // remove any extra whitespace
  const name = data.toString().trim();

  // Display users' input
  console.log(`Your name is: ${name}`);

  process.exit();
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
