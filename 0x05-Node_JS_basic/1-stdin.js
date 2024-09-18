const readline = require('readline');

const fc = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

fc.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);

  fc.close();
});
fc.on('close', () => {
    console.log('This important software is now closing');
});
