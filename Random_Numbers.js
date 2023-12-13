// Task 1:
function rand(a, b, n) {
  const randomNumbers = [];
  for (let i = 0; i < n; i++) {
    const randomNumber = Math.floor(Math.random() * (b - a + 1)) + a;
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}

// Task 2:
function countOccurrences(array) {
  const counts = {};
  array.forEach(num => {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  });
  return counts;
}

// Task 3:
function getUserInputAndPrintOccurrences() {
  const a = Number(prompt('Enter the lower bound of the range:'));
  const b = Number(prompt('Enter the upper bound of the range:'));
  const n = Number(prompt('Enter the number of elements to generate:'));

  const randomNumbers = rand(a, b, n);
  const occurrences = countOccurrences(randomNumbers);

  console.log(`Generated numbers: ${randomNumbers.join(', ')}`);
  for (const num in occurrences) {
    console.log(`${num} is repeated ${occurrences[num]} times`);
  }
}

getUserInputAndPrintOccurrences();
