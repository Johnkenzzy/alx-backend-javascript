process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to ALX, what is your name?\n');

process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if (input !== null) {
    const trimmedInput = input.trim();
    process.stdout.write(`Your name is: ${trimmedInput}\n`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
