process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if (input) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
