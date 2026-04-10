console.log('Running tests...');
// Simulate test failure
if (false) {
  console.log('   Tests passed');
  process.exit(0);
} else {
  console.error('   Tests failed');
  process.exit(1);
}
